<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'

const prefersReducedMotion = usePreferredReducedMotion()
</script>

<template>
  <section id="top" class="relative isolate h-[calc(100svh-57px)] overflow-hidden rounded-b-[2rem] border-b border-line bg-black">
    <div class="page-shell relative grid h-full grid-rows-[auto_1fr] gap-8 overflow-hidden pb-0 pt-14 md:pt-16">
      <div class="grid gap-8 md:grid-cols-[.95fr_1.05fr]">
        <div class="max-w-md" :class="prefersReducedMotion ? '' : 'hero-copy-enter'">
          <p class="text-xl leading-[1.12] tracking-[-.03em] text-bone md:text-2xl">Flocka is an independent tattoo practice focused on shaping visual language through line, symbol and structure.</p>
          <a href="#work" class="group mt-8 inline-flex items-center gap-5 border border-bone px-7 py-4 text-lg text-bone transition-colors hover:bg-bone hover:text-black">View selected work <Icon name="lucide:arrow-down-right" size="20" class="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
        </div>
        <div class="relative md:justify-self-end md:w-[94%]">
          <div class="absolute inset-0 -z-10 bg-blood blur-3xl opacity-70" />
          <img src="/images/flocka-hero.jpg" alt="Flocka Tattoo studio portrait" class="aspect-[1.55] w-full border-2 border-bone object-cover grayscale" :class="prefersReducedMotion ? '' : 'hero-image-enter'">
        </div>
      </div>

      <div class="absolute bottom-[42%] left-[2vw] right-[2vw] z-10 flex items-end justify-between gap-6 text-lg text-bone"><p class="flex items-center gap-4"><span class="size-3 rounded-full bg-signal-bright" /> Available for bookings</p><p class="hidden items-center gap-3 md:flex"><Icon name="lucide:map-pin" size="22" /> Based in Cologne</p></div>

      <h1 class="absolute bottom-[-.02em] left-[2vw] z-0 w-max whitespace-nowrap font-display text-[clamp(6rem,23vw,22rem)] font-black uppercase leading-[.72] tracking-[-.075em] text-bone" :class="prefersReducedMotion ? '' : 'hero-wordmark-enter'">FLOCKA</h1>
    </div>
  </section>
</template>

<style scoped>
.hero-copy-enter { animation: hero-copy-in 720ms cubic-bezier(.22, 1, .36, 1) both; }
.hero-wordmark-enter { animation: hero-wordmark-in 1100ms cubic-bezier(.22, 1, .36, 1) 120ms both; }
.hero-image-enter { animation: hero-image-in 1100ms cubic-bezier(.22, 1, .36, 1) 240ms both; }
@keyframes hero-copy-in { from { opacity: 0; transform: translateY(-18px); } to { opacity: 1; transform: translateY(0); } }
@keyframes hero-wordmark-in { from { opacity: 0; transform: translateY(40px); clip-path: inset(100% 0 0); } to { opacity: 1; transform: translateY(0); clip-path: inset(0); } }
@keyframes hero-image-in { from { opacity: 0; transform: scale(1.08); } to { opacity: 1; transform: scale(1); } }
</style>
