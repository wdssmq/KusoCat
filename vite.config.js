import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import datasetPlugin from './plugins/dataset.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), datasetPlugin()],
  // base: './'
})
