import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.inspireb.fr',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [tailwind(), icon(), sitemap()],
});
