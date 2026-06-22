---
version: "1.03"
created: 2026-04-25
updated: 2026-04-25
---

# Obsidian Authoring

This project uses a controlled Markdown dialect called **Obsidian Website Markdown**. It is designed to keep website page files semantic, readable in Obsidian, and renderable by Astro without making visual layout syntax part of the content source.

The core rule is:

```txt
Markdown = semantic page content
Astro = final visual layout and styling
Obsidian = readable writing environment
```

## Supported Syntax

The initial supported website syntax is:

- YAML frontmatter.
- Headings.
- Paragraphs, lists, emphasis, blockquotes, code, and normal Markdown.
- Standard Markdown links.
- Standard Markdown images.
- Standard Obsidian callouts.

Content files should use normal Markdown headings, paragraphs, lists, links, images, and frontmatter. Astro layouts and components are responsible for rendering final visual structure, including cards, grids, columns, process sections, FAQ sections, and CTA sections.

## Unsupported Syntax

Do not use these in website content:

- Dataview or `dataviewjs`.
- Canvas embeds.
- Transclusions such as `![[Some note]]`.
- Complex Obsidian embeds.
- Arbitrary plugin-specific syntax.
- Arbitrary JSX or MDX inside Markdown.
- Wikilinks unless a later layer explicitly supports them.
- Required layout syntax such as mandatory columns, cards, grids, or visual component instructions.

Unsupported syntax is allowed in research notes, but not in files that Astro renders as website content.

Optional Obsidian preview enhancements may be used in private planning notes, but they must not become required source-of-truth syntax for public content files.

## Frontmatter Rules

All Markdown files must begin with YAML frontmatter:

```yaml
---
version: "1.00"
created: 2026-04-25
updated: 2026-04-25
---
```

For project documentation, `version` uses the `x.yy` scheme. Increment the minor version whenever the file is modified. Keep `created` unchanged once it exists. Always set `updated` to the current date.

Future website content files will also include Astro-facing fields such as `title`, `description`, `layout`, and `draft` once schemas exist.

## Standard Callouts

Standard Obsidian callouts may be used for content-shaped blocks:

```md
> [!note]
> This is a website-safe note callout.
```

Use callouts for writing structure, not for global layout or repeated page chrome. Header, footer, navigation, contact forms, FAQ sections, and trust sections belong in Astro components.

## Visual Layout Responsibility

Public content files must not force visual layout decisions. Do not require multi-column syntax, custom CSS snippets, list-based column conventions, or codeblock-based column layouts in `src/content/pages/*.md`.

Astro layouts and components may later render selected semantic sections as cards, grids, columns, process steps, FAQ accordions, or CTA blocks. The Markdown source should remain content-first so the same content can be styled differently without rewriting page copy.

Optional Obsidian preview plugins are allowed for author comfort, but they are not required for the website content workflow and must not define the canonical source syntax.

## Public And Private Content

Public website page files live in `src/content/pages/*.md` and contain public page content only.

Private planning files live outside the public content collection:

```txt
docs/content-briefs/*.md = page briefs, client questions, internal TODOs, publish checklists, SEO notes
docs/content-tasks/*.md or docs/wintergarten-content-tasks.md = global page production tasks and status tracking
```

Do not put client questions, internal TODOs, publish checklists, SEO notes, or agent instructions inside public content files.

## Valid Example

```md
---
version: "1.00"
created: 2026-04-25
updated: 2026-04-25
title: Wintergarten Reparatur Berlin
description: Reparatur und Wartung von Wintergärten in Berlin.
layout: service
draft: false
---

# Wintergarten Reparatur Berlin

Wir reparieren und warten Wintergärten in Berlin.

> [!note]
> This is a standard callout.

## Beratung

Wir prüfen die Situation vor Ort.

## Umsetzung

Wir planen die Reparatur nachvollziehbar.
```

## Invalid Example

````md
---
title: Dashboard
---

```dataviewjs
dv.table(["Name"], dv.pages())
```

![[another-note]]

<HeroSection />
````

This is invalid for website content because it uses Dataview, a transclusion, and inline component syntax.

## Obsidian Versus Astro

Obsidian is the writing and approximate preview environment. Astro is the final production renderer.

If the two differ, trust Astro for production HTML, accessibility, layout, and performance. Trust Obsidian for writing comfort, review, and lightweight content editing.
