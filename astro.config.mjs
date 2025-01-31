// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), tailwind(), icon({
    include: {
      'material-symbols-light': ["*"]
    }
  })]
});