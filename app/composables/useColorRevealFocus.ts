import { createGlobalState, useEventListener } from '@vueuse/core'
import { shallowRef } from 'vue'

export const useColorRevealFocus = createGlobalState(() => {
  const activeFocus = shallowRef<symbol | null>(null)
  const recheckers = new Map<symbol, () => void>()
  let frame = 0

  useEventListener('scroll', () => {
    if (frame)
      return

    frame = requestAnimationFrame(() => {
      frame = 0
      recheckers.forEach(recheck => recheck())
    })
  }, { passive: true })

  function register(id: symbol, recheck: () => void) {
    recheckers.set(id, recheck)
    return () => recheckers.delete(id)
  }

  return { activeFocus, register }
})
