import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/turismo_posadas-prueba/',
  server: {
    port: 3000,
    open: true
  }
}) 