---
version: "1.02"
created: 2026-04-25
updated: 2026-04-25
---

# Workspace Setup

Layer 0 aligns Obsidian and VS Code before any website code is written.

The working model is:

```txt
Obsidian = writing, editing, approximate preview
VS Code = development, validation, Git, Astro build
Astro = final production rendering
```

## Project Root

Open this folder as both the VS Code workspace and the Obsidian vault:

```txt
ag-wintergarten/
```

Keeping one project root reduces path confusion between writing, development, validation, and Git.

## Obsidian Settings

Recommended Obsidian settings:

- Use Live Preview for normal writing and Reading View for closer callout preview.
- Set Properties in document to Source or Visible, depending on preference. Source is best when reviewing YAML exactly.
- Keep Strict Line Breaks enabled if you want Markdown line breaks to behave closer to standard Markdown.
- Avoid turning research dashboards into website content unless they follow Obsidian Website Markdown.

Website Markdown will eventually live in `src/content/**/*.md`. Until Layer 1 creates that folder, use the documentation in `docs/` to define the rules.

## Obsidian Plugins

Required community plugins for website content authoring:

- None.

Recommended later, but not required now:

- A linting or templates plugin may help standardise frontmatter after the first content files exist.
- A callout helper plugin may help authors insert callouts faster.
- Optional preview plugins may help individual writers, but they must not define required source-of-truth syntax for public page files.

Do not require Dataview, Canvas, columns plugins, publishing plugins, export automation, or custom CSS snippets for the core website pipeline.

## Semantic Page Authoring

Website page files should stay semantic:

```txt
Markdown = semantic page content
Astro = final visual layout and styling
Obsidian = readable writing environment
```

Use normal Markdown headings, paragraphs, lists, links, images, and frontmatter in public page files. Astro layouts and components are responsible for rendering final visual layout, including cards, grids, columns, process sections, FAQ sections, and CTA sections.

Do not put client questions, internal TODOs, publish checklists, SEO notes, or agent instructions inside public content files. Keep those in `docs/content-briefs/` or `docs/wintergarten-content-tasks.md`.

Optional Obsidian preview enhancements are allowed for private writing comfort, but they are not part of the required content workflow.

## Obsidian Unsupported Features

Do not use these in website content:

- Dataview or `dataviewjs`.
- Canvas.
- Transclusions.
- Complex embeds.
- Arbitrary plugin syntax.
- Inline JSX or MDX.

The existing dashboard file uses `dataviewjs` and should stay outside the website pipeline unless rewritten.

## VS Code Extensions

Recommended extensions are listed in `.vscode/extensions.json`:

- `astro-build.astro-vscode` for Astro syntax, TypeScript support, and IntelliSense.
- `esbenp.prettier-vscode` for formatting support.

Do not add large extension sets before the basic pipeline exists.

## VS Code Settings

Workspace settings are intentionally minimal:

- Markdown wraps naturally for writing.
- Markdown format-on-save is disabled to avoid surprising prose and frontmatter changes.
- Astro files will use the Astro extension formatter once Astro files exist.
- Markdown validation is enabled.

These settings support the pipeline without turning VS Code into a CMS.

## Formatting Policy

For Layer 0, do not auto-format Markdown on save. Documentation should remain readable and stable.

Prettier may be introduced as a project script later, after Astro exists and we decide whether to format Markdown, Astro, TypeScript, CSS, or only code files.

ESLint is not needed in Layer 0. Add it later only if TypeScript or Astro code complexity justifies it.

## Development Commands

Layer 0 has no Astro project yet, so there are no local Astro commands to run.

Layer 1 will introduce commands similar to:

```txt
npm install
npm run dev
npm run build
npm run preview
```

Use these only after `package.json` exists.

## Validation Before Committing

For Layer 0:

- Check that Markdown docs begin with required frontmatter.
- Check that `.vscode/*.json` files parse as valid JSON.
- Read `docs/obsidian-authoring.md` to confirm supported and unsupported syntax is clear.
- Keep Layer 1 code out of the branch until Layer 0 is accepted.

For future Astro layers:

- Run the Astro dev server while editing.
- Run the build command before committing.
- Treat Content Collection schema failures as real content errors.

## Git Workflow

Git is the versioning and review layer. Once the repository is initialised, use small commits by layer:

```txt
Layer 0: workspace documentation and editor alignment
Layer 1: one Markdown file rendered by Astro
Layer 2: Content Collection schema validation
```

Do not mix deployment, routing, component systems, and Markdown processing into the same foundational commit.

## Shared Conventions

- Use British English in project documentation.
- Use Markdown as the source of truth.
- Do not use MDX by default.
- Do not generate mirror files by default.
- Keep media in the correct future location: `src/assets/` for Astro-processed assets and `public/` for untouched static files.
- Use lower-case, hyphenated file names for future website content.
- Keep every Markdown file frontmatter-first.
- Move layer by layer and document decisions as they are made.

## Known Limitations

Layer 0 does not render a website. It only aligns authoring and development behaviour.

Obsidian preview is useful for writing but is not production HTML.

Content validation, schema enforcement, routing, design tokens, layouts, and custom Remark/Rehype processing begin in later layers.
