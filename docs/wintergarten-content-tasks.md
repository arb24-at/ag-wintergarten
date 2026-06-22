---
title: Wintergarten Content Tasks
type: content-task-tracker
status: active
created: 2026-04-25
updated: 2026-04-26
version: 1.04
---

# Wintergarten Content Tasks

This file is for planning only. It is not public website content.

## Current Structure Decision

Public page files in `src/content/pages/*.md` contain semantic website content only.

Private planning belongs in:

- `docs/content-briefs/*.md` for page briefs, client questions, internal TODOs, publish checklists, SEO notes, risks, and assumptions.
- `docs/wintergarten-content-tasks.md` for global page production tasks and page status tracking.

Astro controls final visual layout and styling, including cards, grids, columns, process sections, FAQ sections, and CTA sections.

## Page Patterns

### `homepage_v1`

Required semantic structure:

- H1 with repair-first local positioning.
- Kurzüberblick.
- Key help points and links to existing pages.
- Repair and inspection focus.
- Leak-focused section.
- Typical damage.
- Enquiry process.
- Local area.
- Why careful inspection matters.
- FAQ.
- CTA.

Astro may later render selected sections as cards, grids, columns, process steps, FAQ accordions, or CTA blocks based on layout and component logic. The Markdown file should not force those visual decisions.

### `local_service_page_v1`

Required semantic structure:

- H1 with primary service and location.
- Kurzüberblick.
- Key signs and useful request details.
- When the service is useful.
- Typical damage and causes.
- Service explanation.
- Process.
- Local area.
- Why professional inspection matters.
- FAQ.
- CTA.

Astro may later render selected sections as cards, grids, columns, process steps, FAQ accordions, or CTA blocks based on layout and component logic. The Markdown file should not force those visual decisions.

### `problem_service_page_v1`

Required semantic structure:

- H1 with primary problem keyword.
- Kurzüberblick.
- Key signs and useful request details.
- Why the problem happens.
- Specific problem scenario or damage type.
- Service explanation.
- Typical technical causes.
- Process.
- Local area.
- Why professional inspection matters.
- FAQ.
- CTA.

Astro may later render selected sections as cards, grids, columns, process steps, FAQ accordions, or CTA blocks based on layout and component logic. The Markdown file should not force those visual decisions.

### `service_supporting_page_v1`

Required semantic structure:

- H1 with primary service topic.
- Kurzüberblick.
- Key signs and useful request details.
- When the service is useful.
- Typical causes.
- Service explanation.
- Process.
- Local area.
- Why professional inspection matters.
- FAQ.
- CTA.

Astro may later render selected sections as cards, grids, columns, process steps, FAQ accordions, or CTA blocks based on layout and component logic. The Markdown file should not force those visual decisions.

## P1 Pages

- `/` — drafted; brief active; needs client answers and SEO review.
- `/wintergarten-reparatur-berlin/` — drafted; brief active; needs client answers and SEO review.
- `/wintergarten-dichtungen-erneuern/` — not started; high repair-only fit.
- `/wintergarten-sanierung/` — not started; depends on confirmed renovation/refurbishment scope.
- `/wintergarten-kaufen-bauen/` — blocked until full-service/new-build scope is confirmed.
- `/wintergarten-undicht/` — drafted; brief active; needs client answers and SEO review.
- `/wintergarten-kosten-preise/` — blocked or reframed until repair-only vs full-service scope is confirmed.
- `/wintergarten-berlin/` — blocked or reframed to avoid overlap with `/wintergarten-reparatur-berlin/`.

## P2 Pages

- `/fenster-abdichten/` — drafted; brief active; needs client answers and SEO review; keep only if separate window-sealing service is confirmed.
- `/wintergarten-stegplatten-erneuern/` — not started; useful if panel work is confirmed.
- `/wintergarten-anbau/` — blocked until new-build/conversion scope is confirmed.
- `/wintergarten-ueberdachung/` — blocked until roofing, terrace cover, or conversion scope is confirmed.
- `/wintergarten-beschattung/` — blocked until shading retrofit/service scope is confirmed.
- `/wintergarten-isolieren/` — not started; useful if insulation, glazing, sealing, or comfort upgrades are confirmed.
- `/wintergarten-baugenehmigung/` — blocked unless new builds, extensions, or conversions are confirmed.
- `/kaltwintergarten/` — blocked until sales/build scope is confirmed.
- `/wohnwintergarten/` — blocked until sales/build scope is confirmed.
- `/sommergarten/` — blocked until sales/build scope is confirmed.

## P3 Pages

- `/wintergarten-selber-bauen/` — postponed; DIY-heavy and likely low-fit for repair-only.
- `/wintergarten-bausatz/` — postponed unless kit sales are confirmed.
- `/wintergarten-heizen/` — postponed; possible support page for insulation/renovation later.
- `/aluminium-wintergarten/` — postponed unless material-specific sales, repair, or refurbishment scope is confirmed.
- `/holz-wintergarten/` — postponed unless timber repair/restoration or build scope is confirmed.
- `/glas-wintergarten/` — postponed unless glazing, sealing, or glass roof repair scope is confirmed.

## Blocked Pages

Blocked pages must not be drafted until the client confirms service scope:

- New build, sales, and bespoke construction pages.
- Pricing pages that imply new-build costs.
- Type pages for cold, residential, or summer winter gardens.
- Permit and extension pages.
- Material pages that would imply services the client does not offer.

## Repair-First Recommended Sequence

1. `/wintergarten-reparatur-berlin/`
2. `/wintergarten-undicht/`
3. `/wintergarten-dichtungen-erneuern/`
4. `/wintergarten-sanierung/`
5. `/wintergarten-stegplatten-erneuern/`
6. `/wintergarten-isolieren/`

## Full-Service Pages To Decide Later

Create these only if the client confirms that they sell, plan, build, extend, or convert winter gardens:

- `/wintergarten-kaufen-bauen/`
- `/wintergarten-kosten-preise/`
- `/wintergarten-berlin/`
- `/wintergarten-anbau/`
- `/wintergarten-ueberdachung/`
- `/kaltwintergarten/`
- `/wohnwintergarten/`
- `/sommergarten/`
- Material and permit guides.

## Global Client Questions

- Is the business repair-only, full-service, or mixed?
- Which winter garden repair services are actually offered?
- Which services should not be advertised?
- Is the service area Berlin only, Berlin plus surrounding Brandenburg, or selected districts/regions?
- Are leak inspections offered before repair quotes?
- Are seals, glazing, roof connections, drainage, profiles, doors, or panels repaired or replaced?
- Should price ranges be mentioned, or should pricing stay enquiry-based?
- Which CTA is preferred: phone, email, contact form, or callback request?
- Which contact details should be used publicly?
- Are photos, case studies, or before-and-after examples available and approved?

## Agent Responsibilities

- Create one public page at a time.
- Keep public content in `src/content/pages/*.md` semantic and free of private planning material.
- Keep page briefs in `docs/content-briefs/*.md`.
- Update this task tracker when page status changes.
- Do not create routing, schemas, layouts, components, or Astro files during content-only tasks.
- Preserve cautious wording until client facts are confirmed.
- Avoid fake prices, guarantees, emergency service claims, certifications, years of experience, and unapproved case studies.
