// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  pages: true,
})