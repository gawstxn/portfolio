// @ts-check
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://gawstxn.vercel.app',
  integrations: [react(), sitemap()]
});
