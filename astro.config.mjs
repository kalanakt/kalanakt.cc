import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import remarkMermaid from "remark-mermaidjs";
import rehypeKatex from "rehype-katex";
import vercel from "@astrojs/vercel/static";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import { exampleRemarkPlugin } from "./src/scripts/example-remark-plugin.mjs";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kalanakt.cc",
  integrations: [astroExpressiveCode(), mdx(), sitemap()],
  output: "static",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [
      remarkMermaid,
      remarkMath,
      [remarkToc, { heading: "contents" }],
      remarkGfm,
      exampleRemarkPlugin,
    ],
    rehypePlugins: [rehypeKatex, rehypeAccessibleEmojis],
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
