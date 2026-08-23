<script setup lang="ts">
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

const props = withDefaults(defineProps<{
  direction?: 'up' | 'left' | 'right'
}>(), {
  direction: 'up',
})

const revealed = ref(false)
const target = ref<HTMLElement | null>(null)
const prefersReducedMotion = usePreferredReducedMotion()
const shouldReduceMotion = computed(() => prefersReducedMotion.value === 'reduce')

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
  <div ref="target" class="reveal" :class="[`reveal--${props.direction}`, { 'reveal--visible': revealed || shouldReduceMotion }]">
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 620ms cubic-bezier(.22, 1, .36, 1), transform 620ms cubic-bezier(.22, 1, .36, 1);
}

.reveal--left { transform: translateX(-48px); }
.reveal--right { transform: translateX(48px); }

.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; }
}
</style>
