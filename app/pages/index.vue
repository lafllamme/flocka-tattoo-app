<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'
import FlockaColorRevealImage from '../components/flocka/ColorRevealImage.vue'
import FlockaReveal from '../components/flocka/RevealOnScroll.vue'
import MotionViewCarousel from '../components/flocka/MotionViewCarousel.vue'

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
  { title: 'CYBERLISM', description: 'Spitze Formen, organische Linien und ein Zeichen zwischen digitaler Ästhetik und dunkler Symbolik.', scope: 'Cyber Sigilism', detail: 'Schwarz-Rot', image: '/images/portfolio/red-relic.png' },
  { title: 'MINIMALISM', description: 'Ein reduziertes Zeichen aus feinen Linien, bewusst offen gelassen und leicht über die Haut geführt.', scope: 'Fine Line', detail: 'Ornamental', image: '/images/portfolio/open-skin.png' },
  { title: 'LETTERING', description: 'Kräftige Buchstaben, harte Kontraste und ein Schriftzug mit eigener Haltung.', scope: 'Blackletter', detail: 'Schwarz-Rot', image: '/images/portfolio/process.png' },
]
const services = [
  { title: 'INDIVIDUELLE TATTOOS', body: 'Von der ersten Idee bis zur letzten Linie: Wir entwickeln dein Motiv gemeinsam und passend zu dir.' },
  { title: 'COLORING', body: 'Klare Kontraste, starke Formen und rote oder farbige Akzente, wenn sie dem Motiv etwas geben.' },
  { title: 'FLASH & SPONTAN-TERMINE', body: 'Ein wachsendes Archiv fertiger Motive für alle, die ihr Tattoo am liebsten direkt umsetzen.' },
  { title: 'COVER-UPS', body: 'Eine neue Richtung für ein altes Tattoo – ehrlich geplant und mit genug Raum für eine gute Lösung.' },
]
const process = [
  { number: '01', title: 'IDEE', body: 'Wir sprechen über dein Motiv, Referenzen, die Körperstelle und darüber, was dein Tattoo auslösen soll.' },
  { number: '02', title: 'ENTWURF', body: 'Aus deinem ersten Gedanken wird eine klare Richtung – mit Größe, Rhythmus und einer eigenen Haltung.' },
  { number: '03', title: 'TATTOO', body: 'Schablone, Linie, Schatten und rote oder farbige Details kommen in einer konzentrierten Session zusammen.' },
  { number: '04', title: 'PFLEGE', body: 'Du bekommst klare Hinweise für die Heilung und ehrliche Tipps, damit dein Tattoo gut ankommt.' },
]
const testimonials = [
  { quote: 'Der Prozess war persönlich und konzentriert. Mit jedem Gespräch wurde die Idee klarer – und das Tattoo stärker, als ich es mir vorgestellt hatte.', author: 'Mara K.', image: '/images/portfolio/archive.png' },
  { quote: 'Sascha hat meine Referenz sofort verstanden und daraus etwas gemacht, das sich anfühlt, als wäre es immer für mich gedacht gewesen.', author: 'Jonas R.', image: '/images/portfolio/archive.png' },
  { quote: 'Ruhiges Studio, klare Richtung, schöne Linien. Ich kam für einen kleinen Flash und weiß jetzt schon, was als Nächstes kommt.', author: 'Lea M.', image: '/images/portfolio/archive.png' },
]
const faqs = [
  { question: 'Welche Tattoos macht Flocka?', answer: 'Individuelle Tattoos, Blackwork, Ornamentik, Schwarz-Rot, ausgewählte Farben und Flash. Am besten starten wir mit deiner Idee – nicht mit einer festen Schublade.' },
  { question: 'Brauche ich schon eine fertige Idee?', answer: 'Nein. Ein grober Gedanke, eine Referenz oder ein Gefühl reicht völlig, um ins Gespräch zu kommen.' },
  { question: 'Machst du Cover-ups oder arbeitest du auf bestehenden Tattoos?', answer: 'Ja. Schick klare Fotos und sag, was bleiben, verschwinden oder sich verändern soll. Dann schauen wir ehrlich, was möglich ist.' },
  { question: 'Wie läuft ein Termin ab?', answer: 'Wir klären Idee, Körperstelle und Größe, schauen die Schablone gemeinsam an und arbeiten dann konzentriert mit Pausen, wenn du sie brauchst.' },
  { question: 'Gibt es Spontantermine?', answer: 'Für ausgewählte Flash-Motive und kleine Tattoos kann es Spontantermine geben. Größere individuelle Arbeiten planen wir vorher in Ruhe.' },
  { question: 'Wie starte ich eine Anfrage?', answer: 'Schreib uns mit deiner Idee, der Körperstelle, einer ungefähren Größe und ein paar Referenzen. Alles Weitere klären wir persönlich.' },
]
const articles = [
  { title: 'Ein Tattoo beginnt vor der Schablone', body: 'Warum das erste Gespräch genauso wichtig ist wie die letzte Linie.', image: 'https://i.imgur.com/egkTZJd.gif' },
  { title: 'Blackwork als visuelle Sprache', body: 'Über Kontrast, Gewicht und Motive, die lesbar bleiben.', image: 'https://i.imgur.com/TGdtgDL.gif' },
  { title: 'Die ruhige Disziplin der Pflege', body: 'Warum frische Tattoos Zeit brauchen, um richtig anzukommen.', image: 'https://i.imgur.com/SjHANWz.gif' },
]

const runtimeConfig = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = runtimeConfig.public.siteUrl || requestUrl.origin
const pageTitle = 'Flocka Tattoo Köln · Sascha Schlüter'
const pageDescription = 'Flocka Tattoo von Sascha Schlüter in Köln: individuelle Tattoos, Blackwork, Schwarz-Rot, Farbe, Ornamentik und Flash. Jetzt unverbindlich anfragen.'
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
      alternateName: 'Flocka Tattoo von Sascha Schlüter',
      description: pageDescription,
      url: siteUrl,
      image: ogImage,
      email: 'flockatattoo@proton.me',
      sameAs: [instagramUrl],
      areaServed: { '@type': 'City', name: 'Köln' },
      founder: { '@id': `${siteUrl}/#artist` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tattoo-Leistungen',
        itemListElement: ['Individuelle Tattoos', 'Blackwork', 'Schwarz-Rot und Farbe', 'Ornamentik', 'Flash-Tattoos', 'Cover-ups'].map(name => ({
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
      jobTitle: 'Vollzeit-Tätowierer',
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
    { property: 'og:image:alt', content: 'Flocka Tattoo · Sascha Schlüter · Tätowierer in Köln' },
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
    <div class="surface-hero-stack">
      <FlockaHeroSection />

      <section id="about" class="surface-card surface-section page-shell -mt-2 border-0 border-t-2 border-t-bone px-5 py-16 md:px-[2vw] md:py-24">
        <div class="section-rule"><p class="section-label text-signal-bright">Über mich</p><span class="section-rule__line" /></div>
        <div class="about-layout mt-16 grid gap-16 md:mt-24 md:grid-cols-2 md:gap-x-24 md:gap-y-24">
          <FlockaReveal direction="right" class="md:col-start-2"><p class="surface-lead max-w-3xl">Ich bin Sascha, 31, Vollzeit-Tätowierer aus Köln. Als Newcomer im Quereinstieg entwickle ich gerade meine eigene Handschrift – mit klaren Linien, starken Symbolen und Farbe, wenn sie passt.</p></FlockaReveal>
          <FlockaReveal direction="left" class="md:col-start-1 md:row-start-2"><div class="space-y-8 text-sm leading-relaxed text-muted md:text-base"><p>Ich lerne mit jedem Stück dazu und probiere mich bewusst durch unterschiedliche Richtungen. Von feinen Symbolen bis zu kräftigem Blackwork, von Schwarz-Rot bis Farbe.</p><ul class="border-t border-line pt-5 text-bone"><li class="border-b border-line py-3 text-muted">Unabhängige Praxis</li><li class="border-b border-line py-3 text-muted">Blackwork &amp; Fine Line</li><li class="border-b border-line py-3 text-muted">Schwarz-Rot &amp; Farbe</li><li class="py-3 text-muted">Flash-Archiv</li></ul></div></FlockaReveal>
          <FlockaReveal direction="right" class="md:col-start-2 md:row-start-2"><FlockaColorRevealImage src="/images/portfolio/testimonial.png" alt="Tattoo-Arbeit aus dem Portfolio von Flocka" class="aspect-[1.25] w-full border border-bone object-cover" /></FlockaReveal>
        </div>
      </section>
    </div>

    <section id="work" class="surface-section page-shell border-b border-line px-5 py-24 md:px-[2vw] md:py-24">
      <div class="section-rule"><p class="section-label text-signal-bright">Arbeiten</p><span class="section-rule__line" /></div>
      <div class="mt-12 grid gap-12 md:mt-24 md:gap-24">
        <FlockaReveal v-for="(project, index) in work" :key="project.title" :direction="index % 2 === 0 ? 'left' : 'right'">
          <article class="work-card grid gap-12 md:min-h-[39rem] md:grid-cols-2 md:items-center md:gap-16">
            <div class="flex h-full flex-col justify-center"><h3 class="max-w-xl font-display text-5xl uppercase leading-[.85] tracking-[-.05em] text-bone md:text-7xl">{{ project.title }}</h3><div class="mt-10 max-w-md"><p class="text-sm leading-relaxed text-muted md:text-base">{{ project.description }}</p><div class="mt-8 grid grid-cols-2 gap-y-2 text-sm text-muted"><span>Art:</span><span class="text-right text-bone">{{ project.scope }}</span><span>Richtung:</span><span class="text-right text-bone">{{ project.detail }}</span></div><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="mt-14 inline-flex items-center gap-4 border-2 border-bone px-6 py-4 text-base font-sans normal-case tracking-normal text-bone transition-colors hover:bg-bone hover:text-black">Motiv ansehen <Icon name="lucide:arrow-up-right" size="17" /></a></div></div>
            <a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="group block overflow-hidden border border-bone" :aria-label="`${project.title} ansehen`"><FlockaColorRevealImage :src="project.image" :alt="project.title" class="aspect-[1.37] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></a>
          </article>
        </FlockaReveal>
      </div>
    </section>

    <section id="services" class="surface-section page-shell border-b border-line px-5 py-24 md:px-[2vw] md:py-24"><div class="section-rule"><p class="section-label text-signal-bright">Leistungen</p><span class="section-rule__line" /></div><div class="mt-16 grid gap-8 md:mt-24 md:grid-cols-[.8fr_1.2fr]"><p class="surface-lead max-w-2xl">Tattoos mit klarer Richtung, ruhiger Hand und genug Raum für eine gute Idee.</p><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow hidden h-fit border-b border-line pb-2 text-bone hover:border-signal-bright md:block">Leistungen ansehen <Icon name="lucide:arrow-up-right" size="14" /></a></div><div class="mt-16 border-t border-line md:mt-24"><article v-for="service in services" :key="service.title" class="grid gap-4 border-b border-line py-8 transition-colors hover:bg-white hover:text-black md:grid-cols-[.8fr_1.2fr] md:items-center md:py-10"><h3 class="font-display text-3xl uppercase leading-none tracking-[-.03em] text-bone md:text-5xl">{{ service.title }}</h3><p class="max-w-lg text-sm leading-relaxed text-muted transition-colors md:text-base">{{ service.body }}</p></article></div></section>

    <section id="process" class="surface-section page-shell border-b border-line px-5 py-24 md:px-[2vw] md:py-24"><div class="section-rule"><p class="section-label text-signal-bright">Ablauf</p><span class="section-rule__line" /></div><div class="mt-16 grid gap-14 md:mt-24 md:grid-cols-[.8fr_1.2fr] md:items-center"><FlockaColorRevealImage src="/images/portfolio/flash-after-dark.png" alt="Detail aus dem Tattoo-Prozess von Flocka" class="aspect-[.8] w-full border border-bone object-cover" /><div class="grid content-start"><article v-for="stage in process" :key="stage.number" class="grid grid-cols-[3rem_1fr] gap-5 border-b border-line py-8 first:pt-0 md:py-9"><p class="eyebrow text-muted">{{ stage.number }}</p><div><h3 class="font-display text-4xl uppercase leading-none text-bone md:text-5xl">{{ stage.title }}</h3><p class="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">{{ stage.body }}</p></div></article></div></div></section>

    <section id="testimonials" class="surface-section page-shell border-b border-line px-5 py-24 md:px-[2vw] md:py-24"><div class="section-rule"><p class="section-label text-signal-bright">Stimmen</p><span class="section-rule__line" /></div><div class="mt-16 grid gap-12 md:mt-24 md:grid-cols-[.7fr_1.3fr] md:items-center md:gap-20"><div class="flex flex-col gap-8"><div class="overflow-hidden border border-bone"><Transition name="fade" mode="out-in"><FlockaColorRevealImage :key="currentTestimonial.image" :src="currentTestimonial.image" :alt="`Portrait von ${currentTestimonial.author}`" class="aspect-[.85] w-full object-cover" /></Transition></div><div class="flex gap-2"><button class="btn-ghost size-14" aria-label="Vorherige Stimme" @click="previousTestimonial"><Icon name="lucide:arrow-left" size="16" /></button><button class="btn-ghost size-14" aria-label="Nächste Stimme" @click="nextTestimonial"><Icon name="lucide:arrow-right" size="16" /></button></div></div><div class="flex flex-col justify-center"><span class="mb-10 font-display text-8xl leading-none text-bone">“</span><Transition name="fade" mode="out-in"><blockquote :key="currentTestimonial.quote" class="font-display text-3xl leading-[1.02] tracking-[-.035em] text-bone md:text-5xl">{{ currentTestimonial.quote }}<footer class="eyebrow mt-10 text-muted">{{ currentTestimonial.author }}</footer></blockquote></Transition></div></div></section>

    <section id="faq" class="surface-section page-shell border-b border-line px-5 py-24 md:px-[2vw] md:py-24"><div class="section-rule"><p class="section-label text-signal-bright">Fragen</p><span class="section-rule__line" /></div><p class="surface-lead ml-auto mt-16 max-w-2xl md:mt-24">Antworten zu Studio, Motiven und der Anfrage für deinen Termin.</p><div class="faq-list mt-16 border-t border-line md:mt-24"><article v-for="(faq, index) in faqs" :key="faq.question" class="faq-item border-b border-line" :class="{ 'faq-item--open': openFaq === index }"><button class="flex w-full items-center justify-between gap-8 py-8 text-left text-base text-bone md:py-9 md:text-lg" :aria-expanded="openFaq === index" :aria-controls="`faq-answer-${index}`" @click="toggleFaq(index)"><span>{{ faq.question }}</span><span class="faq-icon flex size-8 shrink-0 items-center justify-center text-bone transition-transform duration-300" :class="{ 'rotate-45': openFaq === index }" aria-hidden="true"><Icon name="lucide:plus" size="21" /></span></button><div :id="`faq-answer-${index}`" class="grid transition-[grid-template-rows,opacity] duration-300" :class="openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"><p class="min-h-0 max-w-3xl overflow-hidden pb-8 text-sm leading-relaxed md:text-base">{{ faq.answer }}</p></div></article></div></section>

    <section id="blog" class="surface-section page-shell border-b border-line px-5 py-24 md:px-[2vw] md:py-24"><div class="section-rule"><p class="section-label text-signal-bright">Journal</p><span class="section-rule__line" /></div><div class="mt-16 grid gap-8 md:mt-24 md:grid-cols-3 md:gap-6"><a v-for="article in articles" :key="article.title" href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="journal-card group block border border-bone p-3 transition-colors hover:bg-bone hover:text-black"><div class="overflow-hidden"><FlockaColorRevealImage :src="article.image" :alt="article.title" allow-multiple-on-desktop class="aspect-[1.2] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div class="p-3 pb-4"><h3 class="text-lg leading-tight text-bone transition-colors group-hover:text-black">{{ article.title }}</h3><p class="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-black">{{ article.body }}</p></div></a></div></section>

  </main>

    <section id="selected-works" class="surface-gallery page-shell relative z-5 border-b border-line py-28 md:py-44">
      <div class="mb-14 grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end md:mb-20">
        <p class="section-label text-signal-bright">Ausgewählte Arbeiten</p>
      <p class="surface-lead max-w-2xl">Eine bewegte Sammlung aus Motiven, Symbolen und Arbeiten, die ihren Platz auf der Haut finden.</p>
      </div>
      <MotionViewCarousel />
    </section>

    <section id="contact" class="surface-contact page-shell relative z-5 min-h-[553px] border-b border-line py-16 md:py-12"><p class="section-label text-signal-bright">Kontakt</p><div class="mt-12 grid gap-14 md:grid-cols-[1.15fr_.85fr] md:items-center"><div class="flex flex-col items-start"><h2 class="max-w-4xl font-display text-[clamp(3.5rem,9vw,8.5rem)] font-black uppercase leading-[.78] tracking-[-.07em] text-bone">Lass uns<br />über dein Tattoo sprechen</h2><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="btn-ghost mt-10 rounded-md border-2 border-bone px-5 py-3 text-base normal-case tracking-normal">Anfrage senden <Icon name="lucide:arrow-up-right" size="18" /></a></div><img src="/images/flocka_logo.png" alt="Flocka Tattoo Logo" class="mx-auto mt-4 w-48 object-contain md:mx-0 md:mt-0 md:w-full md:max-w-[22rem] md:justify-self-end" /></div></section>

  <div class="surface-footer-stage sticky bottom-0 z-1">
    <footer class="surface-footer relative grid min-h-[550px] gap-12 overflow-hidden px-5 pb-32 pt-18 text-black md:grid-cols-[1fr_auto] md:px-[2vw] md:pb-16 md:pt-18"><div><a href="mailto:flockatattoo@proton.me" class="block text-3xl font-semibold tracking-[-.04em] hover:opacity-60 md:text-5xl">flockatattoo@proton.me</a><p class="mt-10 max-w-xs text-lg leading-tight">Lust auf ein Tattoo? Schreib mir. Offen für neue Motive, Ideen und gute Gespräche.</p><div class="mt-10 flex gap-7"><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="text-lg hover:opacity-60">Instagram</a><a href="mailto:flockatattoo@proton.me" class="text-lg hover:opacity-60">Anfrage</a></div></div><div class="grid grid-cols-2 gap-16 text-lg"><div><p class="mb-5 font-semibold">Menü</p><div class="grid gap-3"><a href="#top" class="hover:opacity-60">Start</a><a href="#about" class="hover:opacity-60">Über mich</a><a href="#work" class="hover:opacity-60">Arbeiten</a><a href="#services" class="hover:opacity-60">Leistungen</a><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Kontakt</a></div></div><div><p class="mb-5 font-semibold">Hinweise</p><div class="grid gap-3"><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Datenschutz</a><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Impressum</a></div></div></div><p aria-hidden="true" class="pointer-events-none absolute bottom-[-.18em] left-[2vw] right-[2vw] font-display text-center text-[clamp(7rem,21vw,21rem)] font-black uppercase leading-[.72] tracking-[-.09em]">FLOCKA</p></footer>
  </div>
  </div>
</template>

<style scoped>
.surface-page { background: #f2efe8; }
.surface-home { position: relative; z-index: 2; background: #000; }
.surface-hero-stack { position: relative; isolation: isolate; }
.surface-hero { z-index: 2; }
.surface-section { position: relative; z-index: 5; scroll-margin-top: 5rem; background: #000; }
.surface-gallery { background: #000; isolation: isolate; }
.section-rule { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 1.25rem; }
.section-label { margin: 0; color: var(--flocka-signal-bright, #e33434); font-family: Inter, Arial, sans-serif; font-size: clamp(.72rem, .8vw, .9rem); font-weight: 600; letter-spacing: .12em; line-height: 1; text-transform: none; white-space: nowrap; }
.section-rule__line { height: 2px; background: #fff; }
.surface-section:not(.surface-card):not(#work) > * { opacity: 0; transform: translateX(-48px); transition: opacity 720ms cubic-bezier(.22, 1, .36, 1), transform 720ms cubic-bezier(.22, 1, .36, 1); }
.surface-section:not(.surface-card):not(#work) > :nth-child(even) { transform: translateX(48px); }
.surface-section.section-reveal--visible:not(.surface-card):not(#work) > * { opacity: 1; transform: translateX(0); }
.surface-lead { font-size: clamp(1.35rem, 2.25vw, 2.25rem); line-height: 1.08; letter-spacing: -.035em; color: var(--flocka-bone, #f2efe8); }
.surface-card { border-radius: 48px 48px 0 0; }
.surface-contact { border-radius: 0 0 48px 48px; background: #000; }
.surface-footer { background: #f2efe8; }
.surface-footer-stage { min-height: 550px; }
.faq-item--open { background: var(--flocka-bone, #f2efe8); color: #000; }
.faq-list { border-color: var(--flocka-bone, #f2efe8); }
.faq-item { border-color: var(--flocka-bone, #f2efe8); }
.faq-item--open .faq-icon { color: #000; }
.faq-item--open button { color: #000; }
.faq-item--open p { color: #000; }
.faq-item:not(.faq-item--open) button:hover { color: var(--flocka-bone, #f2efe8); }
.journal-card:nth-child(1) { transition-delay: 0ms; }
.journal-card:nth-child(2) { transition-delay: 90ms; }
.journal-card:nth-child(3) { transition-delay: 180ms; }
@media (hover: hover) {
  #services article:hover h3,
  #services article:hover p { color: #000; }
}
.fade-enter-active, .fade-leave-active { transition: opacity 360ms ease, transform 360ms ease; }
.fade-enter-from { opacity: 0; transform: translateX(24px); }
.fade-leave-to { opacity: 0; transform: translateX(-24px); }
@media (prefers-reduced-motion: reduce) {
  .surface-section:not(.surface-card):not(#work) > * { opacity: 1; transform: none; transition: none; }
  .fade-enter-active, .fade-leave-active { transition-duration: 1ms; }
}
@media (max-width: 767px) {
  .surface-card { border-radius: 36px 36px 0 0; }
  .section-rule { gap: .75rem; }
}
</style>
