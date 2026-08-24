<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = (runtimeConfig.public.siteUrl || requestUrl.origin).replace(/\/$/, '')
const title = 'Datenschutz · Flocka Tattoo'
const description = 'Datenschutzhinweise von Flocka Tattoo, Sascha Schlüter, Tätowierer in Köln.'

useHead({
  title,
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: `${siteUrl}/datenschutz` }],
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
      <h1 class="mt-6 font-display text-6xl uppercase leading-[.85] tracking-[-.06em] md:text-9xl">Datenschutz</h1>

      <section class="mt-16 space-y-8 text-base leading-relaxed text-muted md:mt-24 md:text-lg">
        <div>
          <h2 class="mb-3 text-bone">Verantwortlicher</h2>
          <p>Sascha Schlüter, Flocka Tattoo, Köln, Deutschland<br>
            E-Mail: <a class="text-bone underline underline-offset-4" href="mailto:flockatattoo@proton.me">flockatattoo@proton.me</a></p>
        </div>
        <div>
          <h2 class="mb-3 text-bone">Kontaktaufnahme</h2>
          <p>Wenn du per E-Mail Kontakt aufnimmst, werden deine Angaben ausschließlich zur Bearbeitung deiner Anfrage und zur anschließenden Kommunikation verwendet. Eine Weitergabe erfolgt nicht, sofern keine gesetzliche Pflicht besteht.</p>
        </div>
        <div>
          <h2 class="mb-3 text-bone">Hosting und externe Inhalte</h2>
          <p>Diese Website wird über Cloudflare Pages bereitgestellt. Die Seite verlinkt auf das Instagram-Profil von Flocka Tattoo. Beim Aufruf externer Inhalte gelten die Datenschutzbestimmungen des jeweiligen Anbieters.</p>
        </div>
        <div>
          <h2 class="mb-3 text-bone">Deine Rechte</h2>
          <p>Du hast im Rahmen der gesetzlichen Vorschriften das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch gegen die Verarbeitung deiner personenbezogenen Daten. Wende dich dafür an die oben genannte E-Mail-Adresse.</p>
        </div>
      </section>
    </div>
  </main>
</template>
