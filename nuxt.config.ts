// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/supabase'],
   vite: {
  plugins: [
    tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'StoloSys',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    }
  },

  supabase: {
    redirect: false
}

})