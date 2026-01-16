import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add site-specific design tokens here
    },
  },
  plugins: [
    typography,
    // Add additional Tailwind plugins here
  ],
};

export default config;
