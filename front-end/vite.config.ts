/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  plugins: [react()],
  // https://vitest.dev/config/
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        url: 'http://localhost:3333',
      },
    },
    setupFiles: './src/setupTests.ts',
    testTimeout: 30 * 1000,
  },
});
