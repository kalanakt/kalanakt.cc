import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blogCollection = defineCollection({
  schema: z
    .object({
      tags: z.optional(z.array(z.string())),
      url: z.optional(z.string())
    })
    .merge(rssSchema)
});

const projectsCollection = defineCollection({
  schema: z
    .object({
      tags: z.optional(z.array(z.string())),
    })
    .merge(rssSchema)
});

export const collection = {
  blog: blogCollection,
  projects: projectsCollection
}
