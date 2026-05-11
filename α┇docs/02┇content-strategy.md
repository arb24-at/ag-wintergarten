---
version: 1.12
created: 2026-05-01
updated: 2026-05-10
---

# Content Strategy

The site should first win repair and refurbishment enquiries from private-first winter garden owners in Berlin, Brandenburg, and nearby cities within roughly a one-hour drive. The best-fit user has an existing winter garden, Kaltwintergarten, Warmwintergarten, or Terrassenüberdachung with leaks, water ingress, ageing seals, damaged panels, unclear moisture causes, foundation needs, or visible wear.

Use `β┇workbench/research/keywords-v3.json` as the active keyword dataset.

Before creating or rewriting public page content, read `α┇docs/06┇content-quality-playbook.md` and prepare or update the relevant page brief in `β┇workbench/03┇content-intake-and-page-briefs.md`.

## Page Priorities

P1 repair and refurbishment pages:

- `/` — homepage and routing page for repair and refurbishment positioning.
- `/wintergarten-reparatur-berlin/` — core local repair landing page.
- `/wintergarten-undicht/` — urgent leak and water ingress problem page.
- `/wintergarten-dichtungen-erneuern/` — next high-fit repair page, not started.
- `/wintergarten-sanierung/` — confirmed refurbishment topic, not started.
- `/wintergarten-fundament/` — confirmed foundation topic, not started.

P2 repair-supporting pages:

- `/fenster-abdichten/` — drafted, but keep winter-garden-specific unless general house window sealing is confirmed.
- `/wintergarten-stegplatten-erneuern/` — confirmed panel topic, not started.
- `/wintergarten-isolieren/` — useful if insulation or comfort upgrades are confirmed.

Blocked unless sales or full new-build scope is confirmed:

- Sales, full new-build, extension, permit, broad type, material, kit, DIY, broad pricing, and general `/wintergarten-berlin/` pages.
- Kaltwintergarten, Warmwintergarten, and Terrassenüberdachung can be mentioned as served structure types, but dedicated pages should stay repair/refurbishment scoped unless sales or build services are confirmed.

## Keyword Ownership

- Keep `wintergarten reparatur` and `wintergarten reparatur berlin` on `/wintergarten-reparatur-berlin/`.
- Keep `wintergarten undicht`, `wintergarten dach undicht`, `wintergarten abdichten`, and `wasser dringt in wintergarten` on `/wintergarten-undicht/`.
- Keep gasket and glazing-seal terms on `/wintergarten-dichtungen-erneuern/` unless the client confirms a distinct general window-sealing service.
- Keep `fenster abdichten` narrow and winter-garden-specific while `/fenster-abdichten/` remains conditional.
- Keep refurbishment terms on `/wintergarten-sanierung/` when that page is created.
- Keep foundation terms on `/wintergarten-fundament/` when that page is created.
- Keep `wintergarten kaufen`, build, price, type, material, DIY, and permit keywords blocked until sales or full new-build scope is confirmed.

## Page Roles And User Reading Logic

The site should not read like a company brochure or a generic article collection. It should help a homeowner quickly understand whether their case fits, what may be going on, what they should observe, and how to make a useful enquiry.

Each page type should have a distinct job.

### Homepage

Main job:
- orient
- qualify
- route
- open the contact path

The homepage should help the visitor quickly answer:
- Am I in the right place?
- Does this site deal with my kind of problem?
- Which page should I open next?
- What is the next useful action?

The homepage should feel broad enough to orient, but tighter and more directional than a service article.

### Local service page

Main job:
- show fit
- show scope
- help the visitor recognise that their case may belong here

A local service page should answer:
- Is repair or refurbishment likely relevant here?
- What kinds of issues are typically covered?
- What information helps before inspection?
- What still depends on inspection?

A local service page should feel commercially useful and service-led, not like a broad educational article.

### Problem page

Main job:
- reduce confusion
- frame the likely issue
- guide the visitor towards a useful enquiry

A problem page should answer:
- Does this sound like my problem?
- What should I observe first?
- What might be causing it?
- What can be checked before any recommendation?
- What cannot be judged yet?

A problem page should feel more diagnostic and issue-focused than a service page.

### Supporting service page

Main job:
- own one narrower intent without duplicating broader pages

A supporting page should answer:
- Does this page match my specific issue?
- Which parts or zones are likely involved?
- What should I send before asking?
- What are the scope boundaries?

A supporting page should be narrower, tighter, and more technically bounded than the core repair page.

## Recipe-Based Page Production

Public pages should now be generated from approved page recipes and approved section types. This keeps the writing process tied to the intended website layout from the beginning, while keeping public Markdown semantic and readable.

Required production order:

1. identify the page type
2. choose the approved recipe
3. select the approved sections needed for the page job
4. choose allowed section variants
5. write content for those sections
6. review for rhythm, repetition, CTA clarity, claim safety, and page differentiation
7. update the page brief before changing public copy

Do not write a long article first and ask Astro to make it feel like a website later. The section plan should exist before drafting.

## Approved Page Recipes

Recipes define the preferred sequence and visual weight for page types. They are allowed to vary, but only inside the approved section library in `α┇docs/05┇layout-description.md`.

### Homepage recipe

Page job:
- orient
- qualify
- route
- open the enquiry path

Preferred sequence:

1. Hero
2. Routing cards
3. Fit-check block
4. Split text/image explainer for what can be checked
5. Diagnostic card grid for common enquiry reasons
6. Enquiry-prep section
7. Process steps
8. Service-area block
9. FAQ block
10. Enquiry / form block

Required sections:
- Hero
- Routing cards
- Fit-check block
- at least one diagnostic or split explainer section
- Process
- Enquiry / form block

Optional sections:
- Service-area block
- FAQ
- Related pages once more public pages exist

Strongest visual weight:
- Hero
- Routing cards
- one middle image/text band
- closing enquiry block

### Local service page recipe

Page job:
- show service fit
- show repair scope
- help the reader prepare a practical enquiry

Preferred sequence:

1. Service hero
2. Fit-check block
3. Service-scope block
4. Split text/image work-area block
5. Enquiry-prep cards
6. Inspection-boundary compact explainer
7. Process steps
8. Service-area block
9. FAQ block
10. Enquiry / form block

Required sections:
- Hero
- Fit-check block
- Service-scope block
- Enquiry-prep section
- Process
- Enquiry / form block

Optional sections:
- Split text/image explainer
- Service-area block
- FAQ
- Related pages

Strongest visual weight:
- Hero
- repair-scope or work-area band
- closing enquiry block

### Problem page recipe

Page job:
- reduce confusion
- help the reader observe the issue safely
- move towards a useful enquiry without overdiagnosis

Preferred sequence:

1. Problem hero
2. Diagnostic fit-check
3. First-observation cards
4. Causes / affected-zones split section
5. Problem-logic split or compact explainer
6. Clarification explainer for false assumptions
7. Enquiry-prep section
8. Process steps
9. FAQ block
10. Enquiry / form block

Required sections:
- Hero
- Diagnostic fit-check
- First-observation or affected-zones section
- Clarification explainer
- Enquiry-prep section
- Enquiry / form block

Optional sections:
- Process
- Service-area block
- Related service link
- FAQ

Strongest visual weight:
- Hero
- affected-zones band
- clarification band
- enquiry-prep and closing form

### Contact / enquiry page recipe

Page job:
- collect a useful service enquiry
- explain what details help
- show confirmed contact options without inventing public details

Preferred sequence:

1. Concise hero or intro
2. Enquiry / form block
3. What-to-include guidance
4. Contact-channel status
5. Process expectations
6. Service-area block
7. FAQ
8. Routing back to relevant service or problem pages

Required sections:
- Hero or clear intro
- Enquiry / form block
- What-to-include guidance
- Contact-channel status

Optional sections:
- Process
- Service-area block
- FAQ
- Routing cards

Strongest visual weight:
- enquiry / form block
- practical enquiry-prep guidance

No separate contact route is required for the current transition. The recipe is documented so future contact-page work follows the same system.

## Content Patterns And Quality Expectations

Homepage pattern:

- H1 with repair and refurbishment local positioning.
- Brief fit check.
- Priority routing section.
- Typical enquiry reasons or visible problems.
- Useful enquiry preparation.
- Short process section.
- Service area.
- FAQ.
- CTA.

Quality expectation:
- the homepage should route quickly
- avoid long explanations
- show the main enquiry reasons
- make the next action obvious
- avoid turning into a full repair article or a company biography

Image-readiness:
- allow one strong neutral or approved hero image
- allow one practical support image if it improves orientation
- do not invent project proof

Local service page pattern:

- H1 with service and location.
- Brief overview.
- When the service is relevant.
- Typical cases or repair situations.
- Relevant work areas.
- Useful enquiry details.
- What remains inspection-dependent.
- Process.
- Local area.
- FAQ.
- CTA.

Quality expectation:
- local service pages should convert real repair enquiries
- explain what the homeowner is likely seeing
- explain what can be checked
- explain what information helps before inspection
- stay clearly distinct from the homepage and problem pages

Image-readiness:
- use approved or neutral images to support service understanding
- prefer an overview image and, where useful, one component/detail image
- do not imply a case study unless one is confirmed

Problem page pattern:

- H1 with problem keyword.
- Brief overview.
- First observations.
- Possible causes.
- What to document.
- What cannot be judged yet.
- Useful enquiry details.
- FAQ.
- CTA.

Quality expectation:
- problem pages should help a homeowner act on one issue without overdiagnosing
- include concrete symptoms
- include likely causes
- include safe observation and photo guidance
- include a clear contact path

Image-readiness:
- use images only where they clarify a symptom, affected zone, or safe observation point

Supporting service page pattern:

- H1 with service topic.
- Brief overview.
- Fit question.
- Visible signs.
- Likely affected parts.
- Scope boundaries.
- Enquiry details.
- Inspection dependencies.
- FAQ.
- CTA.

Quality expectation:
- supporting pages should own one narrow intent
- avoid becoming duplicates of `/wintergarten-reparatur-berlin/` or `/wintergarten-undicht/`

Image-readiness:
- a narrow service page may benefit from one detail image more than a broad hero sequence

Every page should help answer:

- What is probably happening?
- What should the homeowner look at or observe?
- What information should they send?
- What can be checked before a recommendation?
- What remains dependent on inspection?
- What is the next contact action?

Avoid generic AI-like repetition. Caution should be precise: explain what must be checked and why, rather than repeating broad phrases such as `je nach Schadensbild` in every section.

Before drafting priority pages, prepare a mini evidence pack in the page brief. It should include common homeowner observations, likely affected parts, useful enquiry details, what can be narrowed down from description or photos, what requires inspection, false assumptions to avoid, relevant internal links, benchmark influence where relevant, and safe business-specific terminology.

## Page Brief Requirement

Every new or rewritten public page needs a page brief in `β┇workbench/03┇content-intake-and-page-briefs.md`.

The brief should define:

- page path
- page type
- page job
- approved page recipe
- selected approved sections
- intended section variants
- strongest visual sections
- search intent
- reader state
- keyword ownership
- confirmed services
- excluded claims
- likely symptoms
- likely causes
- useful enquiry details
- what the page must not drift into
- inspection-dependent points
- benchmark influence where relevant
- CTA path
- internal links
- proof gaps
- image notes where relevant
- section emphasis where relevant

If a page brief contains open questions, keep those questions out of public copy. Use cautious wording or update `β┇workbench/01┇content-actions.md` with the follow-up needed.

## Publish Quality Gate

Before a page is set to `draft: false`, review it against the QA checklist in `α┇docs/06┇content-quality-playbook.md`.

The page should pass these checks:

- claim safety,
- specificity,
- homeowner usefulness,
- page differentiation,
- conversion clarity,
- local fit,
- proof-gap tracking,
- Markdown hygiene.

## Website Layout Direction

Use this section for high-level layout preference only. The actual implementation belongs in Astro files inside `ω┇site/`, such as `ω┇site/src/layouts/`, `ω┇site/src/components/`, and `ω┇site/src/styles/`.

Preferred direction:

- practical service-site layout rather than a marketing-heavy landing page
- clear header, direct contact path, readable sections, strong local repair positioning, and simple navigation
- content-led pages with useful headings, process explanations, FAQs, and cautious CTAs
- image-led rhythm where an approved or neutral image helps the page feel like a real website, while avoiding invented proof
- routing modules for homepage and cluster pages where they help visitors choose the right next page
- contact or form blocks near the bottom of important pages once public contact details are confirmed
- mobile-first structure for users checking damage or leaks from a phone
- trust should come from confirmed services, useful problem-framing, clear process, and practical enquiry guidance
- public Markdown should stay semantic; do not add layout instructions to page copy

## Editorial Guardrails

Write in cautious German service language for public pages. Prefer diagnosis-led wording such as `kann sinnvoll sein`, `je nach Schadensbild`, and `nach Prüfung`.

Use those phrases sparingly and only where they add real precision. Avoid fake certainty, but also avoid filler caution. Do not invent prices, reaction times, guarantees, certification details, years of experience, contact details, customer reviews, photos, before-and-after examples, or case studies.

Internal links should point only to existing public pages unless a task explicitly introduces a planned-link convention.

## Claims Policy

Agents may write general educational explanations about common causes, symptoms, and enquiry preparation. Agents must not claim that the client provides a specific service unless it is confirmed in `α┇docs/03┇client-info.md` or already approved in public page copy.

Never invent or imply:

- exact prices, price ranges, discounts, inspection fees, or travel costs
- same-day service, emergency response, guaranteed response times, or guaranteed repairs
- certification details, manufacturer partnerships, insurance relationships, awards, or memberships
- years of experience, number of completed projects, customer reviews, or case studies
- specific Berlin districts or Brandenburg towns served
- photo subjects, before-and-after proof, named products, brands, systems, or materials

## Glossary

- `Wintergarten`: A glazed extension or enclosed garden-room structure; current content treats it as an existing structure needing inspection, repair, refurbishment, or foundation work.
- `Kaltwintergarten`: Unheated or lightly protected winter garden; confirmed as a relevant structure type for repair/refurbishment content.
- `Warmwintergarten`: Heated or more residentially integrated winter garden; confirmed as a relevant structure type for repair/refurbishment content.
- `Sommergarten`: Seasonal glazed terrace or garden room; mostly blocked until build/conversion scope is confirmed.
- `Terrassenüberdachung`: Terrace roof or glazed terrace cover; confirmed as a relevant related structure type for repair/refurbishment content.
- `Dichtungen`: Seals or gasket profiles around glass, frames, roof panels, doors, windows, and profiles.
- `Abdichtung`: Sealing work; use only after explaining that the cause should be checked first.
- `Sanierung`: Broader refurbishment or renovation; confirmed as part of the service direction.
- `Fundament`: Foundation work; new foundations are confirmed, but exact foundation types and supporting works still need detail.
- `Stegplatten` / `Doppelstegplatten`: Multi-wall polycarbonate sheets often used in roofs; confirmed work area.
- `Entwässerung`: Drainage, gutters, outlets, channels, and profile water paths; confirmed work area.
