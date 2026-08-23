<script setup lang="ts">
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

const target = ref<HTMLElement | null>(null)
const revealed = ref(false)
const prefersReducedMotion = usePreferredReducedMotion()

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    if (!entry?.isIntersecting)
      return

    revealed.value = true
    stop()
  },
  { rootMargin: '-22% 0px -22% 0px', threshold: 0.2 },
)
</script>

<template>
  <img
    ref="target"
    v-bind="$attrs"
    class="grayscale transition-[filter,transform] duration-700"
    :class="{ 'grayscale-0': revealed || prefersReducedMotion === 'reduce' }"
  >
</template>
