<script setup lang="ts">
import { useIntersectionObserver, useMediaQuery, usePreferredReducedMotion } from '@vueuse/core'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useColorRevealFocus } from '../../composables/useColorRevealFocus'

const props = defineProps<{
  allowMultipleOnDesktop?: boolean
}>()

const target = ref<HTMLElement | null>(null)
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

useIntersectionObserver(
  target,
  ([entry]) => {
    updateFocus(Boolean(entry?.isIntersecting && (entry.intersectionRatio ?? 0) >= 0.5))
  },
  { rootMargin: '-25% 0px -25% 0px', threshold: [0, 0.5, 1] },
)

const unregister = register(focusId, recheckFocus)
onMounted(recheckFocus)
onBeforeUnmount(unregister)
</script>

<template>
  <img
    ref="target"
    loading="lazy"
    decoding="async"
    v-bind="$attrs"
    class="color-reveal-image grayscale"
    :class="{ 'grayscale-0': revealed || prefersReducedMotion === 'reduce' }"
  >
</template>

<style scoped>
.color-reveal-image {
  transition: filter 800ms cubic-bezier(.22, 1, .36, 1), transform 700ms cubic-bezier(.4, 0, .2, 1) !important;
  will-change: filter, transform;
}

.color-reveal-image.image-zoom {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .color-reveal-image {
    transition: none !important;
  }

  .color-reveal-image.image-zoom {
    transform: none;
  }
}
</style>
