---
version: 1.18
created: 2026-05-01
updated: 2026-05-10
---

# Project Guide

This project is a repair-first lead-generation website for private-first customers in Berlin, Brandenburg, and nearby cities within roughly a one-hour drive who need help with leaking, damaged, ageing, poorly sealed, or refurbishment-ready winter gardens and related glazed structures.

This is the main project context file. Read it first for structure, workflow, authoring rules, and future Astro guardrails.

The current content direction is cautious by design. Confirmed scope includes inspection, leak diagnosis, sealing, repair, refurbishment, selected component work, and new foundations. Do not imply winter garden sales, full new-build delivery, emergency response, fixed prices, guarantees, named certifications, years of experience, or case studies unless they are confirmed in `α┇docs/03┇client-info.md`.

## Current Structure

```txt
α┇docs/
  01┇project.md
  02┇content-strategy.md
  03┇client-info.md
  04┇decision-log.md
  05┇layout-description.md
  06┇content-quality-playbook.md
β┇workbench/
  01┇content-actions.md
  02┇task-cards.md
  03┇content-intake-and-page-briefs.md
  04┇benchmark-intake.md
  research/
    keywords-v1.json
    keywords-v2.json
    keywords-v3.json
ω┇site/
  astro.config.ts
  package.json
  src/content.config.ts
  src/content/pages/
    fenster-abdichten.md
    home.md
    startseite.md
    wintergarten-reparatur-berlin.md
    wintergarten-undicht.md
  src/layouts/
    BaseLayout.astro
  src/pages/
    index.astro
    [...slug].astro
```

`α┇docs/` is for durable agent context, confirmed client facts, and project instructions. `β┇workbench/` is for human actions, client questions, page tasks, and research snapshots. `ω┇site/` is the Astro app. Public website copy lives only in `ω┇site/src/content/pages/*.md`.

Astro routing lives in `ω┇site/src/pages/`. The first build renders `ω┇site/src/content/pages/startseite.md` to `/` and non-draft service pages to their `url` values. Draft content in `ω┇site/src/content/pages/` must not be rendered.

`🚦*.md` files are Obsidian dashboards. They are not public website content and not project documentation. Do not add YAML frontmatter to dashboard files, because they are Dataview/Chart control surfaces.

`.codex-home/AGENTS.md` is generated from Codex UI/global instruction settings. Do not move, rename, or merge it into project docs. Keep project-specific rules in `α┇docs/01┇project.md` and current client work in `β┇workbench/`.

## Source Of Truth

Markdown is the canonical content source. Public page files must stay semantic, readable in Obsidian, editable without a CMS, versionable, and renderable by Astro later.

```txt
Markdown = semantic page content
Astro = final visual layout and styling
Obsidian = writing and approximate preview
```

Do not use MDX as the default authoring format. Use MDX only later if a page genuinely needs inline imported components or interactive composition.

Public pages are no longer produced as free-form articles that are styled afterwards. Before drafting or rewriting a page, choose the page type, use the approved page recipe, select approved functional sections, choose allowed variants, and then write the section content. The recipe and section choice belong in `β┇workbench/03┇content-intake-and-page-briefs.md`; the public Markdown remains semantic.

## Authoring Rules

Website content may use YAML frontmatter, headings, paragraphs, lists, emphasis, blockquotes, code, standard Markdown links, standard Markdown images, and standard Obsidian callouts.

Markdown images are allowed for public page rhythm when the image itself is approved or explicitly neutral. Keep image placement semantic; Astro owns final image styling, sizing, grids, and mobile behaviour.

Do not use these in public website content:

- Dataview or `dataviewjs`.
- Canvas embeds.
- Transclusions such as `![[Some note]]`.
- Wikilinks unless support is added later.
- Arbitrary Obsidian plugin syntax.
- Arbitrary JSX or MDX.
- Required visual layout syntax such as columns, cards, grids, process styling, FAQ accordions, or CTA styling.

Astro owns final layout, reusable components, design tokens, routing, schema validation, and future rendering behaviour. Markdown should describe content, not force presentation.

## Frontmatter Rules

Every Markdown file except `🚦*.md` dashboard files must begin with YAML frontmatter containing `version`, `created`, and `updated`.

Use the `x.yy` versioning scheme as an unquoted numeric property, for example:

```yaml
---
version: 1.02
created: 2026-05-01
updated: 2026-05-01
---
```

Do not quote `version`. Use a dot as the decimal separator so Astro/YAML tooling reads it predictably. Increment the minor part by `+1` whenever a Markdown file is modified. Keep `created` unchanged once it exists. Always set `updated` to the current date.

Project docs and workbench files should use only:

- `version`
- `created`
- `updated`

Public Astro-bound content files in `ω┇site/src/content/pages/*.md` should keep the current page metadata schema:

- `title`, `description`, `slug`, `url`
- `type`, `page_type`, `layout`, `draft`
- `status`, `content_status`, `seo_status`, `client_review_status`
- `priority`, `cluster`, `primary_keyword`, `secondary_keywords`, `intent`
- `business_fit`, `risk`, `structure_status`, `content_pattern`
- `has_editorial_section`, `has_columns`, `client_brief`
- `created`, `updated`, `version`

`title` is required for public Astro content because it supports page metadata and SEO. Do not add `title` to `α┇docs/` or `β┇workbench/` files unless a future tool explicitly needs it.

When Astro Content Collections are added, the page schema should accept these public page fields and treat workflow fields such as `status`, `client_review_status`, `risk`, `client_brief`, and `version` as editorial metadata. They may be queried for dashboards or previews, but they should not be rendered as visible page copy by default.

## Naming And Paths

Use lower-case, hyphenated file names for website content, Astro files, components, styles, and assets. Keep German URL slugs lower-case and hyphenated.

Use these future locations unless a later decision changes them:

- `ω┇site/src/content/pages/*.md` for public Markdown page content.
- `ω┇site/src/layouts/` for Astro page shells.
- `ω┇site/src/components/global/` for site-wide components such as header and footer.
- `ω┇site/src/components/sections/` for reusable page sections.
- `ω┇site/src/components/ui/` for small reusable primitives.
- `ω┇site/src/styles/` for global CSS and design tokens.
- `ω┇site/src/assets/` for images Astro should process.
- `ω┇site/public/` for files that must be copied untouched, such as favicons, robots files, verification files, PDFs, and downloads.

Do not duplicate the same asset in both `ω┇site/src/assets/` and `ω┇site/public/`.

## Workflow Rules

Use `β┇workbench/01┇content-actions.md` for page status, open client questions, publish checklists, risks, and human follow-up tasks. Treat it as a temporary inbox and next-action list: the long-term goal is to answer, complete, move, or delete everything in it so the file can become empty. Do not put those private notes into public page files.

Use `α┇docs/03┇client-info.md` for confirmed facts from the client. Open questions stay in `β┇workbench/01┇content-actions.md`; once answered, move the confirmed information into `α┇docs/03┇client-info.md` and update any affected page tasks.

Use `α┇docs/06┇content-quality-playbook.md` as the required writing and QA standard for public pages. It defines the Practical Expert voice, AI-smell rules, claim hierarchy, page-job expectations, and publish-readiness checklist.

Use `β┇workbench/03┇content-intake-and-page-briefs.md` for owner/client intake and page briefs. Before creating or rewriting any public page, prepare or update a page brief there. Do not treat open brief questions as confirmed facts.

Use `β┇workbench/04┇benchmark-intake.md` for screenshot and competitor/reference observations. Benchmark notes may influence page structure, image rhythm, CTA placement, and UX expectations, but they are not claim sources and must not be copied into public page text.

Use the recipe and section system across `α┇docs/02┇content-strategy.md`, `α┇docs/05┇layout-description.md`, and `α┇docs/06┇content-quality-playbook.md` before public page writing. New production section types must be documented and approved in those guidance files before appearing in live pages or renderer mappings.

Use `β┇workbench/research/keywords-v3.json` as the active keyword dataset. Older keyword files are historical snapshots.

Keep additions layer-aware. The project now has a minimal Astro scaffold for local preview and GitHub Pages deployment. Do not expand routing, schemas, layouts, components, deployment config, or media folders unless the active task explicitly asks for that layer.

## Content Production Read Order

Before writing or editing public page content, read these files in order:

1. `α┇docs/01┇project.md`
2. `α┇docs/02┇content-strategy.md`
3. `α┇docs/03┇client-info.md`
4. `α┇docs/04┇decision-log.md`
5. `α┇docs/05┇layout-description.md`
6. `α┇docs/06┇content-quality-playbook.md`
7. `β┇workbench/01┇content-actions.md`
8. `β┇workbench/03┇content-intake-and-page-briefs.md`
9. `β┇workbench/04┇benchmark-intake.md`, if screenshots or reference pages have been supplied for the active page type.

Then read the target page file in `ω┇site/src/content/pages/*.md`.

Every new or rewritten page must have source discipline, a page brief, and for priority pages a mini evidence pack before public copy is changed. Confirm the target path, page type, keyword intent, draft/active status, and whether the service topic is confirmed, conditionally allowed, or blocked. If the brief exposes missing facts, keep the public wording cautious and add the missing detail to the workbench instead of inventing it.

For public page production, follow this sequence:

1. identify the page type
2. choose the approved page recipe
3. select approved sections
4. choose allowed section variants
5. write content for those sections
6. review for repetition, rhythm, page-job fit, claim safety, and CTA clarity
7. update public Markdown only after the brief and section plan are coherent

## Astro Build Roadmap

Current first-build status:

- Astro package/config exists.
- Content collection schema exists.
- `startseite.md` renders as `/`.
- `wintergarten-reparatur-berlin.md` renders as `/wintergarten-reparatur-berlin/`.
- `wintergarten-undicht.md` renders as `/wintergarten-undicht/`.
- Other page drafts remain non-rendered while `draft: true`.
- Astro files are confined to `ω┇site/`; repository-level files such as `.gitignore` and `.github/workflows/` stay at the root.

When Astro work begins, future Architect Agents should choose the implementation details for the active build phase, but they should keep the first build deliberately small.

Recommended sequence:

- Keep the smallest Astro scaffold stable.
- Keep Content Collections and frontmatter validation ahead of layout complexity.
- Render only approved non-draft Markdown pages.
- Refine the base layout, global styles, navigation, and footer.
- Add reusable components only after the first page renders cleanly.
- Keep public Markdown semantic; Astro owns presentation.

## Ready To Build Checklist

Before starting Astro implementation, confirm:

- `α┇docs/01┇project.md` and `α┇docs/02┇content-strategy.md` are current.
- `α┇docs/06┇content-quality-playbook.md` has been read for public page content.
- Confirmed client facts are in `α┇docs/03┇client-info.md`.
- Open questions and content tasks are in `β┇workbench/01┇content-actions.md`.
- A page brief exists in `β┇workbench/03┇content-intake-and-page-briefs.md` for any page being created or rewritten.
- The active first pages are chosen.
- Public page frontmatter is consistent with the documented schema.
- The active keyword dataset is `β┇workbench/research/keywords-v3.json`.
- `🚦*.md` dashboard files still work and remain frontmatter-free.

## Non-Goals For Now

The project does not currently support a database-backed CMS, WordPress-style admin editing, generated mirror files, n8n content sync, deployment automation beyond the simple GitHub Pages workflow, complex client-side JavaScript, or full-service winter garden sales/build content.
