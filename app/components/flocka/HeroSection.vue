<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'

const prefersReducedMotion = usePreferredReducedMotion()
const shouldReduceMotion = computed(() => prefersReducedMotion.value === 'reduce')
</script>

<template>
  <section id="top" class="relative isolate z-2 h-[calc(100svh-57px)] overflow-hidden bg-black md:sticky md:top-0">
    <div class="page-shell relative h-full overflow-hidden pb-0 pt-14">
      <div class="grid gap-8 md:grid-cols-[.95fr_1.05fr]">
        <div class="max-w-md" :class="shouldReduceMotion ? '' : 'hero-copy-enter'">
          <p class="text-xl leading-[1.12] tracking-[-.03em] text-bone md:text-2xl">Flocka is an independent tattoo practice focused on shaping visual language through line, symbol and structure.</p>
          <a href="#work" class="group mt-7 inline-flex items-center gap-4 rounded-md border-2 border-bone px-5 py-3 text-base text-bone transition-colors hover:bg-bone hover:text-black">View selected work <Icon name="lucide:arrow-down-right" size="18" class="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
        </div>
        <div class="relative md:justify-self-end md:w-[94%]">
          <div class="absolute inset-0 -z-10 bg-blood blur-3xl opacity-70" />
          <img src="/images/flocka-hero.jpg" alt="Flocka Tattoo studio portrait" class="aspect-[2.3] w-full border-2 border-bone object-cover object-top grayscale" :class="shouldReduceMotion ? '' : 'hero-image-enter'">
        </div>
      </div>

      <div class="relative z-10 -mt-[18px] flex items-center gap-6 text-sm leading-none text-bone md:w-[48%] md:justify-between" :class="shouldReduceMotion ? '' : 'hero-status-enter'"><p class="flex items-center gap-3"><span class="size-2 rounded-full bg-[#75C45A]" /> Available for Work</p><p class="hidden items-center gap-2 md:flex"><Icon name="lucide:map-pin" size="18" /> Based in Cologne</p></div>

      <h1 class="absolute bottom-[.03em] left-[2vw] z-0 w-max whitespace-nowrap font-display text-[clamp(6rem,23vw,22rem)] font-black uppercase leading-[.72] tracking-[-.075em] text-bone 2xl:leading-[.8]" :class="shouldReduceMotion ? '' : 'hero-wordmark-enter'">FLOCKA</h1>
    </div>
  </section>
</template>

<style scoped>
.hero-copy-enter { animation: hero-copy-in 720ms cubic-bezier(.22, 1, .36, 1) both; }
.hero-wordmark-enter { animation: hero-wordmark-in 1100ms cubic-bezier(.22, 1, .36, 1) 120ms both; }
.hero-image-enter { animation: hero-image-in 1100ms cubic-bezier(.22, 1, .36, 1) 240ms both; }
.hero-status-enter { animation: hero-status-in 620ms cubic-bezier(.22, 1, .36, 1) 420ms both; }
@keyframes hero-copy-in { from { opacity: 0; transform: translateX(-56px); } to { opacity: 1; transform: translateX(0); } }
@keyframes hero-wordmark-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes hero-image-in { from { opacity: 0; transform: translateX(64px) scale(1.03); } to { opacity: 1; transform: translateX(0) scale(1); } }
@keyframes hero-status-in { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
</style>
