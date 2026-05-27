---
version: 1.00
created: 2026-05-27
updated: 2026-05-27
---

# Section Whitelist

This project now treats content and layout as one system. Public Markdown should stay readable and semantic, but it should be drafted with the approved website section families in mind.

The first implemented whitelist lives in `ω┇site/src/lib/section-whitelist.ts`. The section renderer maps known headings to approved section types, variants, and layouts.

## Current Section Families

- Hero: rendered by Astro, not public Markdown.
- Routing: page-entry cards for choosing the relevant service path.
- Early contact: short low-friction CTA near the upper page.
- Diagnostic grid: symptoms, fit checks, causes, and observations.
- Split media explainer: text with a strong image left or right.
- Service scope: practical explanation of repairable or checkable areas.
- Compact explainer: concise supporting copy or boundaries.
- Process: dark band with clear steps.
- FAQ: lower-page static rows.
- Contact/form: main conversion area.
- Footer: practical business footer.

## Writing Rules

- Put contact options early; do not make visitors complete a long information-gathering task before enquiry.
- Use diagnostic grids for scannable symptoms and fit checks.
- Use split media sections where the image adds practical context.
- Keep deeper SEO/supporting explanations lower on the page.
- Use real buttons only for actions. Do not style passive labels as buttons.
- Keep the rain, water ingress, repair, and blue visual identity central for this site.

## Variation Rules

Approved sections may vary by:

- image left or image right
- compact or standard spacing
- light or dark treatment
- CTA or no CTA
- paragraph-only or paragraph plus list
- diagnostic cards or compact explanatory copy

Variation should support the page flow. It should not create obvious repetition where each section feels like the same block with different words.
