<script setup lang="ts">
import { useIntersectionObserver, useMediaQuery, usePreferredReducedMotion } from '@vueuse/core'
import { onBeforeUnmount, onMounted, shallowRef, watch } from 'vue'
import { useColorRevealFocus } from '../../composables/useColorRevealFocus'
import FlockaMediaSkeleton from './MediaSkeleton.vue'

const props = withDefaults(defineProps<{
  allowMultipleOnDesktop?: boolean
  alt: string
  decoding?: 'async' | 'auto' | 'sync'
  fetchpriority?: 'auto' | 'high' | 'low'
  loading?: 'eager' | 'lazy'
  src: string
}>(), {
  allowMultipleOnDesktop: false,
  decoding: 'async',
  fetchpriority: 'auto',
  loading: 'lazy',
})

const target = shallowRef<HTMLElement | null>(null)
const image = shallowRef<HTMLImageElement | null>(null)
const isLoaded = shallowRef(false)
const hasError = shallowRef(false)
const focusId = Symbol('color-reveal-image')
const { activeFocus, register } = useColorRevealFocus()
const isInFocus = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const prefersReducedMotion = usePreferredReducedMotion()
const useLocalFocus = computed(() => Boolean(props.allowMultipleOnDesktop && isDesktop.value))
const revealed = computed(() => useLocalFocus.value ? isInFocus.value : activeFocus.value === focusId)

function updateFocus(isFocused: boolean) {
  if (useLocalFocus.value) {
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

function handleLoad() {
  isLoaded.value = true
  hasError.value = false
}

function handleError() {
  isLoaded.value = false
  hasError.value = true
}

function syncCachedImage() {
  if (!image.value?.complete)
    return

  if (image.value.naturalWidth > 0)
    handleLoad()
  else
    handleError()
}

useIntersectionObserver(
  target,
  ([entry]) => {
    updateFocus(Boolean(entry?.isIntersecting && (entry.intersectionRatio ?? 0) >= 0.5))
  },
  { rootMargin: '-25% 0px -25% 0px', threshold: [0, 0.5, 1] },
)

const unregister = register(focusId, recheckFocus)
watch(() => props.src, () => {
  isLoaded.value = false
  hasError.value = false
})

onMounted(() => {
  recheckFocus()
  syncCachedImage()
})
onBeforeUnmount(unregister)
</script>

<template>
  <span
    ref="target"
    class="color-reveal-frame"
    :data-media-error="hasError || undefined"
    :data-media-loaded="isLoaded || undefined"
  >
    <img
      ref="image"
      :src="props.src"
      :alt="props.alt"
      :loading="props.loading"
      :decoding="props.decoding"
      :fetchpriority="props.fetchpriority"
      class="color-reveal-image grayscale"
      :class="{
        'color-reveal-image--loaded': isLoaded,
        'grayscale-0': revealed || prefersReducedMotion === 'reduce',
      }"
      @load="handleLoad"
      @error="handleError"
    >
    <FlockaMediaSkeleton :loading="!isLoaded" :error="hasError" />
  </span>
</template>

<style scoped>
.color-reveal-frame {
  display: block;
  isolation: isolate;
  overflow: hidden;
  position: relative;
}

.color-reveal-image {
  display: block;
  height: 100%;
  object-fit: inherit;
  object-position: inherit;
  opacity: 0;
  transition: opacity 420ms cubic-bezier(.22, 1, .36, 1), filter 800ms cubic-bezier(.22, 1, .36, 1) !important;
  width: 100%;
  will-change: filter;
}

.color-reveal-image--loaded {
  opacity: 1;
}

.color-reveal-frame.image-zoom {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .color-reveal-image {
    transition: none !important;
  }

  .color-reveal-frame.image-zoom {
    transform: none;
  }
}
</style>
