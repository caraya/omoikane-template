import { defineConfig } from 'vite';
import omoikane from '@elrond25/vite-plugin-omoikane';

export default defineConfig({
  plugins: [omoikane()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
