<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

const props = withDefaults(defineProps<{
  direction?: 'up' | 'left' | 'right'
  delay?: number
  duration?: number
  distance?: number
}>(), {
  direction: 'up',
  delay: 0,
  duration: 560,
  distance: 64,
})

const revealed = ref(false)
const target = ref<HTMLElement | null>(null)
const prefersReducedMotion = usePreferredReducedMotion()
const shouldReduceMotion = computed(() => prefersReducedMotion.value === 'reduce')
const revealStyle = computed(() => ({
  '--reveal-delay': `${props.delay}ms`,
  '--reveal-duration': `${props.duration}ms`,
  '--reveal-distance': `${props.distance}px`,
}) as CSSProperties)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    if (!entry?.isIntersecting)
      return

    revealed.value = true
    stop()
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
)
</script>

<template>
  <div ref="target" class="reveal" :style="revealStyle" :class="[`reveal--${props.direction}`, { 'reveal--visible': revealed || shouldReduceMotion }]">
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translate3d(0, var(--reveal-distance), 0);
  transition: opacity var(--reveal-duration) cubic-bezier(.23, 1, .32, 1) var(--reveal-delay), transform var(--reveal-duration) cubic-bezier(.23, 1, .32, 1) var(--reveal-delay);
  will-change: opacity, transform;
}

.reveal--left { transform: translate3d(calc(var(--reveal-distance) * -1), 0, 0); }
.reveal--right { transform: translate3d(var(--reveal-distance), 0, 0); }

.reveal--visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; }
}
</style>
