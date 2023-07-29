// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ['nuxt-icon','@nuxtjs/google-fonts'],
  googleFonts:{
    families:{
      Inter:[300, 500,700]
    }
  },
  css: ['~/assets/css/main.css'],
})
