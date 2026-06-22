---
version: "1.03"
created: 2026-04-25
updated: 2026-04-25
---

# File Structure

This document explains the current project structure, the Layer 0 files, and the intended future Astro structure. Do not create future-layer folders until their layer requires them.

## Current Root

The project root is:

```txt
ag-wintergarten/
```

Current non-Astro files:

```txt
🚦┇Wintergarten SEO.md
keywords v1.json
keywords v2.json
keywords v3.json
```

`DASHBOARD┇Wintergarten SEO.md` is an Obsidian dashboard/research file and currently uses `dataviewjs`, which is not part of Obsidian Website Markdown. The keyword JSON files are research inputs, not website content collections.

## Layer 0 Files

Layer 0 adds only workspace documentation and minimal VS Code recommendations:

```txt
.vscode/
  extensions.json
  settings.json
docs/
  content-briefs/
    wintergarten-reparatur-berlin.md
  architecture.md
  decision-log.md
  file-structure.md
  obsidian-authoring.md
  website-map.md
  wintergarten-content-tasks.md
  workspace-setup.md
```

`docs/architecture.md` explains the Markdown-first architecture and future Astro rendering layers.

`docs/decision-log.md` records architectural decisions so they are not repeatedly reopened.

`docs/file-structure.md` explains current and planned folders.

`docs/obsidian-authoring.md` defines Obsidian Website Markdown, including the rule that public page files contain semantic content rather than visual layout instructions.

`docs/website-map.md` maps keyword clusters into a first website structure without creating page content.

`docs/workspace-setup.md` explains how Obsidian and VS Code should be configured for this pipeline.

`.vscode/extensions.json` recommends only essential extensions. `.vscode/settings.json` contains minimal workspace settings that support Markdown authoring and future Astro development.

## Content Separation

Public page content and private planning content must stay separate:

```txt
src/content/pages/*.md = public website page content only
docs/content-briefs/*.md = private page briefs, client questions, internal TODOs, publish checklists, SEO notes
docs/content-tasks/*.md or docs/wintergarten-content-tasks.md = global page production tasks and status tracking
```

Do not put client questions, internal TODOs, publish checklists, SEO notes, or agent instructions inside public content files.

## Future Layer 1 Structure

Layer 1 will introduce the smallest Astro proof:

```txt
src/
  content/
    pages/
      home.md
  pages/
    index.astro
astro.config.mjs
package.json
tsconfig.json
```

Layer 1 is only responsible for rendering one `.md` file. It must not add dynamic routing, reusable sections, custom Remark plugins, deployment, n8n, or MDX.

## Future Layer 2 And Later Structure

When Content Collections and validation are introduced, the project will use current Astro convention:

```txt
src/content.config.ts
```

Later layers may add:

```txt
public/
  favicon.svg
  robots.txt
  downloads/
src/
  assets/
    global/
    pages/
    services/
    shared/
  components/
    global/
    sections/
    ui/
  layouts/
  styles/
  lib/
    remark/
```

These folders are future-layer additions. They should be created only when the active milestone needs them.

## Media Rules

Use `src/assets/` for website media that Astro should process, optimise, import, or bundle.

Use `public/` for files that must be copied untouched and referenced by root URL, such as PDFs, favicons, `robots.txt`, verification files, and small static videos.

Do not duplicate the same image in both `src/assets/` and `public/`.

## Naming Rules

Use lower-case, hyphenated file names for website content once `src/content/` exists, for example `wintergarten-reparatur-berlin.md`.

Keep research files clearly separate from website content until a later layer decides whether to archive, rename, or move them.

Markdown documentation must begin with YAML frontmatter containing `version`, `created`, and `updated`.

## Semantic Content Rules

Website content files should use normal Markdown headings, paragraphs, lists, links, images, and frontmatter. They should not encode required visual layout such as columns, cards, grids, process styling, FAQ accordions, or CTA styling.

Astro layouts and components are responsible for rendering final visual layout, including cards, grids, columns, process sections, FAQ sections, and CTA sections.

Optional Obsidian preview enhancements are allowed for private authoring comfort, but they must not become required source-of-truth syntax.

## Rules For Adding Files

Before adding a file or folder, ask whether it is needed for the current layer. If it is future complexity, document it here or in the architecture notes instead of implementing it.

When structure changes significantly, update this document and add a decision to `docs/decision-log.md` if the change is architectural.
