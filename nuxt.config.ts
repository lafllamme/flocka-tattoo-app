export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@unocss/nuxt', '@nuxt/icon', '@nuxt/a11y'],
  typescript: { strict: true, typeCheck: true },
  app: {
    head: {
      titleTemplate: '%s · Flocka Tattoo',
      meta: [{ name: 'theme-color', content: '#090909' }],
    },
  },
})
