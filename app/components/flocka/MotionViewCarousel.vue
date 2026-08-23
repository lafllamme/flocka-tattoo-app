<script setup lang="ts">
interface MotionViewInstance {
  destroy?: () => void
}

interface MotionViewApi {
  mount: (target: HTMLCanvasElement, options: Record<string, unknown>) => MotionViewInstance
}

declare global {
  interface Window {
    MotionView?: MotionViewApi
  }
}

const canvas = ref<HTMLCanvasElement | null>(null)
const isReady = ref(false)
const hasError = ref(false)
let instance: MotionViewInstance | undefined

const imageSources = [
  'https://i.imgur.com/egkTZJd.gif',
  'https://i.imgur.com/SjHANWz.gif',
  'https://i.imgur.com/TGdtgDL.gif',
  'https://i.imgur.com/XPg3rri.jpeg',
  'https://i.imgur.com/q51vagy.png',
  'https://i.imgur.com/6dDbcJx.png',
  'https://i.imgur.com/IgUNTwt.png',
  'https://i.imgur.com/mfIjpuO.png',
  'https://i.imgur.com/fih1y9w.png',
]

function loadMotionView() {
  return new Promise<void>((resolve, reject) => {
    if (window.MotionView) {
      resolve()
      return
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-motionview-runtime]')
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true })
      existingScript.addEventListener('error', () => reject(new Error('MotionView runtime failed to load')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://feralui.dev/motionview/runtime.js'
    script.async = true
    script.dataset.motionviewRuntime = 'true'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('MotionView runtime failed to load'))
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  try {
    await loadMotionView()
    if (!canvas.value || !window.MotionView)
      throw new Error('MotionView is unavailable')

    instance = window.MotionView.mount(canvas.value, {
      familyKey: 'carousel',
      images: imageSources,
      imageCount: imageSources.length,
      aspectId: '16:9',
      loopSec: 9,
      params: { count: 7, size: 0.4, gap: 0.3 },
      customBg: '#000000',
      focus: 0.34,
      focusMode: 'vignette',
      focusReach: 0.6,
      focusSoft: 2.2,
      easePts: [0.4, 0, 0.2, 1],
      bgId: 'ink',
    })
    isReady.value = true
  }
  catch {
    hasError.value = true
  }
})

onBeforeUnmount(() => {
  instance?.destroy?.()
})
</script>

<template>
  <div class="motionview-frame relative overflow-hidden">
    <canvas ref="canvas" class="motionview-canvas block h-auto w-full" aria-label="Karussell mit ausgewählten Arbeiten" />
    <div v-if="!isReady && !hasError" class="motionview-loading pointer-events-none absolute inset-0 grid place-items-center text-muted">
      <span class="eyebrow">Arbeiten werden geladen</span>
    </div>
    <div v-if="hasError" class="grid gap-5 p-5 md:grid-cols-3">
      <img v-for="(image, index) in imageSources" :key="image" :src="image" :alt="`Ausgewählte Arbeit ${index + 1}`" class="aspect-[1.2] w-full object-cover grayscale" loading="lazy">
    </div>
  </div>
</template>

<style scoped>
.motionview-frame { width: calc(100% + 4vw); margin-left: -2vw; }
.motionview-canvas { aspect-ratio: 16 / 9; }
.motionview-loading { background: transparent; }
</style>
