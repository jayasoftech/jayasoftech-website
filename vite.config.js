import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import oxlint from 'vite-plugin-oxlint'

// https://vite.dev/config/
export default defineConfig({
  base: '/jayasoftech-website/',
  plugins: [react(),
            oxlint(),
           ],

  server: {
    port:5174,
  },
})
