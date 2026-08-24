<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = (runtimeConfig.public.siteUrl || requestUrl.origin).replace(/\/$/, '')
const title = 'Impressum · Flocka Tattoo'
const description = 'Impressum von Flocka Tattoo, Sascha Schlüter, Tätowierer in Köln.'

useHead({
  title,
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: `${siteUrl}/impressum` }],
  meta: [
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<template>
  <main class="min-h-screen bg-black px-5 py-10 text-bone md:px-[4vw] md:py-16">
    <div class="mx-auto max-w-3xl">
      <NuxtLink to="/" class="text-sm text-muted transition-colors hover:text-bone">← Zurück zu Flocka Tattoo</NuxtLink>
      <p class="mt-20 text-xs uppercase tracking-[.24em] text-signal-bright">Rechtliches</p>
      <h1 class="mt-6 font-display text-6xl uppercase leading-[.85] tracking-[-.06em] md:text-9xl">Impressum</h1>

      <section class="mt-16 space-y-8 text-base leading-relaxed text-muted md:mt-24 md:text-lg">
        <div>
          <h2 class="mb-3 text-bone">Angaben zum Anbieter</h2>
          <p>Sascha Schlüter<br>Flocka Tattoo<br>Köln, Deutschland</p>
        </div>
        <div>
          <h2 class="mb-3 text-bone">Kontakt</h2>
          <p>E-Mail: <a class="text-bone underline underline-offset-4" href="mailto:flockatattoo@proton.me">flockatattoo@proton.me</a></p>
          <p>Instagram: <a class="text-bone underline underline-offset-4" href="https://www.instagram.com/flockatattoo/" target="_blank" rel="noreferrer">@flockatattoo</a></p>
        </div>
        <div>
          <h2 class="mb-3 text-bone">Verantwortlich für den Inhalt</h2>
          <p>Sascha Schlüter, Flocka Tattoo</p>
        </div>
      </section>
    </div>
  </main>
</template>
