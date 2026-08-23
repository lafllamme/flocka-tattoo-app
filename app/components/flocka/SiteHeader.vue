<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const menuOpen = ref(false)
const { y } = useWindowScroll()

const menuItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
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
</script>

<template>
  <header class="page-shell sticky top-0 z-40 flex min-h-14 items-center justify-between border-b border-line bg-black py-3 transition-colors md:min-h-[57px] md:py-2">
    <nav class="hidden w-full items-center justify-between md:flex" aria-label="Main navigation">
      <a href="#top" class="text-sm text-bone transition-colors hover:text-signal-bright">Home</a>
      <a v-for="item in menuItems" :key="item.href" :href="item.href" class="text-sm text-bone transition-colors hover:text-signal-bright">{{ item.label }}</a>
    </nav>

    <button class="relative z-50 flex size-10 items-center justify-center border border-line text-bone transition-colors hover:border-signal-bright hover:text-signal-bright md:hidden" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'" @click="menuOpen = !menuOpen">
      <Icon :name="menuOpen ? 'lucide:x' : 'lucide:menu'" size="20" />
    </button>

  </header>

  <Transition name="menu-fade">
    <div v-if="menuOpen" id="mobile-navigation" class="fixed inset-0 z-40 flex flex-col bg-black px-5 pb-8 pt-28 md:hidden">
      <nav class="grid gap-5" aria-label="Mobile navigation">
        <a v-for="(item, index) in menuItems" :key="item.href" :href="item.href" class="font-display text-5xl uppercase leading-none text-bone transition-colors hover:text-signal" :style="{ transitionDelay: `${index * 45}ms` }" @click="closeMenu">{{ item.label }}</a>
      </nav>
      <p class="eyebrow mt-auto text-muted">Cologne · Tue—Sat · 10:00—19:00</p>
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
</style>
