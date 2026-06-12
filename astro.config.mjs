import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';
import tailwindcss from '@tailwindcss/vite';

// 1. Imports des plugins mathématiques
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://raise-mbse.github.io',

  // 2. Configuration pour les fichiers .md (Documentation standard)
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  // 3. Configuration pour les fichiers .mdx (si utilisés)
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    mermaid(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
