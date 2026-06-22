---
version: "1.02"
created: 2026-04-25
updated: 2026-04-25
---

# Architecture

This project uses Obsidian-readable Markdown as the canonical source of truth and Astro as the rendering and compiler layer. The goal is to replace database-heavy CMS workflows with a Git-versioned, file-based website pipeline.

The core pipeline is:

```txt
Obsidian-readable .md files
Astro Content Collections
Zod frontmatter validation
Astro layouts and reusable components
Static website
GitHub plus Vercel or Netlify deployment
```

## Source Of Truth

Markdown files are the primary content system. Public page files must remain semantic, readable in Obsidian, editable without a CMS UI, versionable in Git, and renderable by Astro.

Astro adapts to the Markdown source through Content Collections, Zod schemas, layouts, components, CSS design tokens, and carefully scoped Markdown processing. The content system must not be converted to MDX by default. MDX is reserved for rare pages that genuinely need inline component imports or interactive composition.

The division of responsibilities is:

```txt
Markdown = semantic page content
Astro = final visual layout and styling
Obsidian = readable writing environment
```

## Technical Layers

Layer 0 defines how Obsidian and VS Code work together. Obsidian is the writing environment, VS Code is the development and validation environment, and Astro is the production renderer.

Layer 1 proves that one Markdown file can render through Astro. Later layers add frontmatter validation, layouts, global components, design tokens, slug routing, reusable sections, deployment, sync/export workflows if needed, and optional MDX exceptions.

This order is intentional. Each layer should be stable, documented, and verifiable before the next layer begins.

## Markdown Dialect

The supported dialect is called **Obsidian Website Markdown**. The initial supported syntax is YAML frontmatter, headings, normal Markdown, standard links, images, and standard Obsidian callouts.

Unsupported syntax includes Dataview, Canvas, arbitrary Obsidian plugin output, transclusions, complex embeds, and arbitrary JSX or MDX inside Markdown. Unsupported syntax must be documented and should fail or warn once validation exists.

Public content files should not encode website layout instructions such as required columns, cards, grids, process styling, FAQ accordions, or CTA styling. Astro layouts and components are responsible for final visual layout.

The existing `DASHBOARD┇Wintergarten SEO.md` file uses `dataviewjs`. It belongs to the research/dashboard side of the workspace, not the website content pipeline, unless it is later rewritten into website-safe Markdown.

## Astro Responsibilities

Astro is responsible for final rendering. It should provide the HTML shell, metadata, layouts, reusable global components, reusable section components, design tokens, content queries, schema validation, and custom Remark/Rehype processing when the controlled Markdown dialect requires it.

Astro may later render selected semantic Markdown sections as cards, grids, columns, process steps, FAQ accordions, or CTA blocks based on layout and component logic. The Markdown file should not force those visual decisions.

The current Astro documentation uses `src/content.config.ts` for Content Collections configuration. This project will follow that path when Layer 2 introduces collections and Zod validation.

## Component Strategy

Reusable website parts live in Astro components, not Markdown. Markdown files hold page-specific content and metadata. Astro components hold reusable layout, section, and interface behaviour.

The intended component structure for later layers is:

```txt
src/components/
  global/
  sections/
  ui/
```

Global components contain site-wide elements such as header and footer. Section components contain reusable page sections such as contact, trust, FAQ, and service grids. UI components contain small primitives such as buttons, cards, and containers.

Markdown may later enable reusable sections through frontmatter flags, while the layout decides which components to render.

Private planning content belongs outside public page files. Use `docs/content-briefs/*.md` for page briefs, client questions, internal TODOs, publish checklists, SEO notes, risks, and assumptions. Use `docs/wintergarten-content-tasks.md` or `docs/content-tasks/*.md` for global page production tracking.

## Media Strategy

The project will use two media locations once Astro is scaffolded:

```txt
src/assets/ = media Astro should process, optimise, import, or bundle
public/ = static files copied untouched and referenced by root URL
```

Normal website images should go in `src/assets/`. Page-specific images should be placed near their page or domain, such as `src/assets/pages/` or `src/assets/services/`. Shared design images should go in `src/assets/shared/`. Logos and component icons should go in `src/assets/global/`.

PDFs, favicons, robots files, verification files, and large static files should go in `public/`. Public files are referenced from root URLs such as `/downloads/file.pdf`.

## Intentional Non-Support

The project does not currently support a database-backed CMS, WordPress-like admin editing, MDX as the default content format, n8n mirror generation, complex client-side JavaScript, dynamic routing, deployment automation, or custom Remark/Rehype plugins beyond documented layer needs.

Those capabilities may be considered later, but they are not part of Layer 0 or Layer 1.

## References

- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- Astro Markdown processing: https://docs.astro.build/en/guides/markdown-content/
- Astro images and public files: https://docs.astro.build/en/guides/images/
- Obsidian callouts: https://obsidian.md/help/callouts
