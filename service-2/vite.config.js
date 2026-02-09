import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8093,
    allowedHosts: true,
    hosts: true,
  },
})
