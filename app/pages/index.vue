<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'
import FlockaColorRevealImage from '../components/flocka/ColorRevealImage.vue'
import FlockaReveal from '../components/flocka/RevealOnScroll.vue'

const prefersReducedMotion = usePreferredReducedMotion()
let sectionObserver: IntersectionObserver | undefined

onMounted(() => {
  if (prefersReducedMotion.value === 'reduce')
    return

  const sections = document.querySelectorAll<HTMLElement>('.surface-section:not(.surface-card):not(#work)')

  sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting)
        continue

      entry.target.classList.add('section-reveal--visible')
      sectionObserver?.unobserve(entry.target)
    }
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 })

  for (const section of sections)
    sectionObserver.observe(section)
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
})

const work = [
  { title: 'RED RELIC', description: 'A custom blackwork piece built around old symbols, red ink accents and a strong vertical silhouette.', scope: 'Custom piece', detail: 'Blackwork', image: '/images/portfolio/red-relic.png' },
  { title: 'OPEN SKIN', description: 'An ornamental study developed from fine line structure, negative space and slow detail.', scope: 'Ornamental', detail: 'Fine line', image: '/images/portfolio/open-skin.png' },
  { title: 'FLASH AFTER DARK', description: 'A direct flash series for people who want a clear image, a sharp mark and no second guessing.', scope: 'Flash series', detail: 'Walk-in ready', image: '/images/portfolio/process.png' },
]
const services = [
  { title: 'CUSTOM TATTOOS', body: 'From the first sketch to the final line, every custom piece is shaped around your story, body and idea.' },
  { title: 'BLACKWORK', body: 'High contrast, strong silhouettes and graphic shadows for tattoos that hold their ground over time.' },
  { title: 'FLASH & WALK-INS', body: 'A rotating archive of ready-to-ink symbols for the moments when you know exactly what you want.' },
  { title: 'COVER-UPS', body: 'New structure, new direction and a considered approach to turning an old mark into a better one.' },
]
const process = [
  { number: '01', title: 'RESEARCH', body: 'We start with the idea, references, placement and the reason you want the tattoo in the first place.' },
  { number: '02', title: 'CONCEPT', body: 'The loose thought becomes a clear visual direction with scale, rhythm and a point of view.' },
  { number: '03', title: 'TATTOO', body: 'A focused session where the stencil, line, shadow and red signal details come together.' },
  { number: '04', title: 'AFTERCARE', body: 'You leave with clear aftercare, honest advice and a piece made to settle into your life.' },
]
const testimonials = [
  { quote: 'The whole process felt focused and personal. The idea got sharper with every conversation and the tattoo came out stronger than I imagined.', author: 'Mara K.', image: '/images/portfolio/archive.png' },
  { quote: 'Flocka understood the reference immediately and turned it into something that feels like it was always meant to be on me.', author: 'Jonas R.', image: '/images/portfolio/archive.png' },
  { quote: 'Calm studio, clear direction, beautiful linework. I came in for one small flash and already know what the next piece will be.', author: 'Lea M.', image: '/images/portfolio/archive.png' },
]
const faqs = [
  { question: 'What kind of tattoos does Flocka make?', answer: 'Custom blackwork, ornamental pieces, red-accented designs and selected flash. The best starting point is your idea, not a fixed category.' },
  { question: 'Do I need a finished idea before I book?', answer: 'No. A rough thought, a reference or even a feeling is enough to start a conversation.' },
  { question: 'Can you work with an existing tattoo or cover-up?', answer: 'Yes. Send clear photos and tell us what you want to keep, hide or change so the right direction can be planned.' },
  { question: 'How does a session normally proceed?', answer: 'We clarify the idea, confirm placement and scale, review the stencil together, then tattoo at a focused pace with breaks when needed.' },
  { question: 'Do you take walk-ins?', answer: 'Selected flash and small pieces may be available for walk-ins. Custom work is booked in advance so there is enough time for the concept.' },
  { question: 'How can I start a booking?', answer: 'Use the booking form below with your idea, placement, approximate size and a few reference images.' },
]
const articles = [
  { title: 'A tattoo starts before the stencil', body: 'Why the first conversation matters as much as the final line.', image: 'https://i.imgur.com/egkTZJd.gif' },
  { title: 'Blackwork as visual language', body: 'On contrast, weight and making a mark that stays readable.', image: 'https://i.imgur.com/TGdtgDL.gif' },
  { title: 'The quiet discipline of aftercare', body: 'A short guide to giving fresh work the time it needs to settle.', image: 'https://i.imgur.com/SjHANWz.gif' },
]

const runtimeConfig = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = runtimeConfig.public.siteUrl || requestUrl.origin
const pageTitle = 'Flocka Tattoo Köln · Sascha Schlüter'
const pageDescription = 'Flocka Tattoo von Sascha Schlüter in Köln: Custom Tattoos, Blackwork, Ornamental, Fine Line und Flash. Jetzt unverbindlich anfragen.'
const ogImage = `${siteUrl}/images/og-flocka-tattoo.png`
const instagramUrl = 'https://www.instagram.com/flockatattoo/'
/* eslint-disable style/quote-props */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TattooParlor',
      '@id': `${siteUrl}/#tattoo-parlor`,
      name: 'Flocka Tattoo',
      alternateName: 'Flocka Tattoo by Sascha Schlüter',
      description: pageDescription,
      url: siteUrl,
      image: ogImage,
      email: 'flockatattoo@proton.me',
      sameAs: [instagramUrl],
      areaServed: { '@type': 'City', name: 'Köln' },
      founder: { '@id': `${siteUrl}/#artist` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tattoo services',
        itemListElement: ['Custom Tattoos', 'Blackwork', 'Ornamental Tattoos', 'Fine Line Tattoos', 'Flash Tattoos', 'Cover-ups'].map(name => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#artist`,
      name: 'Sascha Schlüter',
      alternateName: 'Flocka',
      jobTitle: 'Tattoo Artist',
      url: siteUrl,
      sameAs: [instagramUrl],
      worksFor: { '@id': `${siteUrl}/#tattoo-parlor` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
}
/* eslint-enable style/quote-props */

useHead({
  title: pageTitle,
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: siteUrl }],
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'author', content: 'Sascha Schlüter · Flocka Tattoo' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'de_DE' },
    { property: 'og:site_name', content: 'Flocka Tattoo' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: siteUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Flocka Tattoo · Sascha Schlüter · Tattoo Artist in Köln' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: ogImage },
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(structuredData) }],
})

const testimonialIndex = ref(0)
const openFaq = ref<number | null>(null)
const currentTestimonial = computed(() => testimonials[testimonialIndex.value] ?? testimonials[0]!)

function nextTestimonial() {
  testimonialIndex.value = (testimonialIndex.value + 1) % testimonials.length
}

function previousTestimonial() {
  testimonialIndex.value = (testimonialIndex.value - 1 + testimonials.length) % testimonials.length
}

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div class="surface-page relative min-h-screen">
  <main class="surface-home relative flex min-h-screen flex-col text-bone">
    <FlockaNoiseLayer />
    <FlockaSiteHeader />
    <FlockaHeroSection />

      <section id="about" class="surface-card surface-section page-shell -mt-2 grid gap-12 border border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36">
      <FlockaReveal direction="left"><p class="eyebrow text-signal-bright">About</p></FlockaReveal>
      <FlockaReveal direction="right"><div class="grid gap-20 md:grid-cols-[1.05fr_.95fr]"><p class="surface-lead">Flocka Tattoo is the independent tattoo practice of Sascha Schlüter in Köln, focused on lasting marks through conversation, structure and a strong visual point of view.</p><div class="flex flex-col justify-between gap-10"><div class="space-y-7 text-sm leading-relaxed text-muted md:text-base"><p>Every piece starts with a reason. We take the time to understand the image, the placement and the energy it should carry before a line is put on skin.</p><ul class="border-t border-line pt-5 text-bone"><li class="border-b border-line py-3 text-muted">Independent practice</li><li class="border-b border-line py-3 text-muted">Custom blackwork</li><li class="border-b border-line py-3 text-muted">Ornamental direction</li><li class="py-3 text-muted">Flash archive</li></ul></div><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow w-fit border-b border-line pb-2 text-bone transition-colors hover:border-signal hover:text-signal-bright">About the studio <Icon name="lucide:arrow-up-right" size="14" /></a></div></div></FlockaReveal>
    </section>

    <section id="work" class="surface-section page-shell border-b border-line py-24 md:py-36">
      <FlockaReveal class="mb-20 grid gap-8 md:grid-cols-2">
        <p class="eyebrow text-signal-bright">Work</p>
        <div class="flex justify-between gap-8"><p class="surface-lead max-w-xl">A selection of tattoos exploring weight, contrast, symbol and the relationship between image and body.</p><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow hidden h-fit whitespace-nowrap border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">View all work <Icon name="lucide:arrow-up-right" size="14" /></a></div>
      </FlockaReveal>
      <div class="grid gap-24">
        <article v-for="(project, index) in work" :key="project.title" class="grid gap-7 md:grid-cols-2">
          <div class="min-h-[34rem]">
            <p class="eyebrow text-muted">0{{ index + 1 }} / 0{{ work.length }}</p>
            <h3 class="mt-6 max-w-md font-display text-5xl uppercase leading-[.83] tracking-[-.05em] text-bone md:text-6xl">{{ project.title }}</h3>
            <div class="mt-8 md:sticky md:top-10">
              <p class="max-w-sm text-sm leading-relaxed text-muted">{{ project.description }}</p>
              <div class="mt-8 grid max-w-sm grid-cols-2 gap-y-2 text-sm text-muted"><span>Scope:</span><span class="text-right text-bone">{{ project.scope }}</span><span>Details:</span><span class="text-right text-bone">{{ project.detail }}</span></div>
              <a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow mt-9 inline-flex border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright">View project <Icon name="lucide:arrow-up-right" size="14" /></a>
            </div>
          </div>
          <FlockaReveal class="self-end"><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="group block overflow-hidden bg-surface" :aria-label="`View ${project.title}`"><FlockaColorRevealImage :src="project.image" :alt="project.title" class="aspect-[1.18] w-full object-cover group-hover:scale-105" /></a></FlockaReveal>
        </article>
      </div>
    </section>

    <section id="services" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="mb-20 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Services</p><div class="flex justify-between gap-8"><p class="surface-lead max-w-2xl">A focused tattoo practice for projects that need a clear image, a steady hand and a little more intention.</p><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow hidden h-fit border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">View services <Icon name="lucide:arrow-up-right" size="14" /></a></div></div><div class="border-t border-line"><article v-for="service in services" :key="service.title" class="grid gap-4 border-b border-line py-7 md:grid-cols-[.8fr_1.2fr] md:py-9"><h3 class="font-display text-3xl uppercase leading-none tracking-[-.03em] text-bone md:text-4xl">{{ service.title }}</h3><p class="max-w-lg text-sm leading-relaxed text-muted md:text-base">{{ service.body }}</p></article></div></section>

    <section id="process" class="surface-section page-shell grid gap-16 border-b border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36"><p class="eyebrow text-signal-bright">Process</p><div class="grid gap-14 md:grid-cols-[.75fr_1.25fr]"><FlockaColorRevealImage src="/images/portfolio/flash-after-dark.png" alt="Close-up detail from the Flocka tattoo process" class="aspect-[.8] w-full object-cover" /><div class="grid content-start"><article v-for="stage in process" :key="stage.number" class="grid grid-cols-[3rem_1fr] gap-5 border-b border-line py-7 first:pt-0"><p class="eyebrow text-muted">{{ stage.number }}</p><div><h3 class="font-display text-4xl uppercase leading-none text-bone">{{ stage.title }}</h3><p class="mt-4 max-w-md text-sm leading-relaxed text-muted">{{ stage.body }}</p></div></article></div></div></section>

    <section id="testimonials" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="grid gap-12 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Testimonials</p><div class="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div class="overflow-hidden bg-surface"><Transition name="fade" mode="out-in"><FlockaColorRevealImage :key="currentTestimonial.image" :src="currentTestimonial.image" :alt="`Portrait of ${currentTestimonial.author}`" class="aspect-[.85] w-full object-cover" /></Transition></div><div class="flex flex-col justify-between gap-10"><Transition name="fade" mode="out-in"><blockquote :key="currentTestimonial.quote" class="surface-lead">“{{ currentTestimonial.quote }}”<footer class="eyebrow mt-8 text-muted">{{ currentTestimonial.author }}</footer></blockquote></Transition><div class="flex gap-2"><button class="btn-ghost px-4 py-3" aria-label="Previous testimonial" @click="previousTestimonial"><Icon name="lucide:arrow-left" size="16" /></button><button class="btn-ghost px-4 py-3" aria-label="Next testimonial" @click="nextTestimonial"><Icon name="lucide:arrow-right" size="16" /></button></div></div></div></div></section>

    <section id="faq" class="surface-section page-shell grid gap-12 border-b border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36"><div><p class="eyebrow text-signal-bright">FAQ</p></div><div><p class="surface-lead mb-16 max-w-2xl">Answers to common questions about the studio, the work and booking a session.</p><div class="border-t border-line"><article v-for="(faq, index) in faqs" :key="faq.question" class="border-b border-line"><button class="flex w-full items-center justify-between gap-8 py-6 text-left text-base text-bone" :aria-expanded="openFaq === index" :aria-controls="`faq-answer-${index}`" @click="toggleFaq(index)"><span>{{ faq.question }}</span><span class="flex size-7 shrink-0 items-center justify-center border border-line text-signal transition-transform duration-300" :class="openFaq === index ? 'rotate-45' : ''"><Icon name="lucide:plus" size="14" /></span></button><div :id="`faq-answer-${index}`" class="grid transition-[grid-template-rows,opacity] duration-300" :class="openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"><p class="min-h-0 max-w-2xl overflow-hidden pb-6 text-sm leading-relaxed text-muted">{{ faq.answer }}</p></div></article></div></div></section>

    <section id="blog" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="mb-16 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Journal</p><div class="flex justify-between gap-8"><p class="surface-lead max-w-2xl">Short notes on tattoos, visual language, process and the quiet decisions behind a lasting mark.</p><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow hidden h-fit border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">View all articles <Icon name="lucide:arrow-up-right" size="14" /></a></div></div><div class="grid gap-10 md:grid-cols-3"><a v-for="article in articles" :key="article.title" href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="group"><div class="overflow-hidden bg-surface"><FlockaColorRevealImage :src="article.image" :alt="article.title" class="aspect-[1.2] w-full object-cover group-hover:scale-105" /></div><h3 class="mt-5 text-lg leading-tight text-bone">{{ article.title }}</h3><p class="mt-3 text-sm leading-relaxed text-muted">{{ article.body }}</p></a></div></section>

  </main>

    <section id="contact" class="surface-contact page-shell relative z-5 min-h-[553px] border-b border-line py-16 md:py-12"><p class="eyebrow text-signal-bright">Contact</p><div class="mt-12 flex flex-col items-start"><h2 class="max-w-4xl font-display text-[clamp(3.5rem,9vw,8.5rem)] font-black uppercase leading-[.78] tracking-[-.07em] text-bone">Let's talk<br>about your piece</h2><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="btn-ghost mt-10 rounded-md border-2 border-bone px-5 py-3 text-base normal-case tracking-normal">Get in touch <Icon name="lucide:arrow-up-right" size="18" /></a></div></section>

  <div class="surface-footer-stage sticky bottom-0 z-1">
    <footer class="surface-footer relative grid min-h-[550px] gap-12 overflow-hidden px-5 pb-12 pt-18 text-black md:grid-cols-[1fr_auto] md:px-[2vw] md:pb-16 md:pt-18"><div><a href="mailto:flockatattoo@proton.me" class="block text-3xl font-semibold tracking-[-.04em] hover:opacity-60 md:text-5xl">flockatattoo@proton.me</a><p class="mt-10 max-w-xs text-lg leading-tight">Resonates? Let’s talk. Open to custom pieces, new ideas and lasting collaborations.</p><div class="mt-10 flex gap-7"><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="text-lg hover:opacity-60">Instagram</a><a href="mailto:flockatattoo@proton.me" class="text-lg hover:opacity-60">Booking</a></div></div><div class="grid grid-cols-2 gap-16 text-lg"><div><p class="mb-5 font-semibold">Navigation</p><div class="grid gap-3"><a href="#top" class="hover:opacity-60">Home</a><a href="#about" class="hover:opacity-60">About</a><a href="#work" class="hover:opacity-60">Work</a><a href="#services" class="hover:opacity-60">Services</a><a href="mailto:flockatattoo@proton.me" class="hover:opacity-60">Contact</a></div></div><div><p class="mb-5 font-semibold">Legal</p><div class="grid gap-3"><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Privacy Policy</a><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Terms &amp; Conditions</a></div></div></div><p aria-hidden="true" class="pointer-events-none absolute bottom-[-.18em] left-[2vw] right-[2vw] font-display text-center text-[clamp(7rem,21vw,21rem)] font-black uppercase leading-[.72] tracking-[-.09em]">FLOCKA</p></footer>
  </div>
  </div>
</template>

<style scoped>
.surface-page { overflow-x: clip; background: #f2efe8; }
.surface-home { position: relative; z-index: 2; background: transparent; }
.surface-hero { z-index: 0; }
.surface-section { position: relative; z-index: 5; scroll-margin-top: 5rem; background: #000; }
.surface-section:not(.surface-card):not(#work) > * { opacity: 0; transform: translateX(-48px); transition: opacity 720ms cubic-bezier(.22, 1, .36, 1), transform 720ms cubic-bezier(.22, 1, .36, 1); }
.surface-section:not(.surface-card):not(#work) > :nth-child(even) { transform: translateX(48px); }
.surface-section.section-reveal--visible:not(.surface-card):not(#work) > * { opacity: 1; transform: translateX(0); }
.surface-lead { font-size: clamp(1.35rem, 2.25vw, 2.25rem); line-height: 1.08; letter-spacing: -.035em; color: var(--flocka-bone, #f2efe8); }
.surface-card { border-radius: 48px 48px 0 0; }
.surface-contact { border-radius: 0 0 48px 48px; background: #000; }
.surface-footer { background: #f2efe8; }
.surface-footer-stage { min-height: 550px; }
.fade-enter-active, .fade-leave-active { transition: opacity 360ms ease, transform 360ms ease; }
.fade-enter-from { opacity: 0; transform: translateX(24px); }
.fade-leave-to { opacity: 0; transform: translateX(-24px); }
@media (prefers-reduced-motion: reduce) {
  .surface-section:not(.surface-card):not(#work) > * { opacity: 1; transform: none; transition: none; }
  .fade-enter-active, .fade-leave-active { transition-duration: 1ms; }
}
</style>
