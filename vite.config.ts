import { defineConfig } from 'vite';
import { omoikane } from '@elrond25/vite-plugin-omoikane';

export default defineConfig({
  plugins: [omoikane()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**'],
  },
});
