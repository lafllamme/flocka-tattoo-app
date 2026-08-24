<script setup lang="ts">
import FlockaColorRevealImage from '../components/flocka/ColorRevealImage.vue'
import MotionViewCarousel from '../components/flocka/MotionViewCarousel.vue'
import FlockaReveal from '../components/flocka/RevealOnScroll.vue'

const work = [
  { title: 'CYBERLISM', description: 'Spitze Formen, organische Linien und ein Zeichen zwischen digitaler Ästhetik und dunkler Symbolik.', scope: 'Cyber Sigilism', detail: 'Schwarz-Rot', image: 'https://i.ibb.co/ZR69H2cv/red-relic.webp', alt: 'Schwarz-rotes Cyber-Sigilism-Tattoo aus dem Portfolio von Flocka Tattoo' },
  { title: 'MINIMALISM', description: 'Ein reduziertes Zeichen aus feinen Linien, bewusst offen gelassen und leicht über die Haut geführt.', scope: 'Fine Line', detail: 'Ornamental', image: 'https://i.ibb.co/ZpBjSyJj/open-skin.webp', alt: 'Ornamentales Fine-Line-Tattoo aus dem Portfolio von Flocka Tattoo' },
  { title: 'LETTERING', description: 'Kräftige Buchstaben, harte Kontraste und ein Schriftzug mit eigener Haltung.', scope: 'Blackletter', detail: 'Schwarz-Rot', image: 'https://i.ibb.co/nqRpJX6w/process.webp', alt: 'Schwarz-rotes Blackletter-Tattoo aus dem Portfolio von Flocka Tattoo' },
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
  { quote: 'Ich war am Anfang total unsicher mit meiner Idee. Flocka hat mir geholfen, daraus etwas Eigenes zu machen, ohne dass es sich irgendwann fremd angefühlt hat.', author: 'Josefine T.', image: 'https://i.ibb.co/gZCPtLVP/archive.webp' },
  { quote: 'Ich hatte nur ein paar Referenzen und wusste selbst noch nicht genau, wo es hingehen soll. Am Ende war das Tattoo viel persönlicher, als ich es mir vorgestellt hatte.', author: 'Cem S.', image: 'https://i.ibb.co/nqRpJX6w/process.webp' },
  { quote: 'Die Session war super entspannt. Ich habe mich direkt wohlgefühlt und bin mit einem Tattoo nach Hause gegangen, das wirklich zu mir passt.', author: 'Luisa W.', image: 'https://i.ibb.co/ZpBjSyJj/open-skin.webp' },
  { quote: 'Ich wollte eigentlich nur ein kleines Motiv und war dann überrascht, wie viel aus der Idee geworden ist. Flocka hat genau die richtige Richtung gefunden.', author: 'Tobi F.', image: 'https://i.ibb.co/ZR69H2cv/red-relic.webp' },
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
const siteUrl = (runtimeConfig.public.siteUrl || requestUrl.origin).replace(/\/$/, '')
const pageTitle = 'Flocka Tattoo Köln · Sascha Schlüter'
const pageDescription = 'Flocka Tattoo von Sascha Schlüter in Köln: individuelle Tattoos, Blackwork, Fine Line, Schwarz-Rot, Farbe, Ornamentik und Flash. Jetzt unverbindlich anfragen.'
const ogImage = 'https://i.imgur.com/vWC2lY8.png'
const logoImage = `${siteUrl}/images/flocka_logo.png`
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
      logo: logoImage,
      email: 'flockatattoo@proton.me',
      sameAs: [instagramUrl],
      areaServed: { '@type': 'City', name: 'Köln' },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '19:00',
      }],
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
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Flocka Tattoo',
      alternateName: 'Flocka Tattoo Köln',
      url: siteUrl,
      inLanguage: 'de-DE',
      publisher: { '@id': `${siteUrl}/#tattoo-parlor` },
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
const testimonialDirection = ref<'next' | 'previous'>('next')
const testimonialTrackOffset = ref(1)
const testimonialTransitionEnabled = ref(true)
const testimonialTransitioning = ref(false)
const openFaq = ref<Set<number>>(new Set())
const testimonialCopyIndex = ref(0)
const currentTestimonial = computed(() => testimonials[testimonialCopyIndex.value]!)
const testimonialVisible = computed(() => {
  const previousIndex = (testimonialIndex.value - 1 + testimonials.length) % testimonials.length
  const nextIndex = (testimonialIndex.value + 1) % testimonials.length

  return [testimonials[previousIndex]!, testimonials[testimonialIndex.value]!, testimonials[nextIndex]!]
})
const testimonialTrackStyle = computed(() => ({
  transform: `translateY(-${testimonialTrackOffset.value * 33.333333}%)`,
  transition: testimonialTransitionEnabled.value ? 'transform 720ms cubic-bezier(.22, 1, .36, 1)' : 'none',
}))

function moveTestimonial(direction: 'next' | 'previous') {
  if (testimonialTransitioning.value)
    return

  testimonialDirection.value = direction
  testimonialCopyIndex.value = direction === 'next'
    ? (testimonialCopyIndex.value + 1) % testimonials.length
    : (testimonialCopyIndex.value - 1 + testimonials.length) % testimonials.length
  testimonialTransitioning.value = true
  testimonialTrackOffset.value = direction === 'next' ? 2 : 0
}

function handleTestimonialTransitionEnd(event: TransitionEvent) {
  if (event.propertyName !== 'transform' || !testimonialTransitioning.value)
    return

  testimonialIndex.value = testimonialDirection.value === 'next'
    ? (testimonialIndex.value + 1) % testimonials.length
    : (testimonialIndex.value - 1 + testimonials.length) % testimonials.length
  testimonialTransitionEnabled.value = false
  testimonialTrackOffset.value = 1

  nextTick(() => {
    requestAnimationFrame(() => {
      testimonialTransitionEnabled.value = true
      testimonialTransitioning.value = false
    })
  })
}

function toggleFaq(index: number) {
  const nextOpenFaq = new Set(openFaq.value)

  if (nextOpenFaq.has(index))
    nextOpenFaq.delete(index)
  else
    nextOpenFaq.add(index)

  openFaq.value = nextOpenFaq
}
</script>

<template>
  <div class="surface-page min-h-screen relative">
    <FlockaSiteHeader />
    <main class="surface-home text-bone flex flex-col min-h-screen relative">
      <FlockaNoiseLayer />
      <div class="surface-hero-stack">
        <FlockaHeroSection />

        <section id="about" class="surface-card surface-section page-shell px-5 py-16 border-0 border-t-2 border-t-bone md:px-[2vw] md:py-24">
          <FlockaReveal direction="left" class="section-motion-label">
            <div class="section-rule">
              <p class="section-label text-signal-bright">
                Über mich
              </p><span class="section-rule__line" />
            </div>
          </FlockaReveal>
          <div class="about-layout mt-16 gap-16 grid md:mt-24 md:gap-x-24 md:gap-y-24 md:grid-cols-2">
            <FlockaReveal direction="right" class="md:col-start-2" :distance="96">
              <p class="surface-lead max-w-3xl">
                Ich bin Sascha, 31, Vollzeit-Tätowierer aus Köln. Als Newcomer im Quereinstieg entwickle ich gerade meine eigene Handschrift – mit klaren Linien, starken Symbolen und Farbe, wenn sie passt.
              </p>
            </FlockaReveal>
            <FlockaReveal direction="left" class="md:col-start-1 md:row-start-2" :delay="90">
              <div class="text-sm text-muted leading-relaxed space-y-8 md:text-base">
                <p>Ich lerne mit jedem Stück dazu und probiere mich bewusst durch unterschiedliche Richtungen. Von feinen Symbolen bis zu kräftigem Blackwork, von Schwarz-Rot bis Farbe.</p><ul class="text-bone pt-5 border-t border-line">
                  <li class="text-muted py-3 border-b border-line">
                    Unabhängige Praxis
                  </li><li class="text-muted py-3 border-b border-line">
                    Blackwork &amp; Fine Line
                  </li><li class="text-muted py-3 border-b border-line">
                    Schwarz-Rot &amp; Farbe
                  </li><li class="text-muted py-3">
                    Flash-Archiv
                  </li>
                </ul>
              </div>
            </FlockaReveal>
            <FlockaReveal direction="right" class="md:col-start-2 md:row-start-2" :delay="140">
              <FlockaColorRevealImage src="https://i.ibb.co/CsmC686z/testimonial.webp" alt="Tattoo-Arbeit aus dem Portfolio von Flocka" class="border border-bone w-full aspect-[1.25] object-cover" />
            </FlockaReveal>
          </div>
        </section>
      </div>

      <section id="work" class="surface-section page-shell px-5 py-24 border-b border-line md:px-[2vw] md:py-24">
        <FlockaReveal direction="left" class="section-motion-label">
          <div class="section-rule">
            <p class="section-label text-signal-bright">
              Arbeiten
            </p><span class="section-rule__line" />
          </div>
        </FlockaReveal>
        <div class="mt-12 gap-12 grid md:mt-24 md:gap-24">
          <article v-for="(project, index) in work" :key="project.title" class="work-card gap-12 grid md:gap-16 md:grid-cols-2 md:min-h-[39rem] md:items-center">
            <FlockaReveal :direction="index % 2 === 0 ? 'left' : 'right'" :delay="index * 90" class="flex flex-col h-full justify-center">
              <div>
                <h3 class="text-5xl text-bone leading-[.85] tracking-[-.05em] font-display max-w-xl uppercase md:text-7xl">
                  {{ project.title }}
                </h3><div class="mt-10 max-w-md">
                  <p class="text-sm text-muted leading-relaxed md:text-base">
                    {{ project.description }}
                  </p><div class="text-sm text-muted mt-8 gap-y-2 grid grid-cols-2">
                    <span>Art:</span><span class="text-bone text-right">{{ project.scope }}</span><span>Richtung:</span><span class="text-bone text-right">{{ project.detail }}</span>
                  </div><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="text-base text-bone tracking-normal font-sans mt-14 px-6 py-4 border-2 border-bone inline-flex gap-4 normal-case transition-colors items-center hover:text-black hover:bg-bone">Motiv ansehen <Icon name="lucide:arrow-up-right" size="17" /></a>
                </div>
              </div>
            </FlockaReveal>
            <FlockaReveal :direction="index % 2 === 0 ? 'right' : 'left'" :delay="index * 90 + 60">
              <a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="group border border-bone block overflow-hidden" :aria-label="`${project.title} ansehen`"><FlockaColorRevealImage :src="project.image" :alt="project.alt" class="w-full aspect-[1.37] transition-transform duration-700 object-cover group-hover:scale-105" /></a>
            </FlockaReveal>
          </article>
        </div>
      </section>

      <section id="services" class="surface-section page-shell px-5 py-24 border-b border-line md:px-[2vw] md:py-24">
        <FlockaReveal direction="left" class="section-motion-label">
          <div class="section-rule">
            <p class="section-label text-bone">
              Services
            </p><span class="section-rule__line" />
          </div>
        </FlockaReveal><div class="mt-16 grid md:mt-24 md:gap-6 md:grid-cols-[1.35fr_.65fr]">
          <div class="md:col-start-2">
            <FlockaReveal direction="right" :distance="96">
              <p class="surface-lead max-w-xl">
                Tattoos mit klarer Richtung, ruhiger Hand und genug Raum für eine gute Idee.
              </p>
            </FlockaReveal><FlockaReveal direction="right" :delay="80">
              <a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="services-cta text-bone tracking-[.04em] font-semibold mt-8 px-5 py-3 border-2 border-bone inline-flex gap-4 h-fit w-fit normal-case transition-colors items-center hover:text-black hover:bg-bone">Meine Leistungen <Icon name="lucide:arrow-down-right" size="18" /></a>
            </FlockaReveal>
          </div>
        </div><div class="services-list mt-16 border-t border-line md:mt-24">
          <FlockaReveal v-for="(service, index) in services" :key="service.title" direction="up" :delay="index * 80">
            <article class="service-row py-6 border-b border-line gap-6 grid transition-colors hover:text-black md:py-7 hover:bg-white md:grid-cols-[1.35fr_.65fr] md:items-center">
              <h3 class="text-3xl text-bone leading-none tracking-[-.045em] font-black font-display uppercase md:text-5xl">
                {{ service.title }}
              </h3><p class="text-sm text-muted leading-relaxed max-w-lg transition-colors md:text-base">
                {{ service.body }}
              </p>
            </article>
          </FlockaReveal>
        </div>
      </section>

      <section id="process" class="surface-section page-shell px-5 py-24 border-b border-line md:px-[2vw] md:py-24">
        <FlockaReveal direction="left" class="section-motion-label">
          <div class="section-rule">
            <p class="section-label text-signal-bright">
              Ablauf
            </p><span class="section-rule__line" />
          </div>
        </FlockaReveal><div class="mt-16 gap-14 grid md:mt-24 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <FlockaReveal direction="right" :distance="96" class="order-2 md:order-1">
            <FlockaColorRevealImage src="https://i.ibb.co/fY15ZQvQ/flash-after-dark.webp" alt="Detail aus dem Tattoo-Prozess von Flocka" class="border border-bone w-full aspect-[1.3] object-cover md:aspect-[1.25]" />
          </FlockaReveal><div class="process-list grid content-start order-1 md:order-2">
            <FlockaReveal v-for="(stage, index) in process" :key="stage.number" direction="up" :delay="index * 80">
              <article class="process-step py-7 gap-5 grid grid-cols-[3rem_1fr] md:py-8 first:pt-0 md:gap-8 md:grid-cols-[4rem_1fr]">
                <p class="process-step__number eyebrow text-muted md:pt-2">
                  {{ stage.number }}
                </p><div>
                  <h3 class="process-step__title text-5xl text-bone leading-none tracking-[-.05em] font-black font-display uppercase md:text-7xl">
                    {{ stage.title }}
                  </h3><p class="process-step__description text-sm text-muted leading-[1.35] mt-6 max-w-xl md:text-xl">
                    {{ stage.body }}
                  </p>
                </div>
              </article>
            </FlockaReveal>
          </div>
        </div>
      </section>

      <section id="testimonials" class="surface-section page-shell px-5 py-24 border-b border-line md:px-[2vw] md:py-24">
        <FlockaReveal direction="left" class="section-motion-label">
          <div class="section-rule">
            <p class="section-label text-signal-bright">
              Reviews
            </p><span class="section-rule__line" />
          </div>
        </FlockaReveal>
        <div class="mt-16 gap-12 grid min-w-0 md:mt-24 lg:gap-24 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <FlockaReveal direction="left" class="flex flex-col gap-8 min-w-0 lg:items-start">
            <div class="testimonial-media-viewport border border-bone w-full aspect-[.87] relative overflow-hidden lg:w-[min(100%,34rem)]">
              <div class="testimonial-track flex flex-col h-full" :style="testimonialTrackStyle" @transitionend="handleTestimonialTransitionEnd">
                <div v-for="testimonial in testimonialVisible" :key="`image-${testimonial.author}`" class="testimonial-slide h-full">
                  <FlockaColorRevealImage :src="testimonial.image" :alt="`Tattoo-Arbeit aus dem Portfolio von Flocka für ${testimonial.author}`" class="size-full object-cover" />
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <button class="testimonial-arrow" :disabled="testimonialTransitioning" aria-label="Vorheriges Review" @click="moveTestimonial('previous')">
                <Icon name="lucide:arrow-left" size="30" />
              </button>
              <button class="testimonial-arrow" :disabled="testimonialTransitioning" aria-label="Nächstes Review" @click="moveTestimonial('next')">
                <Icon name="lucide:arrow-right" size="30" />
              </button>
            </div>
          </FlockaReveal>
          <FlockaReveal direction="up" :distance="80" class="flex flex-col min-w-0 justify-center">
            <svg class="testimonial-quote-mark mb-10" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 9.5 C 8 10.052 7.552 10.5 7 10.5 L 4.5 10.5 C 4.224 10.5 4 10.724 4 11 L 4 12 C 4 13.105 4.895 14 6 14 L 7 14 C 7.552 14 8 14.448 8 15 L 8 17 C 8 17.552 7.552 18 7 18 L 6 18 C 2.686 18 0 15.314 0 12 L 0 1 C 0 0.448 0.448 0 1 0 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(14 3)" />
              <path d="M 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 9.5 C 8 10.052 7.552 10.5 7 10.5 L 4.5 10.5 C 4.224 10.5 4 10.724 4 11 L 4 12 C 4 13.105 4.895 14 6 14 L 7 14 C 7.552 14 8 14.448 8 15 L 8 17 C 8 17.552 7.552 18 7 18 L 6 18 C 2.686 18 0 15.314 0 12 L 0 1 C 0 0.448 0.448 0 1 0 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)" />
            </svg>
            <div class="testimonial-copy-viewport max-w-full min-w-0 relative overflow-hidden" aria-live="polite">
              <blockquote class="text-[clamp(2rem,3.25vw,4rem)] text-bone leading-[.98] tracking-[-.045em] font-display font-semibold flex flex-col max-w-full min-w-0 break-words justify-center">
                <span>{{ currentTestimonial.quote }}</span>
                <footer class="eyebrow text-muted mt-10">
                  {{ currentTestimonial.author }}
                </footer>
              </blockquote>
            </div>
          </FlockaReveal>
        </div>
      </section>

      <section id="faq" class="surface-section page-shell px-5 py-24 border-b border-line md:px-[2vw] md:py-24">
        <FlockaReveal direction="left" class="section-motion-label">
          <div class="section-rule">
            <p class="section-label text-signal-bright">
              Fragen
            </p><span class="section-rule__line" />
          </div>
        </FlockaReveal><FlockaReveal direction="right" :distance="96">
          <p class="surface-lead ml-auto mt-16 max-w-2xl md:mt-24">
            Antworten zu Studio, Motiven und der Anfrage für deinen Termin.
          </p>
        </FlockaReveal><FlockaReveal direction="left" :delay="100">
          <div class="faq-list mt-16 border-t border-line md:mt-24">
            <article v-for="(faq, index) in faqs" :key="faq.question" class="faq-item border-b border-line" :class="{ 'faq-item--open': openFaq.has(index) }">
              <button class="faq-trigger text-base text-bone text-left flex gap-8 w-full items-center justify-between md:text-lg" :aria-expanded="openFaq.has(index)" :aria-controls="`faq-answer-${index}`" @click="toggleFaq(index)">
                <span class="faq-question">{{ faq.question }}</span><span class="faq-icon text-bone flex shrink-0 size-8 transition-transform duration-300 items-center justify-center" :class="{ 'rotate-45': openFaq.has(index) }" aria-hidden="true"><Icon name="lucide:plus" size="21" /></span>
              </button><div :id="`faq-answer-${index}`" class="faq-answer grid transition-[grid-template-rows,opacity] duration-300" :class="openFaq.has(index) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                <p class="text-sm leading-relaxed pb-6 max-w-3xl min-h-0 overflow-hidden md:text-base">
                  {{ faq.answer }}
                </p>
              </div>
            </article>
          </div>
        </FlockaReveal>
      </section>

      <section id="blog" class="surface-section page-shell px-5 py-24 border-b border-line md:px-[2vw] md:py-24">
        <FlockaReveal direction="left" class="section-motion-label">
          <div class="section-rule">
            <p class="section-label text-signal-bright">
              Journal
            </p><span class="section-rule__line" />
          </div>
        </FlockaReveal><div class="mt-16 gap-8 grid md:mt-24 md:gap-6 md:grid-cols-3">
          <FlockaReveal v-for="(article, index) in articles" :key="article.title" direction="up" :delay="index * 90">
            <a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="journal-card group p-3 border border-bone block transition-colors hover:text-black hover:bg-bone"><div class="overflow-hidden"><FlockaColorRevealImage :src="article.image" :alt="article.title" allow-multiple-on-desktop class="w-full aspect-[1.2] transition-transform duration-700 object-cover group-hover:scale-105" /></div><div class="p-3 pb-4"><h3 class="text-lg text-bone leading-tight transition-colors group-hover:text-black">{{ article.title }}</h3><p class="text-sm text-muted leading-relaxed mt-3 transition-colors group-hover:text-black">{{ article.body }}</p></div></a>
          </FlockaReveal>
        </div>
      </section>
    </main>

    <section id="selected-works" class="surface-gallery page-shell py-28 border-b border-line relative z-5 md:py-44">
      <div class="mb-14 gap-8 grid md:mb-20 md:grid-cols-[.8fr_1.2fr] md:items-end">
        <FlockaReveal direction="left">
          <p class="section-label text-signal-bright">
            Ausgewählte Arbeiten
          </p>
        </FlockaReveal>
        <FlockaReveal direction="right" :distance="96">
          <p class="surface-lead max-w-2xl">
            Eine bewegte Sammlung aus Motiven, Symbolen und Arbeiten, die ihren Platz auf der Haut finden.
          </p>
        </FlockaReveal>
      </div>
      <FlockaReveal direction="up" :distance="80">
        <MotionViewCarousel />
      </FlockaReveal>
    </section>

    <section id="contact" class="surface-contact page-shell py-16 border-b border-line min-h-[553px] relative z-5 md:py-12">
      <FlockaReveal direction="left">
        <p class="section-label text-signal-bright">
          Kontakt
        </p>
      </FlockaReveal><div class="mt-12 gap-14 grid md:grid-cols-[1.15fr_.85fr] md:items-center">
        <FlockaReveal direction="left" class="flex flex-col items-start">
          <div>
            <h2 class="text-[clamp(3.5rem,9vw,8.5rem)] text-bone leading-[.78] tracking-[-.07em] font-black font-display max-w-4xl uppercase">
              Lass uns<br>über dein Tattoo sprechen
            </h2><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="btn-ghost text-base tracking-normal mt-10 px-5 py-3 border-2 border-bone rounded-md normal-case">Anfrage senden <Icon name="lucide:arrow-up-right" size="18" /></a>
          </div>
        </FlockaReveal><FlockaReveal direction="right" :distance="96">
          <img src="https://i.ibb.co/HLDFtYk8/flocka-logo.webp" alt="Flocka Tattoo Logo" class="mx-auto mt-4 w-48 object-contain md:mx-0 md:mt-0 md:max-w-[22rem] md:w-full md:justify-self-end">
        </FlockaReveal>
      </div>
    </section>

    <div class="surface-footer-stage bottom-0 sticky z-1">
      <footer class="surface-footer text-black px-5 pb-32 pt-18 gap-12 grid min-h-[550px] relative overflow-hidden md:px-[2vw] md:pb-16 md:pt-18 md:grid-cols-[1fr_auto]">
        <div>
          <a href="mailto:flockatattoo@proton.me" class="text-3xl tracking-[-.04em] font-semibold block md:text-5xl hover:opacity-60">flockatattoo@proton.me</a><p class="text-lg leading-tight mt-10 max-w-xs">
            Lust auf ein Tattoo? Schreib mir. Offen für neue Motive, Ideen und gute Gespräche.
          </p><div class="mt-10 flex gap-7">
            <a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="text-lg hover:opacity-60">Instagram</a><a href="mailto:flockatattoo@proton.me" class="text-lg hover:opacity-60">Anfrage</a>
          </div>
        </div><div class="text-lg gap-16 grid grid-cols-2">
          <div>
            <p class="font-semibold mb-5">
              Menü
            </p><div class="gap-3 grid">
              <a href="#top" class="hover:opacity-60">Start</a><a href="#about" class="hover:opacity-60">Über mich</a><a href="#work" class="hover:opacity-60">Arbeiten</a><a href="#services" class="hover:opacity-60">Leistungen</a><a href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer" class="hover:opacity-60">Kontakt</a>
            </div>
          </div><div>
            <p class="font-semibold mb-5">
              Hinweise
            </p><div class="gap-3 grid">
              <NuxtLink to="/datenschutz" class="hover:opacity-60">
                Datenschutz
              </NuxtLink><NuxtLink to="/impressum" class="hover:opacity-60">
                Impressum
              </NuxtLink>
            </div>
          </div>
        </div><p aria-hidden="true" class="text-[clamp(7rem,21vw,21rem)] leading-[.72] tracking-[-.09em] font-black font-display text-center pointer-events-none uppercase bottom-[-.18em] left-[2vw] right-[2vw] absolute">
          FLOCKA
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.surface-page { background: #f2efe8; }
.surface-home { position: relative; z-index: 2; background: #000; }
.surface-hero-stack { position: relative; isolation: isolate; overflow-anchor: none; }
.surface-hero { z-index: 2; }
.surface-section { position: relative; z-index: 5; overflow-x: clip; scroll-margin-top: 5rem; background: #000; }
.surface-gallery { overflow-x: clip; background: #000; isolation: isolate; }
.section-rule { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 1.25rem; }
.section-label { margin: 0; color: var(--flocka-signal-bright, #e33434); font-family: Inter, Arial, sans-serif; font-size: clamp(.72rem, .8vw, .9rem); font-weight: 600; letter-spacing: .12em; line-height: 1; text-transform: none; white-space: nowrap; }
.section-rule__line { height: 2px; background: #fff; }
.section-motion-label { display: block; }
.surface-lead { font-size: clamp(1.35rem, 2.25vw, 2.25rem); line-height: 1.08; letter-spacing: -.035em; color: var(--flocka-bone, #f2efe8); }
.surface-card {
  border-radius: 48px 48px 0 0;
  overflow-anchor: none;
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.surface-contact { overflow-x: clip; border-radius: 0 0 48px 48px; background: #000; }
.surface-footer { background: #f2efe8; }
.surface-footer-stage { min-height: 550px; }
.testimonial-track { width: 100%; height: 300%; will-change: transform; }
.testimonial-slide { flex: 0 0 33.333333%; width: 100%; min-width: 0; min-height: 0; }
.testimonial-copy-viewport { min-height: 18rem; }
.testimonial-quote-mark { display: block; width: clamp(4.75rem, 7vw, 7rem); height: clamp(4rem, 7vw, 6rem); overflow: visible; color: var(--flocka-bone, #f2efe8); }
.testimonial-arrow { display: inline-flex; width: 2.75rem; height: 2.75rem; align-items: center; justify-content: center; border: 2px solid var(--flocka-bone, #f2efe8); color: var(--flocka-bone, #f2efe8); transition: background-color 220ms ease, color 220ms ease, opacity 220ms ease; }
.testimonial-arrow :deep(svg) { width: 30px; height: 30px; stroke-width: 3.2; }
.testimonial-arrow:hover:not(:disabled) { background: var(--flocka-bone, #f2efe8); color: #000; }
.testimonial-arrow:disabled { cursor: wait; opacity: .5; }
@media (prefers-reduced-motion: reduce) {
}
.faq-list { border-color: var(--flocka-bone, #f2efe8); }
.faq-item { border-color: var(--flocka-bone, #f2efe8); padding-inline: 0; transition: background-color 320ms cubic-bezier(.23, 1, .32, 1), color 320ms cubic-bezier(.23, 1, .32, 1), padding-inline 320ms cubic-bezier(.23, 1, .32, 1); }
.faq-trigger { min-height: 5.25rem; padding-block: 1.25rem; font-weight: 600; color: var(--flocka-bone, #f2efe8); transition: color 240ms ease; }
.faq-question, .faq-icon { transition: transform 360ms cubic-bezier(.23, 1, .32, 1), color 240ms ease; }
.faq-item:not(.faq-item--open):hover .faq-question { transform: translateX(.5rem); }
.faq-item:not(.faq-item--open):hover .faq-icon { transform: translateX(-.5rem); }
.faq-item--open { background: var(--flocka-bone, #f2efe8); color: #000; padding-inline: clamp(1rem, 2vw, 2rem); }
.faq-item--open .faq-icon { color: #000; }
.faq-item--open .faq-trigger { color: #000; }
.faq-item--open p { color: #000; }
.faq-answer { overflow: hidden; }
.faq-answer p { padding-bottom: 1.5rem; }
@media (hover: hover) {
  #services article:hover h3,
  #services article:hover p { color: #000; }
}
.fade-enter-active, .fade-leave-active { transition: opacity 360ms ease, transform 360ms ease; }
.fade-enter-from { opacity: 0; transform: translateX(24px); }
.fade-leave-to { opacity: 0; transform: translateX(-24px); }
@media (prefers-reduced-motion: reduce) {
  .fade-enter-active, .fade-leave-active { transition-duration: 1ms; }
}
@media (max-width: 767px) {
  .surface-card { border-radius: 36px 36px 0 0; }
  .section-rule { gap: .75rem; }
}
</style>
