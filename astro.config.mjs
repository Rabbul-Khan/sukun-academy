/**
 * Astro Configuration
 * @see https://astro.build/config
 */
import { defineConfig } from 'astro/config';

// Integrations
import vue from '@astrojs/vue';

// Vite Plugins
import tailwindcss from '@tailwindcss/vite';

// =============================================================================
// Configuration
// =============================================================================

export default defineConfig({
  // Deployment Settings
  site: 'https://rabbul-khan.github.io',
  base: '/sukun-academy',

  // Astro Integrations
  integrations: [
    vue(),
  ],

  // Vite Configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});