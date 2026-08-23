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
  { label: 'Kontakt', href: '#contact' },
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
  <header class="site-header page-shell fixed inset-x-0 top-0 z-30 flex min-h-14 items-center justify-between border-b border-line bg-black py-3 md:min-h-[57px] md:py-2" :class="{ 'site-header--entered': entered || shouldReduceMotion, 'site-header--leaving': isHidden }">
    <nav class="hidden w-full items-center justify-between md:flex" aria-label="Main navigation">
      <a href="#top" class="text-sm text-bone transition-colors hover:text-signal-bright">Start</a>
      <a v-for="item in menuItems" :key="item.href" :href="item.href" :target="item.href.startsWith('http') ? '_blank' : undefined" :rel="item.href.startsWith('http') ? 'noreferrer' : undefined" class="text-sm text-bone transition-colors hover:text-signal-bright">{{ item.label }}</a>
    </nav>

    <div class="relative flex w-full items-center justify-between md:hidden">
      <button class="relative z-50 flex size-10 items-center justify-center border border-line text-bone transition-colors hover:border-signal-bright hover:text-signal-bright" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'" @click="menuOpen = !menuOpen">
        <Icon :name="menuOpen ? 'lucide:x' : 'lucide:menu'" size="20" />
      </button>

      <a href="#top" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Flocka home">
        <img src="/images/flocka_logo.png" alt="Flocka Tattoo" class="size-16 object-contain">
      </a>

      <a href="#contact" class="text-sm text-bone transition-colors hover:text-signal-bright">Kontakt</a>
    </div>

  </header>

  <Transition name="menu-fade">
    <div v-if="menuOpen" id="mobile-navigation" class="fixed inset-0 z-40 flex flex-col bg-black px-5 pb-8 pt-28 md:hidden">
      <nav class="grid gap-5" aria-label="Mobile navigation">
        <a v-for="(item, index) in menuItems" :key="item.href" :href="item.href" :target="item.href.startsWith('http') ? '_blank' : undefined" :rel="item.href.startsWith('http') ? 'noreferrer' : undefined" class="font-display text-5xl uppercase leading-none text-bone transition-colors hover:text-signal" :style="{ transitionDelay: `${index * 45}ms` }" @click="closeMenu">{{ item.label }}</a>
      </nav>
      <p class="eyebrow mt-auto text-muted">Köln · Di—Sa · 10:00—19:00</p>
    </div>
  </Transition>
</template>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 280ms ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
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
  .site-header { transition: none; }
}
</style>
