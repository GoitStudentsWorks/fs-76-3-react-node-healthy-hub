/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: { additionalData: '@import "./src/scss/base/_variables.scss"' },
  //   },
  // },
  plugins: [react()],
});