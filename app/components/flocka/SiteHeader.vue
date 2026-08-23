<script setup lang="ts">
import { usePreferredReducedMotion, useWindowScroll } from '@vueuse/core'

const menuOpen = ref(false)
const entered = ref(false)
const prefersReducedMotion = usePreferredReducedMotion()
const shouldReduceMotion = computed(() => prefersReducedMotion.value === 'reduce')
const { y: scrollY } = useWindowScroll()
const lastScrollY = ref(0)
const isHidden = ref(false)

const menuItems = [
  { label: 'Über mich', href: '#about' },
  { label: 'Arbeiten', href: '#work' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Kontakt', href: 'https://www.instagram.com/flockatattoo/' },
]

function closeMenu() {
  menuOpen.value = false
}

watch(menuOpen, (open) => {
  if (import.meta.client)
    document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client)
    document.body.style.overflow = ''
})

onMounted(() => {
  entered.value = true
  lastScrollY.value = scrollY.value
})

watch(scrollY, (current) => {
  if (shouldReduceMotion.value) {
    isHidden.value = false
    lastScrollY.value = current
    return
  }

  const delta = current - lastScrollY.value
  if (current <= 64)
    isHidden.value = false
  else if (delta > 8)
    isHidden.value = true
  else if (delta < -8)
    isHidden.value = false

  lastScrollY.value = current
})
</script>

<template>
  <header class="site-header page-shell fixed inset-x-0 top-0 z-50 flex min-h-12 items-center justify-between bg-black py-2 md:min-h-[57px] md:py-2" :class="{ 'site-header--entered': entered || shouldReduceMotion, 'site-header--leaving': isHidden && !menuOpen }">
    <nav class="hidden w-full items-center justify-between md:flex" aria-label="Main navigation">
      <a href="#top" class="text-base font-semibold tracking-[-.02em] text-bone no-underline transition-colors hover:text-signal-bright">Start</a>
      <a v-for="item in menuItems" :key="item.href" :href="item.href" :target="item.href.startsWith('http') ? '_blank' : undefined" :rel="item.href.startsWith('http') ? 'noreferrer' : undefined" class="text-base font-semibold tracking-[-.02em] text-bone no-underline transition-colors hover:text-signal-bright">{{ item.label }}</a>
    </nav>

    <div class="relative flex w-full items-center justify-between md:hidden">
      <a href="#top" class="relative z-50" aria-label="Flocka home">
        <span class="font-display text-xl font-semibold uppercase leading-none tracking-[-.08em] text-bone">FLOCKA</span>
      </a>

      <button class="relative z-50 flex size-10 items-center justify-center p-0 text-bone transition-colors hover:text-signal-bright" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'" @click="menuOpen = !menuOpen">
        <Icon :name="menuOpen ? 'jam:close' : 'jam:menu'" size="24" />
      </button>
    </div>

  </header>

  <Transition name="menu-slide">
    <div v-if="menuOpen" id="mobile-navigation" class="fixed inset-0 z-40 flex flex-col bg-black px-5 pb-8 pt-28 md:hidden">
      <TransitionGroup appear name="menu-items" tag="nav" class="grid gap-5" aria-label="Mobile navigation">
        <a
        v-for="(item, index) in menuItems"
        :key="item.href"
        :href="item.href"
        :target="item.href.startsWith('http') ? '_blank' : undefined"
        :rel="item.href.startsWith('http') ? 'noreferrer' : undefined"
        class="mobile-menu-item font-sans text-4xl font-semibold leading-none tracking-[-.03em] text-bone no-underline transition-colors hover:text-signal" :style="{ '--menu-item-delay': `calc(520ms + ${index * 120}ms)` }"
        @click="closeMenu">{{ item.label }}</a>
      </TransitionGroup>
      <p class="mobile-menu-footer eyebrow mt-auto text-muted">Köln · Di—Sa · 10:00—19:00</p>
      <img
        src="/images/flocka_logo.png"
        alt="Flocka Tattoo"
        class="mobile-menu-logo pointer-events-none absolute bottom-5 right-5 w-52 max-w-[55vw] select-none"
      >
    </div>
  </Transition>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform 520ms cubic-bezier(.16, 1, .3, 1);
  will-change: transform;
}

.menu-slide-leave-active {
  transition-delay: 320ms;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  transform: translateY(-100%);
}

.menu-items-enter-active,
.menu-items-leave-active {
  transition: opacity 320ms ease, transform 320ms cubic-bezier(.16, 1, .3, 1), color 180ms ease;
  transition-delay: var(--menu-item-delay, 0ms);
  will-change: opacity, transform;
}

.menu-items-leave-active {
  transition-delay: 0ms;
}

.menu-items-enter-from,
.menu-items-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.mobile-menu-footer {
  animation: mobile-menu-footer-enter 360ms ease both;
  animation-delay: 620ms;
}

.menu-slide-leave-active .mobile-menu-footer {
  animation: mobile-menu-footer-leave 300ms ease both;
  animation-delay: 0ms;
}

.menu-slide-enter-from .mobile-menu-footer,
.menu-slide-leave-to .mobile-menu-footer {
  opacity: 0;
  transform: translateY(10px);
}

@keyframes mobile-menu-footer-enter {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes mobile-menu-footer-leave {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(10px); }
}

.mobile-menu-logo {
  animation: mobile-menu-logo-enter 520ms cubic-bezier(.16, 1, .3, 1) both;
  animation-delay: 140ms;
}

.menu-slide-leave-active .mobile-menu-logo {
  animation: mobile-menu-logo-leave 420ms ease both;
  animation-delay: 0ms;
}

@keyframes mobile-menu-logo-enter {
  from { opacity: 0; filter: blur(18px); transform: scale(.94); }
  to { opacity: 1; filter: blur(0); transform: scale(1); }
}

@keyframes mobile-menu-logo-leave {
  from { opacity: 1; filter: blur(0); transform: scale(1); }
  to { opacity: 0; filter: blur(18px); transform: scale(.94); }
}

.site-header {
  transform: translateY(-100%);
  transition: transform 560ms cubic-bezier(.22, 1, .36, 1);
  will-change: transform;
}

.site-header--entered {
  transform: translateY(0);
}

.site-header--leaving {
  transform: translateY(-100%);
}

@media (prefers-reduced-motion: reduce) {
  .site-header,
  .menu-slide-enter-active,
  .menu-slide-leave-active,
  .menu-items-enter-active,
  .menu-items-leave-active,
  .menu-slide-enter-active .mobile-menu-footer,
  .menu-slide-leave-active .mobile-menu-footer,
  .menu-slide-enter-active .mobile-menu-logo,
  .menu-slide-leave-active .mobile-menu-logo {
    transition: none;
  }

  .mobile-menu-footer,
  .mobile-menu-logo {
    animation: none;
  }
}
</style>
