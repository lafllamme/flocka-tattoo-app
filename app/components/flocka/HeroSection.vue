<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'
import FlockaColorRevealImage from './ColorRevealImage.vue'

const prefersReducedMotion = usePreferredReducedMotion()
const shouldReduceMotion = computed(() => prefersReducedMotion.value === 'reduce')
</script>

<template>
  <section id="top" class="surface-hero bg-black flex-none top-0 relative sticky z-0 overflow-hidden">
    <div class="hero-shell page-shell pb-0 pt-24 h-full relative overflow-hidden">
      <div class="hero-content-group">
        <div class="hero-grid gap-4 grid md:gap-8 md:grid-cols-[.95fr_1.05fr] md:grid-rows-[auto_1fr]">
          <div class="max-w-md md:max-w-[19rem]" :class="shouldReduceMotion ? '' : 'hero-copy-enter'">
            <p class="text-sm text-bone leading-[1.12] tracking-[-.02em] md:text-base">
              Ich bin Sascha, 31, Tätowierer aus Köln. Als Newcomer im Quereinstieg entwickle ich gerade meine eigene Handschrift – mit klaren Linien, starken Symbolen und Farbe, wenn sie passt.
            </p>
            <a href="#work" class="group text-xs text-bone font-medium mt-4 px-3 py-2 border border-bone rounded-none inline-flex gap-2 transition-colors items-center md:text-base hover:text-black md:mt-7 md:px-5 md:py-3 md:border-2 hover:bg-bone md:gap-4">Arbeiten ansehen <Icon name="lucide:arrow-down-right" size="16" class="transition-transform md:size-[18px] group-hover:translate-x-1 group-hover:translate-y-1" /></a>
          </div>
          <div class="hero-status text-xs text-bone leading-none mt-4 flex gap-4 w-full items-center justify-between relative z-10 md:text-sm md:mt-0 md:gap-6 md:col-start-1 md:row-start-2 md:self-end" :class="shouldReduceMotion ? '' : 'hero-status-enter'">
            <p class="flex gap-2 whitespace-nowrap items-center">
              <span class="status-dot rounded-full bg-[#75C45A] size-2" /> Available for Work
            </p><p class="flex gap-1.5 whitespace-nowrap items-center">
              <Icon name="lucide:map-pin" size="16" /> Based in Cologne
            </p>
          </div>
          <div class="relative md:row-span-2 md:col-start-2 md:row-start-1 md:w-[94%] md:justify-self-end">
            <div class="bg-blood opacity-70 inset-0 absolute blur-3xl -z-10" />
            <FlockaColorRevealImage src="https://i.ibb.co/v6qYfKDX/flocka-hero.webp" alt="Flocka Tattoo studio portrait" class="border-2 border-bone w-full aspect-[.9] object-cover object-top md:aspect-[2.3]" :class="shouldReduceMotion ? '' : 'hero-image-enter'" />
          </div>
        </div>
      </div>

      <h1 class="text-[clamp(6rem,23vw,22rem)] text-bone leading-[.72] tracking-[-.075em] font-black font-display w-max whitespace-nowrap uppercase bottom-6 left-[2vw] absolute z-0 2xl:leading-[.8]" :class="shouldReduceMotion ? '' : 'hero-wordmark-enter'">
        FLOCKA
      </h1>
    </div>
  </section>
</template>

<style scoped>
.surface-hero { height: 100vh; min-height: 100vh; }
@supports (height: 100lvh) {
  .surface-hero { height: 100lvh; min-height: 100lvh; }
}
.hero-copy-enter { animation: hero-copy-in 560ms cubic-bezier(.23, 1, .32, 1) 140ms both; }
.hero-wordmark-enter { animation: hero-wordmark-in 560ms cubic-bezier(.23, 1, .32, 1) 180ms both; }
.hero-image-enter { animation: hero-image-in 560ms cubic-bezier(.23, 1, .32, 1) 140ms both; }
.hero-status-enter { animation: hero-status-in 560ms cubic-bezier(.23, 1, .32, 1) 140ms both; }
.hero-content-group { position: relative; }
.status-dot { position: relative; flex: none; }
.status-dot::after { content: ''; position: absolute; inset: -4px; border: 1px solid rgb(117 196 90 / 65%); border-radius: 9999px; animation: status-pulse 2.2s ease-out infinite; }
@media (max-width: 767px) {
  .surface-hero {
    height: auto;
    min-height: max(620px, 100svh);
    box-sizing: border-box;
  }
  .hero-shell { padding-top: 8.5rem; }
  .hero-content-group { margin-top: 1rem; }
  .hero-shell > h1 { top: 4rem; bottom: auto; font-size: clamp(3.3rem, 18vw, 7rem); }
}
@media (min-width: 768px) and (min-height: 700px) {
  .hero-content-group { transform: none; }
}
@keyframes hero-copy-in { from { opacity: 0; transform: translateX(-120px); } to { opacity: 1; transform: translateX(0); } }
@keyframes hero-wordmark-in { from { opacity: 0; transform: translateY(150px); } to { opacity: 1; transform: translateY(0); } }
@keyframes hero-image-in { from { opacity: 0; transform: translateX(120px); } to { opacity: 1; transform: translateX(0); } }
@keyframes hero-status-in { from { opacity: 0; transform: translateX(-120px); } to { opacity: 1; transform: translateX(0); } }
@keyframes status-pulse { 0% { opacity: .7; transform: scale(.8); } 70%, 100% { opacity: 0; transform: scale(2.2); } }
@media (max-width: 767px) {
  .hero-wordmark-enter { animation-name: hero-wordmark-mobile-in; }
}
@keyframes hero-wordmark-mobile-in { from { opacity: 0; transform: translateX(120px); } to { opacity: 1; transform: translateX(0); } }
@media (prefers-reduced-motion: reduce) {
  .status-dot::after { animation: none; }
}
</style>
