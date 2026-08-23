export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@unocss/nuxt', '@nuxt/icon', '@nuxt/a11y'],
  typescript: { strict: true, typeCheck: true },
  runtimeConfig: {
    public: {
      siteUrl: '',
    },
  },
  app: {
    head: {
      titleTemplate: '%s',
      meta: [{ name: 'theme-color', content: '#090909' }],
    },
  },
})
