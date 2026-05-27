---
version: 1.15
created: 2026-04-25
updated: 2026-05-27
---

# Decision Log

This file records durable project decisions so the project does not repeatedly revisit settled foundations. It is for architecture, workflow, and content-system choices, not daily tasks, content checklists, or meeting notes.

## 2026-04-25 — Markdown Is The Canonical Source

Website content is stored as Obsidian-readable `.md` files by default. Markdown remains readable, editable, Git-versionable, and understandable without a database, CMS UI, generated mirror files, or MDX as the default format.

Consequence:
Astro must adapt to Markdown through future Content Collections, schemas, layouts, components, CSS, and documented Markdown processing.

## 2026-04-25 — Keep Public Markdown Semantic

Public website page files in `ω┇site/src/content/pages/*.md` contain semantic page content only. Astro owns final visual layout and styling, including cards, grids, columns, process sections, FAQ sections, and CTA sections.

Consequence:
Do not encode visual layout rules or private planning material in public content. Keep client questions, internal TODOs, publish checklists, SEO notes, risks, and assumptions in `β┇workbench/01┇content-actions.md`.

## 2026-04-25 — Use Current Astro Content Config Path

When Content Collections are introduced, use `ω┇site/src/content.config.ts`, matching current Astro documentation.

Consequence:
Do not use the older `src/content/config.ts` path unless Astro conventions change.

## 2026-04-25 — Build Layer By Layer

Add only the structure required by the active milestone. The project currently has Markdown content drafts and planning files, but not an Astro scaffold.

Consequence:
Do not add routing, schemas, layouts, components, deployment automation, or media folders unless the task explicitly introduces that layer.

## 2026-05-01 — Separate Agent Docs From Human Workbench

`α┇docs/` is now a compact agent-facing context pack. Human action items, page briefs, client questions, task tracking, and research snapshots live in `β┇workbench/`.

Consequence:
Agents should read `α┇docs/01┇project.md` and `α┇docs/02┇content-strategy.md` for durable context, then use `β┇workbench/01┇content-actions.md` for current human follow-up and page-level decisions.

## 2026-05-01 — Keep Codex UI Instructions Separate

`.codex-home/AGENTS.md` is treated as Codex runtime/UI-generated instruction state and should not be moved into project documentation.

Consequence:
Project-specific context belongs in `α┇docs/`; generated Codex home files are not part of the website information architecture.

## 2026-05-01 — Use Astro-Compatible Numeric Versions

Markdown frontmatter versions use unquoted dot-decimal numeric values such as `version: 1.02`.

Consequence:
This keeps the property numeric for Obsidian while avoiding comma-decimal parsing ambiguity in Astro/YAML tooling.

## 2026-05-01 — Separate Open Questions From Confirmed Client Facts

Open human/client follow-up stays in `β┇workbench/01┇content-actions.md`. Confirmed client facts live in `α┇docs/03┇client-info.md`.

Consequence:
Agents should not treat open questions as facts. Public copy can rely only on confirmed facts or already approved page copy.

## 2026-05-01 — Use Prefixed Docs And Workbench Structure

The project uses visual prefixes for documentation and workbench organisation: `α┇docs/` for durable source-of-truth context and `β┇workbench/` for temporary human action material.

Consequence:
Use two-digit file prefixes inside those folders, such as `01┇project.md`. Do not prefix `src/`, because future Astro paths should remain conventional.

## 2026-05-01 — Use Greek Top-Level Workspace Prefixes

Top-level documentation and workbench folders use lowercase Greek prefixes: `α┇docs/` and `β┇workbench/`.

Consequence:
Greek prefixes keep project support folders visually ordered without looking like implementation priority numbers. Keep subfolders such as `research/` unprefixed.

## 2026-05-02 — Create Minimal Astro Preview Scaffold

The first Astro build layer renders only approved non-draft Markdown content from `ω┇site/src/content/pages/`. `startseite.md` renders as `/`, and service pages render through `ω┇site/src/pages/[...slug].astro` only when `draft: false`.

Consequence:
Keep unfinished pages as `draft: true`. Do not rely on files in `ω┇site/src/content/pages/` becoming public automatically; routing must intentionally select them.

## 2026-05-02 — Confine Astro App To Dedicated Folder

The Astro app lives in `ω┇site/` so the repository root stays focused on docs, workbench, dashboards, Git metadata, and GitHub workflow files.

Consequence:
Run local Astro commands from `ω┇site/`. GitHub Pages uses the official Astro action with `path: ω┇site`.

## 2026-05-02 — Use Omega Site Folder

The dedicated Astro app folder is named `ω┇site/`.

Consequence:
Use `ω┇site/` for all Astro package, config, source, build, and local development work.

## 2026-05-08 — Require Briefs, Evidence Packs, And Benchmark Intake For Major Pages

Important page rewrites and new priority service pages require source discipline before drafting. Agents must confirm the target path, page type, keyword intent, publication status, and whether the service topic is confirmed, conditionally allowed, or blocked.

When screenshots or reference pages are supplied, agents must analyse them as benchmark material before changing structure. Benchmark notes may influence section order, visual rhythm, image placement, routing behaviour, CTA placement, and page feel. They must not be treated as client facts, proof, service scope, trust language, or text to copy.

Consequence:
Major content work should proceed through benchmark intake where relevant, page brief, mini evidence pack, draft, QA gate, and supervisor report. Public Markdown stays semantic, and all uncertainty remains in the workbench until confirmed.

## 2026-05-10 — Use Recipe-Based, Section-Aware Content Production

Public pages are now planned through approved page recipes and a whitelist of functional website sections before copy is drafted. The project is moving away from article-first writing with later layout adaptation.

Consequence:
Agents must identify page type, choose the approved recipe, select approved sections, choose allowed variants, and update the page brief before major public page edits. Public Markdown remains semantic; Astro maps the known section structure into website blocks. New production section types must be documented in the guidance system before they are used on live pages or in renderer mappings.

## 2026-05-27 — Use Classic Compact Trade Website Direction

The active visual direction is a compact classic trade-service website rather than a document-like technical layout. The site may use a two-row header, strong rectangular panels, local placeholder contact details, generated placeholder photos, tighter section spacing, and a stronger footer/contact area while keeping public Markdown semantic.

Consequence:
Older design notes in `α┇docs/` are historical context, not hard blockers. Update the docs after visual implementation when the site direction changes materially.

## 2026-05-27 — Introduce Whitelist Section System

Content and layout now develop together through a practical whitelist of allowed section families, variants, and layouts. The first implementation lives in `ω┇site/src/lib/section-whitelist.ts` and is applied by the Markdown section renderer.

Consequence:
Public Markdown remains semantic, but new page copy should be written for approved website sections rather than as article prose that is styled afterwards. New section families or variants should be added deliberately and documented before becoming the normal pattern.
