---
version: "1.03"
created: 2026-04-25
updated: 2026-04-25
---

# Decision Log

This file records architectural decisions so the project does not repeatedly revisit settled foundations.

## 2026-04-25 — Use Markdown As The Canonical Source

Decision:
Website content is stored as Obsidian-readable `.md` files by default.

Reason:
Markdown remains readable, editable, Git-versionable, and understandable without a database or CMS UI.

Alternatives considered:
WordPress, headless CMS storage, MDX as the default authoring format, and generated mirror files.

Rejected because:
They add avoidable complexity or move the source of truth away from plain Markdown.

Consequences:
Astro must adapt to the Markdown source through Content Collections, schemas, layouts, components, CSS, and custom Markdown processing when needed.

## 2026-04-25 — Use The Current Folder As Project Root

Decision:
The `ag-wintergarten` folder is the project root.

Reason:
It keeps the Obsidian vault, project documentation, future Astro code, keyword research files, and Git workflow in one place.

Alternatives considered:
Creating a nested `astro-obsidian-site/` folder or delaying the root decision.

Rejected because:
A nested folder would add path confusion before the basic pipeline exists.

Consequences:
Layer 0 files are created directly under this root. Existing research files remain at the root until a later clean-up decision is made.

## 2026-04-25 — Use Current Astro Content Config Path

Decision:
When Content Collections are introduced, use `src/content.config.ts`.

Reason:
Current Astro documentation standardises build-time collections through `src/content.config.ts`.

Alternatives considered:
Using `src/content/config.ts` from the initial prompt structure.

Rejected because:
It does not match the current Astro documentation.

Consequences:
The planned file structure is adjusted for current Astro conventions before implementation starts.

## 2026-04-25 — Keep MDX Exceptional

Decision:
Use `.md` as the default content format. Use `.mdx` only for pages that genuinely need inline imported components or interactive composition.

Reason:
The source of truth should remain clean, portable Markdown wherever possible.

Alternatives considered:
Using MDX for all pages.

Rejected because:
It would make normal writing more developer-heavy and less Obsidian-friendly.

Consequences:
Reusable sections belong in Astro components and are controlled by frontmatter or layouts, not inline MDX by default.

## 2026-04-25 — Do Not Require A Columns Plugin In Layer 0

Decision:
Historical decision: preview a project-owned column callout in Obsidian with a lightweight CSS snippet instead of requiring a third-party columns plugin.

Reason:
The source syntax should stay clean and project-owned while Obsidian provides only approximate preview.

Alternatives considered:
Modular CSS Layout, Obsidian Columns, and Multi-Column Markdown.

Rejected because:
They are useful references but would introduce syntax or plugin dependency too early.

Consequences:
This no longer applies to public page content.

Status:
Superseded by later 2026-04-25 column decisions and finally by the semantic Markdown and Astro layout decision.

## 2026-04-25 — Use Obsidian Columns Plugin Syntax

Decision:
Historical decision: use the Obsidian Columns plugin callout syntax as the canonical multi-column authoring syntax for website Markdown.

Reason:
Obsidian Columns provides proper authoring preview without a custom CSS snippet, while keeping the source Markdown-like and parseable by Astro later.

Alternatives considered:
The earlier custom `[!col]` plus horizontal-rule pattern, `[!cols]` plus nested `[!col]`, codeblock columns, and list-based columns.

Rejected because:
They either require custom preview support, conflict with the chosen plugin convention, or are less suitable as the canonical source syntax for website content.

Consequences:
This no longer applies to public page content. Obsidian Columns is not required for the website content workflow.

Status:
Superseded by the later 2026-04-25 semantic Markdown and Astro layout decision.

## 2026-04-25 — Keep Public Markdown Semantic

Decision:
Public website page files in `src/content/pages/*.md` contain semantic page content only. Astro owns final visual layout and styling, including cards, grids, columns, process sections, FAQ sections, and CTA sections.

Reason:
Content should remain portable, readable, and durable without embedding layout instructions in the source copy. Visual presentation can evolve in Astro without rewriting page content.

Alternatives considered:
Requiring Obsidian Columns syntax, custom CSS snippet syntax, codeblock columns, list-based columns, and editorial sections inside public content files.

Rejected because:
They make layout conventions part of the content source or mix private production material into files intended for public rendering.

Consequences:
Multi-column syntax is not required in content files. Optional Obsidian preview enhancements are allowed for private authoring comfort, but they do not define source-of-truth syntax. Private page briefs, client questions, internal TODOs, publish checklists, SEO notes, risks, and assumptions live in `docs/content-briefs/*.md`. Global page production tracking lives in `docs/wintergarten-content-tasks.md` or `docs/content-tasks/*.md`.

## 2026-04-25 — Use Layered Stability

Decision:
Implement one layer at a time and do not skip ahead.

Reason:
The pipeline is easier to trust when every layer is documented, understandable, and verifiable.

Alternatives considered:
Generating the full website structure immediately.

Rejected because:
It would introduce future complexity before the foundation is proven.

Consequences:
Layer 0 contains documentation and editor alignment only. Layer 1 will render one Markdown file and nothing more.
