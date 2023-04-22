import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig({
  resolve: {
    alias: {
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['node-fetch.ts']
  },
  optimizeDeps: {
    exclude: []
  },
  plugins: [vue()]
})
