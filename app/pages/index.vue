<script setup lang="ts">
const work = [
  { title: 'RED RELIC', description: 'A custom blackwork piece built around old symbols, red ink accents and a strong vertical silhouette.', scope: 'Custom piece', detail: 'Blackwork', image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=1600&q=88' },
  { title: 'OPEN SKIN', description: 'An ornamental study developed from fine line structure, negative space and slow detail.', scope: 'Ornamental', detail: 'Fine line', image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1600&q=88' },
  { title: 'FLASH AFTER DARK', description: 'A direct flash series for people who want a clear image, a sharp mark and no second guessing.', scope: 'Flash series', detail: 'Walk-in ready', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1600&q=88' },
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
  { quote: 'The whole process felt focused and personal. The idea got sharper with every conversation and the tattoo came out stronger than I imagined.', author: 'Mara K.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85' },
  { quote: 'Flocka understood the reference immediately and turned it into something that feels like it was always meant to be on me.', author: 'Jonas R.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85' },
  { quote: 'Calm studio, clear direction, beautiful linework. I came in for one small flash and already know what the next piece will be.', author: 'Lea M.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85' },
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
  { title: 'A tattoo starts before the stencil', body: 'Why the first conversation matters as much as the final line.', image: 'https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Blackwork as visual language', body: 'On contrast, weight and making a mark that stays readable.', image: 'https://images.unsplash.com/photo-1590246814883-57c511e9f298?auto=format&fit=crop&w=1200&q=85' },
  { title: 'The quiet discipline of aftercare', body: 'A short guide to giving fresh work the time it needs to settle.', image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=1200&q=85' },
]

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
  <main class="surface-home overflow-hidden text-bone">
    <FlockaNoiseLayer />
    <FlockaSiteHeader />
    <FlockaHeroSection />

    <section id="about" class="surface-section page-shell grid gap-12 border-b border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36">
      <p class="eyebrow text-signal-bright">About</p>
      <div class="grid gap-20 md:grid-cols-[1.05fr_.95fr]"><p class="surface-lead">Flocka is an independent tattoo practice focused on shaping lasting marks through conversation, structure and a strong visual point of view.</p><div class="flex flex-col justify-between gap-10"><div class="space-y-7 text-sm leading-relaxed text-muted md:text-base"><p>Every piece starts with a reason. We take the time to understand the image, the placement and the energy it should carry before a line is put on skin.</p><ul class="border-t border-line pt-5 text-bone"><li class="border-b border-line py-3 text-muted">Independent practice</li><li class="border-b border-line py-3 text-muted">Custom blackwork</li><li class="border-b border-line py-3 text-muted">Ornamental direction</li><li class="py-3 text-muted">Flash archive</li></ul></div><a href="#contact" class="eyebrow w-fit border-b border-line pb-2 text-bone transition-colors hover:border-signal hover:text-signal-bright">About the studio <Icon name="lucide:arrow-up-right" size="14" /></a></div></div>
    </section>

    <section id="work" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="mb-20 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Work</p><div class="flex justify-between gap-8"><p class="surface-lead max-w-2xl">A selection of tattoos exploring weight, contrast, symbol and the relationship between image and body.</p><a href="#contact" class="eyebrow hidden h-fit whitespace-nowrap border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">View all work <Icon name="lucide:arrow-up-right" size="14" /></a></div></div><div class="grid gap-24"><article v-for="(project, index) in work" :key="project.title" class="grid gap-7 md:grid-cols-[.8fr_1.2fr] md:gap-12"><div class="md:sticky md:top-28 md:self-start"><p class="eyebrow text-muted">0{{ index + 1 }} / 0{{ work.length }}</p><h3 class="mt-6 font-display text-5xl uppercase leading-[.83] tracking-[-.05em] text-bone md:text-7xl">{{ project.title }}</h3><p class="mt-7 max-w-sm text-sm leading-relaxed text-muted">{{ project.description }}</p><div class="mt-8 grid max-w-sm grid-cols-2 border-t border-line pt-3 text-[10px] font-mono uppercase tracking-[.16em] text-muted"><span>Scope:</span><span class="text-right text-bone">{{ project.scope }}</span><span class="mt-2">Details:</span><span class="mt-2 text-right text-bone">{{ project.detail }}</span></div><a href="#contact" class="eyebrow mt-9 inline-flex border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright">View project <Icon name="lucide:arrow-up-right" size="14" /></a></div><a href="#contact" class="group block overflow-hidden bg-surface" :aria-label="`View ${project.title}`"><img :src="project.image" :alt="project.title" class="aspect-[1.2] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"></a></article></div></section>

    <section id="services" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="mb-20 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Services</p><div class="flex justify-between gap-8"><p class="surface-lead max-w-2xl">A focused tattoo practice for projects that need a clear image, a steady hand and a little more intention.</p><a href="#contact" class="eyebrow hidden h-fit border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">View services <Icon name="lucide:arrow-up-right" size="14" /></a></div></div><div class="border-t border-line"><article v-for="service in services" :key="service.title" class="grid gap-4 border-b border-line py-7 md:grid-cols-[.8fr_1.2fr] md:py-9"><h3 class="font-display text-3xl uppercase leading-none tracking-[-.03em] text-bone md:text-4xl">{{ service.title }}</h3><p class="max-w-lg text-sm leading-relaxed text-muted md:text-base">{{ service.body }}</p></article></div></section>

    <section id="process" class="surface-section page-shell grid gap-16 border-b border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36"><p class="eyebrow text-signal-bright">Process</p><div class="grid gap-14 md:grid-cols-[.75fr_1.25fr]"><img src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=1000&q=85" alt="Close-up detail of a tattoo artist working with a tattoo machine" class="aspect-[.8] w-full object-cover grayscale"><div class="grid content-start"><article v-for="stage in process" :key="stage.number" class="grid grid-cols-[3rem_1fr] gap-5 border-b border-line py-7 first:pt-0"><p class="eyebrow text-muted">{{ stage.number }}</p><div><h3 class="font-display text-4xl uppercase leading-none text-bone">{{ stage.title }}</h3><p class="mt-4 max-w-md text-sm leading-relaxed text-muted">{{ stage.body }}</p></div></article></div></div></section>

    <section id="testimonials" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="grid gap-12 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Testimonials</p><div class="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div class="overflow-hidden bg-surface"><Transition name="fade" mode="out-in"><img :key="currentTestimonial.image" :src="currentTestimonial.image" :alt="`Portrait of ${currentTestimonial.author}`" class="aspect-[.85] w-full object-cover grayscale"></Transition></div><div class="flex flex-col justify-between gap-10"><Transition name="fade" mode="out-in"><blockquote :key="currentTestimonial.quote" class="surface-lead">“{{ currentTestimonial.quote }}”<footer class="eyebrow mt-8 text-muted">{{ currentTestimonial.author }}</footer></blockquote></Transition><div class="flex gap-2"><button class="btn-ghost px-4 py-3" aria-label="Previous testimonial" @click="previousTestimonial"><Icon name="lucide:arrow-left" size="16" /></button><button class="btn-ghost px-4 py-3" aria-label="Next testimonial" @click="nextTestimonial"><Icon name="lucide:arrow-right" size="16" /></button></div></div></div></div></section>

    <section id="faq" class="surface-section page-shell grid gap-12 border-b border-line py-24 md:grid-cols-[.8fr_1.2fr] md:py-36"><div><p class="eyebrow text-signal-bright">FAQ</p></div><div><p class="surface-lead mb-16 max-w-2xl">Answers to common questions about the studio, the work and booking a session.</p><div class="border-t border-line"><article v-for="(faq, index) in faqs" :key="faq.question" class="border-b border-line"><button class="flex w-full items-center justify-between gap-8 py-6 text-left text-base text-bone" :aria-expanded="openFaq === index" :aria-controls="`faq-answer-${index}`" @click="toggleFaq(index)"><span>{{ faq.question }}</span><span class="flex size-7 shrink-0 items-center justify-center border border-line text-signal transition-transform duration-300" :class="openFaq === index ? 'rotate-45' : ''"><Icon name="lucide:plus" size="14" /></span></button><div :id="`faq-answer-${index}`" class="grid transition-[grid-template-rows,opacity] duration-300" :class="openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"><p class="min-h-0 max-w-2xl overflow-hidden pb-6 text-sm leading-relaxed text-muted">{{ faq.answer }}</p></div></article></div></div></section>

    <section id="blog" class="surface-section page-shell border-b border-line py-24 md:py-36"><div class="mb-16 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p class="eyebrow text-signal-bright">Journal</p><div class="flex justify-between gap-8"><p class="surface-lead max-w-2xl">Short notes on tattoos, visual language, process and the quiet decisions behind a lasting mark.</p><a href="#contact" class="eyebrow hidden h-fit border-b border-line pb-2 text-bone hover:border-signal hover:text-signal-bright md:block">View all articles <Icon name="lucide:arrow-up-right" size="14" /></a></div></div><div class="grid gap-10 md:grid-cols-3"><a v-for="article in articles" :key="article.title" href="#contact" class="group"><div class="overflow-hidden bg-surface"><img :src="article.image" :alt="article.title" class="aspect-[1.2] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"></div><h3 class="mt-5 text-lg leading-tight text-bone">{{ article.title }}</h3><p class="mt-3 text-sm leading-relaxed text-muted">{{ article.body }}</p></a></div></section>

    <section id="contact" class="surface-contact page-shell relative z-10 min-h-[553px] border-b border-line py-24 md:py-36"><p class="eyebrow text-signal-bright">Contact</p><div class="mt-16 flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between"><h2 class="max-w-4xl font-display text-[clamp(3.5rem,9vw,8.5rem)] uppercase leading-[.78] tracking-[-.07em] text-bone">Let's talk<br>about your piece</h2><a href="mailto:hello@flocka.tattoo" class="btn-primary shrink-0">Get in touch <Icon name="lucide:arrow-up-right" size="16" /></a></div></section>

    <footer class="surface-footer relative z-0 -mt-24 grid min-h-[550px] gap-12 px-5 pb-12 pt-36 text-black md:grid-cols-[1fr_auto] md:px-[2vw] md:pb-16 md:pt-40"><div><a href="mailto:hello@flocka.tattoo" class="block text-3xl font-semibold tracking-[-.04em] hover:opacity-60 md:text-5xl">hello@flocka.tattoo</a><p class="mt-10 max-w-xs text-lg leading-tight">Resonates? Let’s talk. Open to custom pieces, new ideas and lasting collaborations.</p><div class="mt-10 flex gap-7"><a href="#contact" class="text-lg hover:opacity-60">Instagram</a><a href="#contact" class="text-lg hover:opacity-60">Booking</a></div></div><div class="grid grid-cols-2 gap-16 text-lg"><div><p class="mb-5 font-semibold">Navigation</p><div class="grid gap-3"><a href="#top" class="hover:opacity-60">Home</a><a href="#about" class="hover:opacity-60">About</a><a href="#work" class="hover:opacity-60">Work</a><a href="#services" class="hover:opacity-60">Services</a><a href="#blog" class="hover:opacity-60">Blog</a><a href="#contact" class="hover:opacity-60">Contact</a></div></div><div><p class="mb-5 font-semibold">Legal</p><div class="grid gap-3"><a href="#contact" class="hover:opacity-60">Privacy Policy</a><a href="#contact" class="hover:opacity-60">Terms &amp; Conditions</a></div></div></div></footer>
  </main>
</template>

<style scoped>
.surface-home { background: #f2efe8; }
.surface-section { scroll-margin-top: 5rem; background: #000; }
.surface-lead { font-size: clamp(1.35rem, 2.25vw, 2.25rem); line-height: 1.08; letter-spacing: -.035em; color: var(--flocka-bone, #f2efe8); }
.surface-contact { border-radius: 0 0 3rem 3rem; background: #000; }
.surface-footer { background: #f2efe8; }
.fade-enter-active, .fade-leave-active { transition: opacity 360ms ease, transform 360ms ease; }
.fade-enter-from { opacity: 0; transform: translateX(24px); }
.fade-leave-to { opacity: 0; transform: translateX(-24px); }
@media (prefers-reduced-motion: reduce) { .fade-enter-active, .fade-leave-active { transition-duration: 1ms; } }
</style>
