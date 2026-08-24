export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@unocss/nuxt', '@nuxt/icon', '@nuxt/a11y'],
  icon: {
    fallbackToApi: false,
    serverBundle: {
      collections: ['jam', 'lucide'],
    },
  },
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
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
})
