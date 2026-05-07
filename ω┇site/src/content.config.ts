import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sitePages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero_title: z.string().optional(),
    hero_image: z.string().optional(),
    hero_image_alt: z.string().optional(),
    slug: z.string(),
    url: z.string(),
    type: z.string(),
    page_type: z.string(),
    status: z.string(),
    content_status: z.string(),
    seo_status: z.string(),
    client_review_status: z.string(),
    priority: z.string(),
    cluster: z.string(),
    primary_keyword: z.string(),
    secondary_keywords: z.array(z.string()).default([]),
    intent: z.string(),
    business_fit: z.string(),
    risk: z.string(),
    layout: z.string(),
    draft: z.boolean().default(true),
    structure_status: z.string(),
    content_pattern: z.string(),
    has_editorial_section: z.boolean().default(false),
    has_columns: z.boolean().default(false),
    client_brief: z.string(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    version: z.number(),
  }),
});

export const collections = { sitePages };
