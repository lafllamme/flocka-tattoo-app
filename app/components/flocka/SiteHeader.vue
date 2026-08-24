<script setup lang="ts">
const menuOpen = ref(false)

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
</script>

<template>
  <header class="site-header page-shell py-2 bg-transparent flex min-h-12 pointer-events-none items-center inset-x-0 top-0 justify-between fixed z-50 md:py-2 md:min-h-[57px] md:absolute">
    <nav class="w-full hidden pointer-events-auto items-center justify-between md:flex" aria-label="Main navigation">
      <a href="#top" class="text-base text-bone tracking-[-.02em] font-semibold no-underline transition-colors hover:text-signal-bright">Start</a>
      <a v-for="item in menuItems" :key="item.href" :href="item.href" :target="item.href.startsWith('http') ? '_blank' : undefined" :rel="item.href.startsWith('http') ? 'noreferrer' : undefined" class="text-base text-bone tracking-[-.02em] font-semibold no-underline transition-colors hover:text-signal-bright">{{ item.label }}</a>
    </nav>

    <div class="flex w-full items-center justify-between relative md:hidden">
      <a href="#top" class="pointer-events-auto relative z-50" aria-label="Flocka home">
        <span class="text-xl text-bone leading-none tracking-[-.08em] font-display font-semibold uppercase">FLOCKA</span>
      </a>

      <button class="text-bone p-0 flex size-10 pointer-events-auto transition-colors items-center justify-center relative z-50 hover:text-signal-bright" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'" @click="menuOpen = !menuOpen">
        <Icon :name="menuOpen ? 'jam:close' : 'jam:menu'" size="24" />
      </button>
    </div>
  </header>

  <Transition name="menu-slide">
    <div v-if="menuOpen" id="mobile-navigation" class="px-5 pb-8 pt-28 bg-black flex flex-col inset-0 fixed z-40 md:hidden">
      <TransitionGroup appear name="menu-items" tag="nav" class="gap-5 grid" aria-label="Mobile navigation">
        <a
          v-for="(item, index) in menuItems"
          :key="item.href"
          :href="item.href"
          :target="item.href.startsWith('http') ? '_blank' : undefined"
          :rel="item.href.startsWith('http') ? 'noreferrer' : undefined"
          class="mobile-menu-item text-4xl text-bone leading-none tracking-[-.03em] font-sans font-semibold no-underline transition-colors hover:text-signal" :style="{ '--menu-item-delay': `calc(520ms + ${index * 120}ms)` }"
          @click="closeMenu"
        >{{ item.label }}</a>
      </TransitionGroup>
      <p class="mobile-menu-footer eyebrow text-muted mt-auto">
        Köln · Di—So · 10:00—19:00
      </p>
      <img
        src="https://i.ibb.co/HLDFtYk8/flocka-logo.webp"
        alt="Flocka Tattoo"
        class="mobile-menu-logo max-w-[55vw] w-52 pointer-events-none select-none bottom-5 right-5 absolute"
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
  animation: site-header-in 600ms cubic-bezier(.23, 1, .32, 1) 220ms both;
  will-change: transform;
}

@media (max-width: 767px) {
  .site-header { padding-left: 4vw; }
}

@keyframes site-header-in {
  from { opacity: .001; transform: translateY(-150px); }
  to { opacity: 1; transform: translateY(0); }
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

  .site-header { animation: none; opacity: 1; transform: none; }

  .mobile-menu-footer,
  .mobile-menu-logo {
    animation: none;
  }
}
</style>
