<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'

const prefersReducedMotion = usePreferredReducedMotion()
</script>

<template>
  <section id="top" class="relative isolate min-h-[calc(100svh-57px)] overflow-hidden border-b border-line bg-black md:sticky md:top-[57px] md:z-10 md:min-h-[calc(100svh-57px)]">
    <div class="page-shell relative flex min-h-[calc(100svh-57px)] flex-col justify-between pb-7 pt-10 md:pb-10 md:pt-16">
      <div class="flex items-start justify-between gap-8" :class="prefersReducedMotion ? '' : 'hero-copy-enter'">
        <p class="eyebrow max-w-48 text-signal-bright">Custom tattoo artist · Berlin</p>
        <p class="eyebrow hidden max-w-40 text-right text-muted md:block">Blackwork, symbols<br>and custom pieces.</p>
      </div>

      <div class="relative z-10 flex items-end justify-between gap-5">
        <div>
          <p class="eyebrow mb-5 text-muted">01 / Flocka Tattoo</p>
          <h1 class="font-display text-[clamp(5rem,18vw,15.5rem)] uppercase leading-[0.73] tracking-[-0.09em] text-bone" :class="prefersReducedMotion ? '' : 'hero-wordmark-enter'">
            Flocka
          </h1>
        </div>
        <a href="#work" class="group mb-1 hidden items-center gap-3 border-b border-line pb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-bone transition-colors hover:border-signal hover:text-signal-bright sm:flex">
          View the work
          <Icon name="lucide:arrow-down-right" size="15" class="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
        </a>
      </div>

      <div class="pointer-events-none absolute inset-x-0 bottom-0 top-0 -z-0 overflow-hidden">
        <div class="absolute bottom-[-12%] right-[-12%] h-[75vw] max-h-[38rem] w-[75vw] max-w-[38rem] rounded-full bg-blood blur-3xl opacity-80" />
        <img src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=1200&q=88" alt="Tattoo detail in a dark studio" class="absolute bottom-[-8%] right-[-8%] h-[78%] w-[58%] object-cover opacity-35 mix-blend-screen grayscale" :class="prefersReducedMotion ? '' : 'hero-image-enter'">
      </div>

      <div class="relative z-10 flex items-end justify-between gap-6">
        <p class="max-w-xs text-sm leading-relaxed text-muted md:text-base">Old-school soul, heavy blackwork and custom pieces made to belong only to you.</p>
        <span class="eyebrow text-right text-signal-bright">Made in the dark.<br>Kept forever.</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-copy-enter {
  animation: hero-copy-in 720ms cubic-bezier(.22, 1, .36, 1) both;
}

.hero-wordmark-enter {
  animation: hero-wordmark-in 1100ms cubic-bezier(.22, 1, .36, 1) 120ms both;
}

.hero-image-enter {
  animation: hero-image-in 1100ms cubic-bezier(.22, 1, .36, 1) 240ms both;
}

@keyframes hero-copy-in {
  from { opacity: 0; transform: translateY(-18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes hero-wordmark-in {
  from { opacity: 0; transform: translateY(40px); clip-path: inset(100% 0 0); }
  to { opacity: 1; transform: translateY(0); clip-path: inset(0); }
}

@keyframes hero-image-in {
  from { opacity: 0; transform: scale(1.08) rotate(-4deg); }
  to { opacity: .35; transform: scale(1) rotate(0); }
}
</style>
