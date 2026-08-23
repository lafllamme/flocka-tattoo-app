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
      <nav class="grid gap-5" aria-label="Mobile navigation">
        <a v-for="(item, index) in menuItems" :key="item.href" :href="item.href" :target="item.href.startsWith('http') ? '_blank' : undefined" :rel="item.href.startsWith('http') ? 'noreferrer' : undefined" class="font-sans text-4xl font-semibold leading-none tracking-[-.03em] text-bone no-underline transition-colors hover:text-signal" :style="{ transitionDelay: `${index * 45}ms` }" @click="closeMenu">{{ item.label }}</a>
      </nav>
      <p class="eyebrow mt-auto text-muted">Köln · Di—Sa · 10:00—19:00</p>
    </div>
  </Transition>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform 260ms cubic-bezier(.22, 1, .36, 1);
  will-change: transform;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  transform: translateY(-100%);
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
  .menu-slide-leave-active { transition: none; }
}
</style>
