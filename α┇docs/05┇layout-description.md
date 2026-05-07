---
version: 1.03
created: 2026-05-01
updated: 2026-05-02
---

# Layout Description

This file describes the first structural layout direction for the Astro build. It is based on the canonical homepage draft in `ω┇site/src/content/pages/startseite.md` and the flagship service page draft in `ω┇site/src/content/pages/wintergarten-reparatur-berlin.md`.

Keep this as implementation guidance, not final visual design polish. Public Markdown remains semantic content; Astro owns layout, rendering, reusable components, styling, and contact controls.

## Shared Page Structure

Pages should use a practical service-site structure with a clear header, readable main content, and repeated contact opportunities. The first build should support a linear mobile-first reading flow before adding richer layouts.

The main content area should keep a comfortable reading width and clear heading hierarchy. Homepage content should prioritise routing and decision support. Service pages should prioritise enquiry conversion and practical problem framing.

## Header

The header should quickly communicate the brand or site identity, repair/refurbishment positioning, simple navigation, and a direct contact path.

Expected header contents:

- Brand or site name.
- Navigation to the homepage, repair page, leak page, and future approved priority pages.
- A contact entry point using confirmed channels once details are supplied.

Do not add proof claims, certifications, reviews, or exact local areas in the header unless confirmed.

## Footer

The footer should reinforce service area, contact options, and basic navigation without becoming a second homepage.

Expected footer contents:

- Short service-area note for Berlin, Brandenburg, and nearby cities within roughly one hour drive.
- Confirmed contact channels once public details are supplied.
- Links to key content pages.
- Legal/navigation links once those pages exist.

## CTA And Contact Blocks

CTA blocks should appear near the top as an early action path and near the end as a closing action. The page Markdown should provide the surrounding text; Astro should render the reusable block and buttons.

The contact/form block should be a reusable section fed by confirmed phone, contact form, and WhatsApp details. Until those details are supplied, page copy should mention only the confirmed channels and avoid ordering them as a preferred path.

## FAQs And Internal Links

FAQs can remain plain Markdown headings and paragraphs in content files. Astro may wrap FAQ sections consistently later, but the Markdown should not encode accordion or card behaviour.

Internal links should point only to existing public pages unless a planned-link convention is explicitly approved. The current first build may link to `/wintergarten-reparatur-berlin/` and `/wintergarten-undicht/` because both pages render.

## Reusable Sections For Now

Extract only the pieces that clearly repeat across the first pages:

- Header.
- Footer.
- Primary CTA block.
- Contact/form block.
- FAQ wrapper.
- Optional service-area note.

Keep page-specific explanations, symptoms, process text, routing copy, and service detail in Markdown for now. Do not create a large component system before the first pages render cleanly.
