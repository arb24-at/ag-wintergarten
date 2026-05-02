---
version: 1.08
created: 2026-05-01
updated: 2026-05-02
---

# Content Strategy

The site should first win repair and refurbishment enquiries from private-first winter garden owners in Berlin, Brandenburg, and nearby cities within roughly a one-hour drive. The best-fit user has an existing winter garden, Kaltwintergarten, Warmwintergarten, or Terrassenüberdachung with leaks, water ingress, ageing seals, damaged panels, unclear moisture causes, foundation needs, or visible wear.

Use `β┇workbench/research/keywords-v3.json` as the active keyword dataset.

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

## Content Patterns

Homepage pattern:

- H1 with repair and refurbishment local positioning.
- Brief overview, current priority links, repair and leak focus, typical damage, enquiry process, service area, inspection rationale, FAQ, and CTA.

Local service page pattern:

- H1 with service and location.
- Brief overview, signs and request details, when service is useful, damage and causes, service explanation, process, local area, inspection rationale, FAQ, and CTA.

Problem page pattern:

- H1 with problem keyword.
- Brief overview, signs and request details, causes, problem scenario, service explanation, technical causes, process, local area, inspection rationale, FAQ, and CTA.

Supporting service page pattern:

- H1 with service topic.
- Brief overview, signs and request details, when service is useful, causes, service explanation, process, local area, inspection rationale, FAQ, and CTA.

## Website Layout Direction

Use this section for high-level layout preference only. The actual implementation belongs in Astro files inside `ω┇site/`, such as `ω┇site/src/layouts/`, `ω┇site/src/components/`, and `ω┇site/src/styles/`.

Preferred direction:

- Practical service-site layout rather than a marketing-heavy landing page.
- Clear header, direct contact path, readable sections, strong local repair positioning, and simple navigation.
- Content-led pages with useful headings, process explanations, FAQs, and cautious CTAs.
- Mobile-first structure for users checking damage or leaks from a phone.
- Trust should come from confirmed services, clear process, photos, reviews, or proof only after the client provides them.
- Public Markdown should stay semantic; do not add layout instructions to page copy.

## Editorial Guardrails

Write in cautious German service language for public pages. Prefer diagnosis-led wording such as `kann sinnvoll sein`, `je nach Schadensbild`, and `nach Prüfung`.

Avoid fake certainty. Do not invent prices, reaction times, guarantees, certification details, years of experience, contact details, customer reviews, photos, before-and-after examples, or case studies.

Internal links should point only to existing public pages unless a task explicitly introduces a planned-link convention.

## Claims Policy

Agents may write general educational explanations about common causes, symptoms, and enquiry preparation. Agents must not claim that the client provides a specific service unless it is confirmed in `α┇docs/03┇client-info.md` or already approved in public page copy.

Never invent or imply:

- Exact prices, price ranges, discounts, inspection fees, or travel costs.
- Same-day service, emergency response, guaranteed response times, or guaranteed repairs.
- Certification details, manufacturer partnerships, insurance relationships, awards, or memberships.
- Years of experience, number of completed projects, customer reviews, or case studies.
- Specific Berlin districts or Brandenburg towns served.
- Photo subjects, before-and-after proof, named products, brands, systems, or materials.

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
