import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    anchors: true,
    autoRaf: true,
    respectReducedMotion: true,
    stopInertiaOnNavigate: true,
  })

  nuxtApp.hook('app:beforeUnmount', () => {
    lenis.destroy()
  })

  return {
    provide: {
      lenis,
    },
  }
})
