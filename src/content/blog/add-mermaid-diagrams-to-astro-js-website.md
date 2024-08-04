---
author: KalanaKt
pubDatetime: 2024-02-28T15:22:00Z
modDatetime: 2024-09-04T15:22:00Z
title: Add Mermaid Diagrams to Your Astro JS Website
slug: add-mermaid-diagrams-to-astro-js-website
featured: true
draft: false
tags:
  - astro
  - web
description: Learn how to add Mermaid diagrams to your Astro JS website.
---

Mermaid diagrams are a great way to visualize complex information on your website. In this blog post,
we'll walk you through the process of adding Mermaid diagrams to your Astro JS website, step by step.

- > Step 1: Install Mermaid

> The first step is to install the [Remark Mermaid](https://github.com/remcohaszing/remark-mermaidjs) library. You can do this using npm:

```bash
npm install remark-mermaidjs
```

In Node.js this package uses playwright under the hood. To use it, you may need to install additional dependencies. These can be installed with:

```bash
npx playwright install --with-deps chromium
```

- > Step 2: Initialize Mermaid In astro.config.mjs

> Add remarkMermaid pluggin to remarkPlugins array in astro.config.mjs

```javascript title="astro.config.mjs" ins={1,5}
import remarkMermaid from "remark-mermaidjs";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
});
```

- > Step 3: Render the Diagram

> Finally, You can do this by adding a code block with the "mermaid" language identifier:

````markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

> If your CSS controls SVG styles, you should disable styles from generated Mermaid diagrams.

```css
svg:not([id^="mermaid"]) {
}
```

- > Step 4: Build and Deploy

> Build your Astro JS website and deploy it to see the Mermaid diagram in action on your website.

**Conclusion:**
Adding Mermaid diagrams to your Astro JS website is a straightforward process that can enhance the visual appeal and effectiveness of your content. Follow the steps outlined in this blog post to start using Mermaid diagrams in your projects today!
