---
version: 1.03
created: 2026-05-08
updated: 2026-05-10
---

# Content Quality Playbook

This file is the writing standard for public website content. Read it before creating or rewriting any page in `ω┇site/src/content/pages/*.md`.

The goal is to make AG Wintergarten sound like a real Berlin-area repair business: practical, specific, useful, and careful with claims. Safety still matters, but cautious copy must not become generic filler.

This playbook governs writing quality, practical usefulness, page differentiation, and layout-aware content shaping. Public Markdown must stay semantic, but the content should still be written in a way that helps Astro render real website sections rather than long generic articles.

## Required Workflow

Use this workflow before major public page work.

### Phase 0: Source Discipline

Confirm these items before drafting:

- target page path in `ω┇site/src/content/pages/*.md`
- page type
- main keyword and search intent
- active, draft, or blocked status
- whether the service topic is confirmed, conditionally allowed, or still uncertain

If any item is unclear, stop and report the uncertainty instead of writing around it.

### Phase 1: Benchmark Intake

When screenshots or reference pages are supplied, review them before changing structure. For each reference, note:

- page type
- likely audience state
- section order
- use of imagery
- CTA behaviour
- tone
- whether it feels commercial, diagnostic, educational, or mixed

Classify observations into:

- usable structure
- usable layout rhythm
- usable image integration
- usable CTA pattern
- things to avoid
- conflicts with AG Wintergarten scope or tone

Do not copy competitor wording, proof language, trust signals, service scope, prices, product claims, or exact local claims. Benchmarks may shape structure and UX expectations only.

### Phase 2: Page Brief

Every major rewrite or new page needs a page brief in `β┇workbench/03┇content-intake-and-page-briefs.md`.

The brief must explain how the page differs from existing pages. If the difference is weak, do not draft yet.

### Phase 3: Recipe And Section Plan

Before drafting, choose the approved page recipe from `α┇docs/02┇content-strategy.md` and the approved section types from `α┇docs/05┇layout-description.md`.

The brief must define:

- page recipe
- selected sections
- allowed variants
- strongest visual sections
- intended CTA path
- sections that should stay compact
- sections that must not repeat another page

Do not create production-only section ideas during drafting. If a new section type seems necessary, document and approve it in the guidance system before using it on a live page.

### Phase 4: Evidence Pack

Priority pages need a mini evidence pack before drafting. Include:

- common homeowner observations
- likely affected parts or zones
- useful enquiry details
- what can often be narrowed down from description and photos
- what cannot be judged without inspection
- false assumptions to avoid
- related internal links
- safe business-specific terminology

The evidence pack is not proof. It is practical diagnostic preparation. Do not create case studies, reviews, photos, or years-of-experience claims from it.

### Phase 5: Draft

Write from the homeowner's actual state. Lead with the problem or fit question:

- Am I in the right place?
- Does this sound like my kind of issue?
- What should I look at next?

Keep the draft service-led, specific, and inspection-aware. Do not optimise for sounding polished at the expense of usefulness.

Draft section by section. Do not draft a full article and then divide it later. Each section should have a defined function before copy is written.

### Phase 6: QA Gate And Report

Before calling a page ready, run the QA checklist in this playbook. After each significant rewrite or new page draft, report:

- what page was worked on
- what page job was used
- how it was differentiated from similar pages
- what benchmark influence was applied, if any
- what practical-value upgrades were introduced
- what remained intentionally cautious or inspection-dependent
- what still needs owner confirmation

## Target Voice

Use a Practical Expert voice.

The page should feel:

- direct and calm
- service-led rather than article-like
- useful to a homeowner with a real problem
- concrete about symptoms, components, and enquiry details
- cautious without hiding behind repeated disclaimers
- commercial enough to help the visitor make contact

Avoid aggressive sales language, fake urgency, clever slogans, and highly technical trade documentation. The reader should feel: “This business understands the kind of problem I have and knows what to check next.”

## Claim Hierarchy

Use this order when deciding what can be written:

1. Confirmed client facts from `α┇docs/03┇client-info.md`
2. Already approved public page copy
3. General educational explanation about common symptoms, causes, and enquiry preparation
4. Cautious wording for unknowns

Never invent proof. Do not add prices, guarantees, emergency promises, response times, reviews, certifications, case studies, manufacturer partnerships, years of experience, exact districts, exact towns, or named products unless they are confirmed.

If a useful statement needs an unconfirmed fact, do not put it into public copy. Add it as an open question in the workbench.

## Avoid AI-Smell

Avoid copy that sounds generated because it is too balanced, too abstract, too symmetrical, or too repetitive.

Do not overuse:

- `je nach Schadensbild`
- `kann sinnvoll sein`
- `nach Prüfung`
- `Diese Seite erklärt...`
- generic intros that restate the page title
- repeated lines about photos and first assessment
- abstract service lists without homeowner context
- neutral encyclopedia paragraphs
- multiple sections that say the same thing in different words

Use cautious language where it matters, but make the caution specific. Instead of repeating that everything depends on inspection, explain what exactly must be checked and why.

Reject or rewrite content that:

- could fit almost any repair website
- feels like a school essay about the topic
- repeats the same caveat across three sections
- fills space without improving homeowner decision-making
- treats all sections with the same informational weight

## Page Job

Every page needs one clear commercial job.

- Homepage: route visitors quickly to the right topic and contact path
- Repair page: convert broad repair, refurbishment, and component-damage enquiries
- Leak page: handle urgent water ingress and roof leak diagnosis intent
- Dichtungen page: own seal, gasket, profile, and glazing-seal problems
- Sanierung page: own broader refurbishment decisions for ageing existing structures
- Fundament page: own foundation questions only within confirmed scope
- Supporting pages: solve one concrete problem and link back to the core repair cluster

If a section does not support the page job, compress it or remove it.

## Page Type Personality

Homepage:

- Job: orient, qualify, route, and open the contact path
- Feel: broad enough to orient, tight enough to be useful, not a long article and not a company biography
- Avoid: turning every service into a full explanation

Repair page:

- Job: show service fit, clarify what repair can cover, and help the reader recognise whether their case belongs here
- Feel: service-led, practical, capability-focused, distinct from the homepage and leak page
- Avoid: overfocusing on water ingress or becoming a general routing page

Leak page:

- Job: reduce confusion, narrow likely causes, and guide the reader towards a useful enquiry
- Feel: problem-first, observational, slightly more urgent, more diagnostic than the repair page
- Avoid: promising emergency service or diagnosing the exact entry point without inspection

Narrow service pages:

- Job: address one focused problem cluster without becoming thin or repetitive
- Feel: technically bounded and clearly narrower than the main repair page
- Avoid: copying the repair page's broad scope

## Required Page Brief

Before creating or rewriting a public page, prepare or update a brief in `β┇workbench/03┇content-intake-and-page-briefs.md`.

The brief must define:

- page path
- page type
- page goal
- approved page recipe
- selected approved sections
- intended section variants
- strongest visual sections
- search intent
- target reader state
- keyword ownership
- homeowner scenario
- confirmed services
- excluded or risky claims
- likely symptoms and causes
- information the customer should send
- what the page must not drift into
- what remains inspection-dependent
- benchmark influence, if supplied
- CTA path
- internal links
- proof gaps
- image notes where relevant
- section emphasis where relevant

Do not treat open questions in a page brief as facts. Move confirmed answers to `α┇docs/03┇client-info.md` before using them as claims.

## Section Quality Rules

A strong service page should answer these questions:

- What is probably happening?
- What should the homeowner look at or observe?
- What information should they send?
- What can be checked by the business?
- What remains dependent on inspection?
- What is the next contact action?

Each major section should contain at least one concrete detail: a symptom, component, access issue, weather pattern, photo angle, decision point, or customer observation.

Good section ingredients:

- symptoms such as drips, standing water, draughts, hard seals, loose profiles, blocked drainage, or damaged panels
- likely causes such as ageing seals, roof or wall connections, glazing edges, drainage paths, Stegplatten, profiles, or moving elements
- customer observations such as when it happens, where water appears, whether wind direction matters, whether previous repairs exist
- safe photo guidance such as inside view, overview, accessible exterior view, roof edge, connection area, profile, seal, or drainage point
- inspection logic such as why a visible drip can be away from the actual entry point

Weak section patterns:

- broad lists with no situation
- “we help with...” without explaining when or why
- repeated `Fotos helfen bei der Einschätzung`
- repeating the same inspection caveat on every page
- FAQ answers that restate earlier paragraphs without adding a decision point

## Layout-Aware Content Shaping

Public Markdown must stay semantic, but it should still be written in blocks that support real website sections.

Write content through the approved recipe and section system. Each H2 section should correspond to an approved functional website section unless the page brief explains why a compact support section is needed.

Write content so it can support:

- hero areas
- routing cards
- diagnostic card grids
- split image/text sections
- process sections
- FAQ wrappers
- CTA/contact blocks
- service-area notes

Do not write everything as one continuous article. Build clear content units.

The writer should assume the layout layer may emphasise some sections more strongly than others. Therefore:

- not all sections should feel equal in weight
- one or two sections should carry the main practical value
- routing sections should stay concise
- process sections should stay compact
- FAQ sections should add decisions or clarifications, not repetition
- image-supported sections should explain or clarify something, not merely decorate

## Controlled Creative Freedom

The section system is a constraint, not a dead template. Use it to prevent article drift while still allowing page-specific rhythm.

Allowed freedom:

- vary the lead sentence and paragraph length by page intent
- choose image-left or image-right variants where approved
- make one middle section stronger when it carries the practical value
- use lists, cards, or compact prose according to the approved section type
- reorder optional sections if it improves the page job

Not allowed:

- inventing a new production section because a draft feels awkward
- using identical section sequences on every page without a reason
- repeating the same diagnostic grid pattern several times
- using a CTA that has no real destination
- turning service pages back into generic articles

If a page feels repetitive, first adjust section emphasis, section length, or allowed variation before adding a new section type.

## Suggested Section Order

Suggested section order for homepage:

1. Hero
2. Routing section
3. Fit or what the site helps with
4. Split explainer for what can be checked
5. Typical problems or reasons for enquiry
6. What is useful before a recommendation
7. How an enquiry works
8. Service area
9. FAQ
10. Closing CTA

Suggested section order for repair page:

1. Hero
2. When repair is likely relevant
3. Typical repair cases
4. Relevant work areas
5. What to send before inspection
6. What remains inspection-dependent
7. Process
8. Local area
9. FAQ
10. CTA

Suggested section order for leak page:

1. Hero
2. Diagnostic fit check
3. What owners usually notice first
4. What may be causing it
5. Clarification or false-assumption explainer
6. What to observe or document
7. How to send a useful enquiry
8. Process or service area where useful
9. FAQ
10. CTA

Do not force identical section sequences onto every page. Use the order that best supports the page job.

## German Copy Guidance

Write public pages in German.

Prefer natural service language:

- short paragraphs
- concrete nouns
- direct verbs
- customer-facing explanations
- useful questions and observations
- precise but cautious claims

Prefer wording such as:

- `Wenn Wasser nach Regen an der Innenseite sichtbar wird...`
- `Hilfreich sind Fotos von innen, eine Gesamtansicht und ein sicher erreichbarer Blick auf den Anschlussbereich.`
- `Vor einer Abdichtung sollte geklärt werden, ob Wasser über Dichtung, Profil, Anschluss oder Entwässerung eintritt.`
- `Nach der Schadensprüfung kann besprochen werden, welche Arbeit zum Befund passt.`

Avoid flat phrasing such as:

- `Diese Seite informiert über...`
- `Es gibt viele Ursachen...`
- `Je nach Schadensbild kann dies oder jenes sinnvoll sein...`
- `Kontaktieren Sie uns für weitere Informationen.`

## Local Relevance

Berlin and Brandenburg relevance should feel real but not overclaimed.

Allowed when useful:

- existing buildings and later-added structures
- varied winter garden constructions
- weather exposure, rain, wind direction, and temperature changes
- access and photos from safe positions
- broad service area: Berlin, Brandenburg, and nearby cities within roughly one hour drive

Do not name districts, towns, neighbourhoods, excluded areas, local case studies, or local proof until confirmed.

## Layout Awareness And Image Readiness

Public Markdown must remain semantic. Do not add layout instructions, component syntax, grid syntax, card syntax, FAQ accordion syntax, JSX, MDX, Dataview, transclusions, or wikilinks.

Still write with the Astro layout in mind. Content should give the layout layer clean blocks for:

- hero areas
- routing cards or lists
- image blocks
- CTA blocks
- contact/form blocks
- FAQ wrappers
- service-area notes

Prepare drafts so images can be integrated later:

- identify where a hero image would strengthen the page
- identify where a diagnostic or supporting image could clarify the topic
- keep nearby text factual and useful
- avoid captions that imply a real project, before-and-after proof, or specific material unless approved

Do not assume images exist unless supplied or the image is explicitly a neutral placeholder.

## CTA Standard

Use only confirmed contact channels:

- phone
- contact form
- WhatsApp

Do not invent contact details, preferred order, response times, emergency service, or fixed inspection process.

CTA copy should be concrete:

- describe the problem
- send photos if available and safe
- include the location
- mention when the issue occurs
- mention previous repair attempts when relevant

Avoid vague CTA copy such as `Jetzt unverbindlich anfragen` unless the wording and commercial claim are confirmed. Do not invent contact details, a preferred channel order, response times, or a fixed process.

## Content QA Checklist

Run this checklist before setting a page to `draft: false` or calling it publish-ready.

- Claim safety: no invented prices, guarantees, emergency promises, reviews, certifications, years of experience, named locations, case studies, products, or partnerships
- Specificity: every major section includes concrete symptoms, components, observations, or enquiry guidance
- Usefulness: a homeowner can inspect safely, describe the issue better, and understand the next step before contacting
- Differentiation: the page has a distinct commercial job and does not repeat another page
- Conversion clarity: the page explains how to enquire using only confirmed channels
- Local fit: Berlin/Brandenburg wording is useful but does not overclaim exact areas
- Proof gaps: missing photos, examples, process details, and scope details are captured in the workbench
- Markdown hygiene: semantic headings, paragraphs, lists, and approved images only; no layout syntax, JSX, MDX, Dataview, transclusions, or wikilinks
- Section rhythm: the page does not feel like one long article or a run of near-identical sections
- Website feel: the content supports routing, diagnosis, contact, and visual hierarchy rather than reading like an essay

If a page fails the checklist, keep it in draft or update the workbench with the unresolved blocker.
