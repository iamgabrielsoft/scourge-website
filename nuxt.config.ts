
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    port: 6900
  },
  runtimeConfig: {
    public: {
      appUrl: 'https://scourge.team',
    },
  },
  app: {
    head: {
      link: [
        // SVG favicon — all modern browsers (Chrome, Firefox, Edge, Safari 12+)
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // ICO fallback for older browsers
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // iOS home screen icon
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
        // PWA manifest
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        // Android Chrome address bar + Edge tab colour
        { name: 'theme-color', content: '#9E5CF7' },
        { name: 'msapplication-TileColor', content: '#08090C' },
      ],
    },
  },
})
