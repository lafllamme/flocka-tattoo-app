import { useSwipe } from '@vueuse/core'
import { computed, ref } from 'vue'

export function useCarousel(length: number) {
  const current = ref(0)
  const viewport = ref<HTMLElement | null>(null)
  const index = computed(() => ((current.value % length) + length) % length)
  const next = () => {
    current.value = index.value + 1
  }
  const previous = () => {
    current.value = index.value - 1
  }
  const goTo = (value: number) => {
    current.value = value
  }
  useSwipe(viewport, { onSwipeEnd: (_event, direction) => direction === 'left' ? next() : previous() })
  return { viewport, index, next, previous, goTo }
}
