import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/repo_web_test/',
  plugins: [react()]
})
