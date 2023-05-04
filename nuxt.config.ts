export default defineNuxtConfig({
  modules: ['@element-plus/nuxt','@pinia/nuxt',
],
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })