<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'
import FlockaColorRevealImage from './ColorRevealImage.vue'

const prefersReducedMotion = usePreferredReducedMotion()
const shouldReduceMotion = computed(() => prefersReducedMotion.value === 'reduce')
</script>

<template>
  <section id="top" class="surface-hero bg-black h-[100svh] relative z-2 sticky top-0 overflow-hidden isolate">
    <div class="page-shell pb-0 pt-10 h-full relative overflow-hidden">
      <div class="hero-content-group">
        <div class="gap-8 grid md:grid-cols-[.95fr_1.05fr]">
          <div class="max-w-md" :class="shouldReduceMotion ? '' : 'hero-copy-enter'">
            <p class="text-xl text-bone leading-[1.12] tracking-[-.03em] md:text-2xl">
              Flocka is an independent tattoo practice focused on shaping visual language through line, symbol and structure.
            </p>
            <a href="#work" class="group text-base text-bone mt-7 px-5 py-3 border-2 border-bone rounded-md inline-flex gap-4 transition-colors items-center hover:text-black hover:bg-bone">View selected work <Icon name="lucide:arrow-down-right" size="18" class="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
          </div>
          <div class="relative md:w-[94%] md:justify-self-end">
            <div class="bg-blood opacity-70 inset-0 absolute blur-3xl -z-10" />
            <FlockaColorRevealImage src="/images/flocka-hero.jpg" alt="Flocka Tattoo studio portrait" class="border-2 border-bone w-full aspect-[2.3] object-cover object-top" :class="shouldReduceMotion ? '' : 'hero-image-enter'" />
          </div>
        </div>

        <div class="text-sm text-bone leading-none flex gap-6 items-center relative z-10 -mt-[18px] md:w-[48%] md:justify-between" :class="shouldReduceMotion ? '' : 'hero-status-enter'">
          <p class="flex gap-3 items-center">
            <span class="rounded-full bg-[#75C45A] size-2" /> Available for Work
          </p><p class="gap-2 hidden items-center md:flex">
            <Icon name="lucide:map-pin" size="18" /> Based in Cologne
          </p>
        </div>
      </div>

      <h1 class="text-[clamp(6rem,23vw,22rem)] text-bone leading-[.72] tracking-[-.075em] font-black font-display w-max whitespace-nowrap uppercase bottom-[.03em] left-[2vw] absolute z-0 2xl:leading-[.8]" :class="shouldReduceMotion ? '' : 'hero-wordmark-enter'">
        FLOCKA
      </h1>
    </div>
  </section>
</template>

<style scoped>
.hero-copy-enter { animation: hero-copy-in 720ms cubic-bezier(.22, 1, .36, 1) both; }
.hero-wordmark-enter { animation: hero-wordmark-in 1100ms cubic-bezier(.22, 1, .36, 1) 120ms both; }
.hero-image-enter { animation: hero-image-in 1100ms cubic-bezier(.22, 1, .36, 1) 240ms both; }
.hero-status-enter { animation: hero-status-in 620ms cubic-bezier(.22, 1, .36, 1) 420ms both; }
.hero-content-group { position: relative; }
@media (min-width: 768px) and (min-height: 700px) {
  .hero-content-group { transform: translateY(100px); }
}
@keyframes hero-copy-in { from { opacity: 0; transform: translateX(-56px); } to { opacity: 1; transform: translateX(0); } }
@keyframes hero-wordmark-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes hero-image-in { from { opacity: 0; transform: translateX(64px) scale(1.03); } to { opacity: 1; transform: translateX(0) scale(1); } }
@keyframes hero-status-in { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
</style>
