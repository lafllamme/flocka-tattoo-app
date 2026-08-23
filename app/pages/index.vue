<script setup lang="ts">
const slides = [
  { title: 'Blackwork raven', style: 'Blackwork · 5h session', image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Sacred geometry', style: 'Ornamental · 3h session', image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Red flash study', style: 'Flash · 90 min session', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1400&q=85' },
]
const { viewport, index, next, previous, goTo } = useCarousel(slides.length)
const menuOpen = ref(false)
const menuItems = ['Work', 'Styles', 'Process', 'About', 'Book']
</script>

<template>
  <main class="bg-ink overflow-hidden">
    <header class="page-shell py-5 border-b border-line flex items-center justify-between relative z-20">
      <a href="#top" aria-label="Flocka Tattoo home" class="w-42 block md:w-52">
        <img src="/images/flocka-tattoo-logo-header.png" alt="Flocka Tattoo" class="h-auto w-full object-contain">
      </a>
      <nav class="gap-7 hidden md:flex" aria-label="Main navigation">
        <a v-for="item in menuItems" :key="item" :href="`#${item.toLowerCase()}`" class="eyebrow text-bone transition hover:text-signal-bright">{{ item }}</a>
      </nav>
      <button class="text-bone md:hidden" :aria-expanded="menuOpen" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
        <Icon :name="menuOpen ? 'lucide:x' : 'lucide:menu'" size="22" />
      </button>
      <div v-if="menuOpen" class="p-5 surface-panel gap-4 grid left-5 right-5 top-22 absolute md:hidden">
        <a v-for="item in menuItems" :key="item" :href="`#${item.toLowerCase()}`" class="eyebrow text-bone" @click="menuOpen = false">{{ item }}</a>
      </div>
    </header>

    <section id="top" class="page-shell pb-16 pt-24 gap-10 grid min-h-[78svh] items-end lg:pb-24 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="eyebrow text-signal-bright mb-6">
          Custom tattoo artist · Berlin
        </p>
        <h1 class="display-xl max-w-4xl">
          Ink<br><span class="text-signal">with</span><br>intention.
        </h1>
        <p class="text-lg text-muted leading-relaxed mt-8 max-w-md">
          Old-school soul, heavy blackwork and custom pieces made to belong only to you.
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <a class="btn-primary" href="#book">Book a session <Icon name="lucide:arrow-up-right" size="16" /></a>
          <a class="btn-ghost" href="#work">View the work</a>
        </div>
      </div>
      <div class="flex justify-center relative lg:justify-end">
        <img src="/images/flocka-tattoo-logo-clean.png" alt="Flocka Tattoo circular emblem" class="opacity-90 w-[min(78vw,30rem)] mix-blend-screen">
        <p class="eyebrow text-bone text-right max-w-28 bottom-0 left-0 absolute lg:left-auto lg:right-0">
          Made in the dark. Kept forever.
        </p>
      </div>
    </section>

    <section id="work" class="section-shell border-t border-line">
      <div class="mb-10 flex gap-6 items-end justify-between">
        <div>
          <p class="eyebrow text-signal-bright">
            Selected work / 2024—25
          </p><h2 class="display-lg mt-4">
            The work.
          </h2>
        </div>
        <div class="gap-2 hidden items-center md:flex">
          <button class="btn-ghost p-3" aria-label="Previous work" @click="previous">
            <Icon name="lucide:arrow-left" size="18" />
          </button><button class="btn-ghost p-3" aria-label="Next work" @click="next">
            <Icon name="lucide:arrow-right" size="18" />
          </button>
        </div>
      </div>
      <div ref="viewport" class="border border-line bg-black relative overflow-hidden">
        <div class="grid transition-transform duration-500 md:grid-cols-[1.2fr_0.8fr]" :style="{ transform: `translateX(-${index * 100}%)` }">
          <article v-for="slide in slides" :key="slide.title" class="grid col-span-full min-w-full md:grid-cols-[1.2fr_0.8fr]">
            <img :src="slide.image" :alt="slide.title" class="h-[55vw] max-h-[38rem] min-h-[22rem] w-full object-cover grayscale">
            <div class="p-6 border-t border-line bg-surface flex flex-col justify-end md:p-10 md:border-l md:border-t-0">
              <p class="eyebrow text-signal-bright">
                01 / 03
              </p><h3 class="font-display text-5xl text-bone leading-none mt-5 uppercase">
                {{ slide.title }}
              </h3><p class="text-muted mt-4">
                {{ slide.style }}
              </p><a href="#book" class="btn-ghost mt-8 w-fit">Ask about a piece <Icon name="lucide:arrow-up-right" size="16" /></a>
            </div>
          </article>
        </div>
      </div>
      <div class="mt-4 flex gap-2" role="tablist" aria-label="Portfolio slides">
        <button v-for="slide in slides" :key="slide.title" class="bg-line flex-1 h-1 transition" :class="index === slides.indexOf(slide) ? 'bg-signal' : ''" :aria-label="`Show ${slide.title}`" @click="goTo(slides.indexOf(slide))" />
      </div>
    </section>

    <section id="styles" class="section-shell border-t border-line gap-12 grid lg:grid-cols-[0.7fr_1.3fr]">
      <div>
        <p class="eyebrow text-signal-bright">
          Find your language
        </p><h2 class="display-lg mt-4">
          Choose<br>your mark.
        </h2>
      </div>
      <div class="border-t border-line grid sm:grid-cols-2">
        <article v-for="style in [{ name: 'Blackwork', note: 'High contrast. Strong silhouettes. No noise.' }, { name: 'Ornamental', note: 'Pattern, balance and slow detail.' }, { name: 'Fine line', note: 'Quiet marks with a sharp edge.' }, { name: 'Flash', note: 'Classic symbols, ready to make permanent.' }]" :key="style.name" class="py-6 border-b border-line sm:nth-[even]:pl-7 sm:nth-[odd]:pr-7 sm:nth-[odd]:border-r">
          <p class="eyebrow text-signal">
            0{{ ['Blackwork', 'Ornamental', 'Fine line', 'Flash'].indexOf(style.name) + 1 }}
          </p><h3 class="font-display text-3xl mt-4 uppercase">
            {{ style.name }}
          </h3><p class="text-muted leading-relaxed mt-3 max-w-xs">
            {{ style.note }}
          </p>
        </article>
      </div>
    </section>

    <section id="about" class="section-shell border-t border-line">
      <div class="gap-10 grid lg:grid-cols-[0.7fr_1.3fr]">
        <p class="eyebrow text-signal-bright">
          The artist
        </p><div>
          <h2 class="font-display text-4xl leading-tight max-w-4xl uppercase md:text-7xl">
            Every tattoo starts with a conversation and ends with something that belongs only to you.
          </h2><p class="text-lg text-muted leading-relaxed mt-8 max-w-xl">
            Flocka works between old-school symbolism, heavy blackwork and expressive custom pieces. Based in Berlin, working slow, drawing hard.
          </p>
        </div>
      </div>
    </section>

    <section id="book" class="section-shell border-t border-line">
      <div class="p-6 surface-panel gap-10 grid md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="eyebrow text-signal-bright">
            Start a project
          </p><h2 class="display-lg mt-4">
            Make it<br>permanent.
          </h2><p class="text-muted leading-relaxed mt-6 max-w-sm">
            Tell me what is on your mind. I will get back to you with the next step.
          </p>
        </div><form class="gap-4 grid sm:grid-cols-2" @submit.prevent>
          <label class="eyebrow">Name<input class="text-bone mt-2 px-0 py-3 outline-none border-b border-line bg-transparent w-full focus:border-signal" placeholder="Your name"></label><label class="eyebrow">Email<input type="email" class="text-bone mt-2 px-0 py-3 outline-none border-b border-line bg-transparent w-full focus:border-signal" placeholder="you@email.com"></label><label class="eyebrow sm:col-span-2">Tattoo idea<textarea rows="3" class="text-bone mt-2 px-0 py-3 outline-none border-b border-line bg-transparent w-full resize-none focus:border-signal" placeholder="Tell me the story..." /></label><button class="btn-primary mt-3 w-fit" type="submit">
            Send inquiry <Icon name="lucide:arrow-up-right" size="16" />
          </button>
        </form>
      </div>
    </section>

    <footer class="page-shell py-10 border-t border-line flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <img src="/images/flocka-tattoo-logo-header.png" alt="Flocka Tattoo" class="w-48"><p class="eyebrow mt-5">
          Berlin · Tue—Sat · 10:00—19:00
        </p>
      </div><div class="flex gap-5">
        <a class="eyebrow text-bone hover:text-signal" href="#">Instagram</a><a class="eyebrow text-bone hover:text-signal" href="#">Contact</a>
      </div>
    </footer>
  </main>
</template>
