<script setup lang="ts">
import { useIntersectionObserver, useMediaQuery, usePreferredReducedMotion } from '@vueuse/core'
import { nextTick, onBeforeUnmount, onMounted, shallowRef, watch } from 'vue'
import { useColorRevealFocus } from '../../composables/useColorRevealFocus'
import FlockaMediaSkeleton from './MediaSkeleton.vue'

const props = defineProps<{
  poster: string
  src: string
}>()

const target = shallowRef<HTMLElement | null>(null)
const video = shallowRef<HTMLVideoElement | null>(null)
const shouldLoad = shallowRef(false)
const isNearby = shallowRef(false)
const isInFocus = shallowRef(false)
const isMediaReady = shallowRef(false)
const hasMediaError = shallowRef(false)
const focusId = Symbol('journal-loop-video')
const { activeFocus, register } = useColorRevealFocus()
const isDesktop = useMediaQuery('(min-width: 768px)')
const prefersReducedMotion = usePreferredReducedMotion()
const shouldReduceMotion = computed(() => prefersReducedMotion.value === 'reduce')
const revealed = computed(() => isDesktop.value ? isInFocus.value : activeFocus.value === focusId)

function updateFocus(isFocused: boolean) {
  if (isDesktop.value) {
    isInFocus.value = isFocused
    return
  }

  if (isFocused)
    activeFocus.value = focusId
  else if (activeFocus.value === focusId)
    activeFocus.value = null
}

function recheckFocus() {
  const element = target.value
  if (!element)
    return

  const bounds = element.getBoundingClientRect()
  const focusTop = window.innerHeight * 0.25
  const focusBottom = window.innerHeight * 0.75
  const visibleHeight = Math.max(0, Math.min(bounds.bottom, focusBottom) - Math.max(bounds.top, focusTop))

  updateFocus(visibleHeight / bounds.height >= 0.5)
}

async function playWhenReady() {
  if (shouldReduceMotion.value || !isNearby.value)
    return

  if (!shouldLoad.value) {
    shouldLoad.value = true
    await nextTick()
    video.value?.load()
  }

  await video.value?.play().catch(() => undefined)
}

useIntersectionObserver(
  target,
  ([entry]) => {
    isNearby.value = Boolean(entry?.isIntersecting)

    if (isNearby.value)
      void playWhenReady()
    else
      video.value?.pause()
  },
  { rootMargin: '300px 0px', threshold: 0 },
)

useIntersectionObserver(
  target,
  ([entry]) => {
    updateFocus(Boolean(entry?.isIntersecting && (entry.intersectionRatio ?? 0) >= 0.5))
  },
  { rootMargin: '-25% 0px -25% 0px', threshold: [0, 0.5, 1] },
)

watch(shouldReduceMotion, (reduceMotion) => {
  if (reduceMotion)
    video.value?.pause()
  else
    void playWhenReady()
})

function handleMediaReady() {
  isMediaReady.value = true
  hasMediaError.value = false
}

function handleMediaError() {
  hasMediaError.value = true
}

let posterLoader: HTMLImageElement | undefined

function loadPoster() {
  posterLoader = new Image()
  posterLoader.onload = handleMediaReady
  posterLoader.onerror = handleMediaError
  posterLoader.src = props.poster
}

const unregister = register(focusId, recheckFocus)
onMounted(() => {
  recheckFocus()
  loadPoster()
})
onBeforeUnmount(() => {
  unregister()
  if (posterLoader) {
    posterLoader.onload = null
    posterLoader.onerror = null
  }
})
</script>

<template>
  <span
    ref="target"
    class="journal-video-frame"
    :data-media-error="hasMediaError || undefined"
    :data-media-loaded="isMediaReady || undefined"
  >
    <video
      ref="video"
      muted
      loop
      playsinline
      preload="none"
      disablepictureinpicture
      aria-hidden="true"
      :poster="props.poster"
      class="journal-loop-video grayscale"
      :class="{
        'grayscale-0': revealed || shouldReduceMotion,
        'journal-loop-video--ready': isMediaReady,
      }"
      @loadeddata="handleMediaReady"
      @error="handleMediaError"
    >
      <source v-if="shouldLoad" :src="props.src" type="video/mp4">
    </video>
    <FlockaMediaSkeleton :loading="!isMediaReady" :error="hasMediaError" />
  </span>
</template>

<style scoped>
.journal-video-frame {
  display: block;
  isolation: isolate;
  overflow: hidden;
  position: relative;
}

.journal-loop-video {
  display: block;
  height: 100%;
  object-fit: inherit;
  object-position: inherit;
  opacity: 0;
  transition: opacity 420ms cubic-bezier(.22, 1, .36, 1), filter 800ms cubic-bezier(.22, 1, .36, 1) !important;
  width: 100%;
  will-change: filter;
}

.journal-loop-video--ready {
  opacity: 1;
}

.journal-video-frame.image-zoom {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .journal-loop-video {
    transition: none !important;
  }

  .journal-video-frame.image-zoom {
    transform: none;
  }
}
</style>
