import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs'
import rehypeKatex from 'rehype-katex';
import vercel from "@astrojs/vercel/static";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://kalanakt.vercel.app',
  integrations: [
    astroExpressiveCode(),
    mdx(),
    sitemap()
  ],
  output: "static",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkMermaid, remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});