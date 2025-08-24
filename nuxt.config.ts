// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static', // اختیاریه ولی خوبه باشه// اختیاریه ولی خوبه باشه
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css',
        '@/assets/css/global.css',
  ]
})