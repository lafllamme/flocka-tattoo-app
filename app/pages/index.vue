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
  { number: '01', prefix: 'DEINE', title: 'IDEE', body: 'Wir sprechen über dein Motiv, Referenzen, die Körperstelle und darüber, was dein Tattoo auslösen soll.' },
  { number: '02', prefix: 'DEIN', title: 'ENTWURF', body: 'Aus deinem ersten Gedanken wird eine klare Richtung – mit Größe, Rhythmus und einer eigenen Haltung.' },
  { number: '03', prefix: 'DEIN', title: 'TATTOO', body: 'Schablone, Linie, Schatten und rote oder farbige Details kommen in einer konzentrierten Session zusammen.' },
  { number: '04', prefix: 'DEINE', title: 'PFLEGE', body: 'Du bekommst klare Hinweise für die Heilung und ehrliche Tipps, damit dein Tattoo gut ankommt.' },
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
    <FlockaHeroSection />

      <section id="about" class="surface-card surface-section page-shell -mt-2 grid gap-12 border border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36">
      <FlockaReveal direction="left"><p class="eyebrow text-signal-bright">Über mich</p></FlockaReveal>
      <FlockaReveal direction="right"><div class="grid gap-20 md:grid-cols-[1.05fr_.95fr]"><p class="surface-lead">Flocka Tattoo ist die unabhängige Praxis von Sascha Schlüter in Köln. 31 Jahre, Vollzeit-Tätowierer, Quereinstieg – und jeden Tag ein Stück näher an einer eigenen Handschrift.</p><div class="flex flex-col justify-between gap-10"><div class="space-y-7 text-sm leading-relaxed text-muted md:text-base"><p>Ich bin noch Newcomer und lerne mit jedem Stück dazu. Gerade deshalb probiere ich viel aus: klare Formen, feine Linien, Schwarz-Rot und Farbe, wenn sie dem Motiv etwas geben.</p><ul class="border-t border-line pt-5 text-bone"><li class="border-b border-line py-3 text-muted">Unabhängige Praxis</li><li class="border-b border-line py-3 text-muted">Schwarz-Rot &amp; Farbe</li><li class="border-b border-line py-3 text-muted">Grafische Motive</li><li class="py-3 text-muted">Flash-Archiv</li></ul></div><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow w-fit border-b border-line pb-2 text-bone transition-colors hover:border-signal hover:text-signal-bright">Mehr über Flocka <Icon name="lucide:arrow-up-right" size="14" /></a></div></div></FlockaReveal>
    </section>

    <section id="work" class="surface-section page-shell border-b border-line py-24 md:py-36">
      <FlockaReveal class="mb-20 grid gap-8 md:grid-cols-2">
        <p class="eyebrow text-signal-bright">Arbeiten</p>
        <div class="flex justify-between gap-8"><p class="surface-lead max-w-xl">Eine Auswahl von Motiven zwischen Gewicht, Kontrast, Symbol und der Frage, wie ein Bild auf dem Körper weiterlebt.</p><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow hidden h-fit whitespace-nowrap border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">Alle Arbeiten <Icon name="lucide:arrow-up-right" size="14" /></a></div>
      </FlockaReveal>
      <div class="grid gap-24">
        <article v-for="(project, index) in work" :key="project.title" class="grid gap-7 md:grid-cols-2">
          <div class="min-h-[34rem]">
            <p class="eyebrow text-muted">0{{ index + 1 }} / 0{{ work.length }}</p>
            <h3 class="mt-6 max-w-md font-display text-5xl uppercase leading-[.83] tracking-[-.05em] text-bone md:text-6xl">{{ project.title }}</h3>
            <div class="mt-8 md:sticky md:top-10">
              <p class="max-w-sm text-sm leading-relaxed text-muted">{{ project.description }}</p>
              <div class="mt-8 grid max-w-sm grid-cols-2 gap-y-2 text-sm text-muted"><span>Art:</span><span class="text-right text-bone">{{ project.scope }}</span><span>Richtung:</span><span class="text-right text-bone">{{ project.detail }}</span></div>
              <a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow mt-9 inline-flex border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright">Motiv ansehen <Icon name="lucide:arrow-up-right" size="14" /></a>
            </div>
          </div>
          <FlockaReveal class="self-end"><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="group block overflow-hidden bg-surface" :aria-label="`${project.title} ansehen`"><FlockaColorRevealImage :src="project.image" :alt="project.title" class="aspect-[1.18] w-full object-cover group-hover:scale-105" /></a></FlockaReveal>
        </article>
      </div>
    </section>

    <section id="services" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="mb-20 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Leistungen</p><div class="flex justify-between gap-8"><p class="surface-lead max-w-2xl">Tattoos mit klarer Richtung, ruhiger Hand und genug Raum für eine gute Idee.</p><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow hidden h-fit border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">Leistungen ansehen <Icon name="lucide:arrow-up-right" size="14" /></a></div></div><div class="border-t border-line"><article v-for="service in services" :key="service.title" class="grid gap-4 border-b border-line py-7 md:grid-cols-[.8fr_1.2fr] md:py-9"><h3 class="font-display text-3xl uppercase leading-none tracking-[-.03em] text-bone md:text-4xl">{{ service.title }}</h3><p class="max-w-lg text-sm leading-relaxed text-muted md:text-base">{{ service.body }}</p></article></div></section>

    <section id="process" class="surface-section page-shell grid gap-16 border-b border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36"><p class="eyebrow text-signal-bright">Ablauf</p><div class="grid gap-14 md:grid-cols-[.75fr_1.25fr]"><FlockaColorRevealImage src="/images/portfolio/flash-after-dark.png" alt="Detail aus dem Tattoo-Prozess von Flocka" class="aspect-[.8] w-full object-cover" /><div class="grid content-start"><article v-for="stage in process" :key="stage.number" class="grid grid-cols-[3rem_1fr] gap-5 border-b border-line py-7 first:pt-0"><p class="eyebrow text-muted">{{ stage.number }}</p><div><h3 class="font-display text-4xl uppercase leading-none text-bone"><span class="text-signal-bright">{{ stage.prefix }}</span> {{ stage.title }}</h3><p class="mt-4 max-w-md text-sm leading-relaxed text-muted">{{ stage.body }}</p></div></article></div></div></section>

    <section id="testimonials" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="grid gap-12 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Stimmen</p><div class="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div class="overflow-hidden bg-surface"><Transition name="fade" mode="out-in"><FlockaColorRevealImage :key="currentTestimonial.image" :src="currentTestimonial.image" :alt="`Portrait von ${currentTestimonial.author}`" class="aspect-[.85] w-full object-cover" /></Transition></div><div class="flex flex-col justify-between gap-10"><Transition name="fade" mode="out-in"><blockquote :key="currentTestimonial.quote" class="surface-lead">„{{ currentTestimonial.quote }}“<footer class="eyebrow mt-8 text-muted">{{ currentTestimonial.author }}</footer></blockquote></Transition><div class="flex gap-2"><button class="btn-ghost px-4 py-3" aria-label="Vorherige Stimme" @click="previousTestimonial"><Icon name="lucide:arrow-left" size="16" /></button><button class="btn-ghost px-4 py-3" aria-label="Nächste Stimme" @click="nextTestimonial"><Icon name="lucide:arrow-right" size="16" /></button></div></div></div></div></section>

    <section id="faq" class="surface-section page-shell grid gap-12 border-b border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36"><div><p class="eyebrow text-signal-bright">Fragen</p></div><div><p class="surface-lead mb-16 max-w-2xl">Antworten zu Studio, Motiven und der Anfrage für deinen Termin.</p><div class="border-t border-line"><article v-for="(faq, index) in faqs" :key="faq.question" class="border-b border-line"><button class="flex w-full items-center justify-between gap-8 py-6 text-left text-base text-bone" :aria-expanded="openFaq === index" :aria-controls="`faq-answer-${index}`" @click="toggleFaq(index)"><span>{{ faq.question }}</span><span class="flex size-7 shrink-0 items-center justify-center border border-line text-signal transition-transform duration-300" :class="openFaq === index ? 'rotate-45' : ''"><Icon name="lucide:plus" size="14" /></span></button><div :id="`faq-answer-${index}`" class="grid transition-[grid-template-rows,opacity] duration-300" :class="openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"><p class="min-h-0 max-w-2xl overflow-hidden pb-6 text-sm leading-relaxed text-muted">{{ faq.answer }}</p></div></article></div></div></section>

    <section id="blog" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="mb-16 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Journal</p><div class="flex justify-between gap-8"><p class="surface-lead max-w-2xl">Notizen über Tattoos, visuelle Sprache, den Prozess und die kleinen Entscheidungen hinter einem guten Motiv.</p><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="eyebrow hidden h-fit border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">Alle Artikel <Icon name="lucide:arrow-up-right" size="14" /></a></div></div><div class="grid gap-10 md:grid-cols-3"><a v-for="article in articles" :key="article.title" href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="group"><div class="overflow-hidden bg-surface"><FlockaColorRevealImage :src="article.image" :alt="article.title" class="aspect-[1.2] w-full object-cover group-hover:scale-105" /></div><h3 class="mt-5 text-lg leading-tight text-bone">{{ article.title }}</h3><p class="mt-3 text-sm leading-relaxed text-muted">{{ article.body }}</p></a></div></section>

  </main>

    <section id="selected-works" class="surface-gallery page-shell relative z-5 border-b border-line py-28 md:py-44">
      <div class="mb-14 grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end md:mb-20">
        <p class="eyebrow text-signal-bright">Ausgewählte Arbeiten</p>
      <p class="surface-lead max-w-2xl">Eine bewegte Sammlung aus Motiven, Symbolen und Arbeiten, die ihren Platz auf der Haut finden.</p>
      </div>
      <MotionViewCarousel />
    </section>

    <section id="contact" class="surface-contact page-shell relative z-5 min-h-[553px] border-b border-line py-16 md:py-12"><p class="eyebrow text-signal-bright">Kontakt</p><div class="mt-12 grid gap-14 md:grid-cols-[1.15fr_.85fr] md:items-center"><div class="flex flex-col items-start"><h2 class="max-w-4xl font-display text-[clamp(3.5rem,9vw,8.5rem)] font-black uppercase leading-[.78] tracking-[-.07em] text-bone">Lass uns<br />über dein Tattoo sprechen</h2><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="btn-ghost mt-10 rounded-md border-2 border-bone px-5 py-3 text-base normal-case tracking-normal">Anfrage senden <Icon name="lucide:arrow-up-right" size="18" /></a></div><img src="/images/flocka_logo.png" alt="Flocka Tattoo Logo" class="mx-auto mt-4 w-48 object-contain md:mx-0 md:mt-0 md:w-full md:max-w-[22rem] md:justify-self-end" /></div></section>

  <div class="surface-footer-stage sticky bottom-0 z-1">
    <footer class="surface-footer relative grid min-h-[550px] gap-12 overflow-hidden px-5 pb-32 pt-18 text-black md:grid-cols-[1fr_auto] md:px-[2vw] md:pb-16 md:pt-18"><div><a href="mailto:flockatattoo@proton.me" class="block text-3xl font-semibold tracking-[-.04em] hover:opacity-60 md:text-5xl">flockatattoo@proton.me</a><p class="mt-10 max-w-xs text-lg leading-tight">Lust auf ein Tattoo? Schreib mir. Offen für neue Motive, Ideen und gute Gespräche.</p><div class="mt-10 flex gap-7"><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="text-lg hover:opacity-60">Instagram</a><a href="mailto:flockatattoo@proton.me" class="text-lg hover:opacity-60">Anfrage</a></div></div><div class="grid grid-cols-2 gap-16 text-lg"><div><p class="mb-5 font-semibold">Menü</p><div class="grid gap-3"><a href="#top" class="hover:opacity-60">Start</a><a href="#about" class="hover:opacity-60">Über mich</a><a href="#work" class="hover:opacity-60">Arbeiten</a><a href="#services" class="hover:opacity-60">Leistungen</a><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Kontakt</a></div></div><div><p class="mb-5 font-semibold">Hinweise</p><div class="grid gap-3"><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Datenschutz</a><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Impressum</a></div></div></div><p aria-hidden="true" class="pointer-events-none absolute bottom-[-.18em] left-[2vw] right-[2vw] font-display text-center text-[clamp(7rem,21vw,21rem)] font-black uppercase leading-[.72] tracking-[-.09em]">FLOCKA</p></footer>
  </div>
  </div>
</template>

<style scoped>
.surface-page { overflow-x: clip; background: #f2efe8; }
.surface-home { position: relative; background: transparent; }
.surface-hero { z-index: 2; }
.surface-section { position: relative; z-index: 5; scroll-margin-top: 5rem; background: #000; }
.surface-gallery { background: #000; isolation: isolate; }
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
