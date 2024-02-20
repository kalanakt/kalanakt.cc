import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import vercel from "@astrojs/vercel/static";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://kalanakt.vercel.app',
  integrations: [astroExpressiveCode(),, mdx(), sitemap()],
  output: "static",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkMath],
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});