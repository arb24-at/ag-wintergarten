---
version: 1.08
created: 2026-05-01
updated: 2026-05-27
---

# Layout Description

This file describes the structural layout direction for the Astro build. It is based on the canonical homepage in `ω┇site/src/content/pages/startseite.md`, the flagship repair page in `ω┇site/src/content/pages/wintergarten-reparatur-berlin.md`, the leak/problem page in `ω┇site/src/content/pages/wintergarten-undicht.md`, and the current benchmark screenshots supplied by the owner.

Keep this as implementation guidance, not final visual design polish. Public Markdown remains semantic content; Astro owns layout, rendering, reusable components, styling, image presentation, and contact controls.

The site should feel like a practical repair-first service website for Berlin and Brandenburg, not like a generic article layout, a product catalogue, or a glossy new-build sales page.

As of the classic compact redesign, the visual direction is closer to a traditional German trades website: compact two-row header, clear navigation, rectangular service cards, practical diagnostic blocks, image-supported repair sections, darker process band, and a substantial contact/footer area. Earlier benchmark and section rules remain useful context, but they should not prevent necessary visual improvements.

As of the section whitelist pass, content should be drafted for approved section families rather than written as long article prose and styled afterwards. The visual rhythm should separate real CTAs, supportive links, diagnostic information, service scope, process steps, FAQs, and contact forms.

## Layout Goals

The layout should help a visitor quickly feel:

- this site deals with my kind of problem
- I can understand where my case fits
- I can recognise the next useful step
- I can contact the business in a practical way

The layout should support:

- strong first-screen clarity
- calm but commercial service presentation
- mobile-first readability
- clear section hierarchy
- image-supported rhythm
- repeatable but not monotonous content blocks
- clear routing between important pages
- practical CTAs without fake urgency
- compact spacing without large decorative gaps
- placeholder business details and generated local placeholder photos until confirmed real assets are supplied

## Benchmark Use Rules

Benchmark references may be used to improve layout rhythm, section order, image placement, CTA structure, and overall website feel.

Borrow from benchmark references:

- strong hero areas with image plus text block
- image-supported middle sections
- alternating section rhythm
- routing cards or related-page modules
- strong closing contact areas
- clearer footer and header structure
- practical, readable commercial page flow

Do not borrow from benchmark references:

- competitor wording
- competitor claims
- pricing logic
- review or proof language
- product-catalogue behaviour
- new-build positioning
- heavy sidebars on core commercial pages
- decorative or flashy effects
- animations, sliders, or carousel-heavy behaviour unless explicitly requested later

The goal is not to copy pages literally. The goal is to translate useful structural patterns into a repair-first AG Wintergarten website.

## Shared Page Structure

Pages should use a practical service-site structure with:

- a clear header
- a strong opening area
- readable main content
- repeated contact opportunities
- a stable closing CTA
- a footer that feels like part of a real website rather than a thin afterthought

The layout should support a linear mobile-first reading flow. On desktop, it may introduce stronger visual hierarchy through hero overlaps, split sections, routing cards, and image/text alternation, but should still read cleanly from top to bottom.

The main content area should keep a comfortable reading width and strong heading hierarchy. Pages should avoid feeling like one long article or a sequence of nearly identical white boxes.

## Section Archetypes

Use a small set of repeatable section archetypes and rotate them sensibly.

### 1. Hero section

Purpose:
- establish the page topic immediately
- provide fit-checking and context
- create a real website opening
- offer early action or routing

Recommended pattern:
- large image or visual support area
- overlapping or adjacent content card
- H1
- short practical intro
- CTA or next-step guidance

The hero should feel like the real start of the page, not a decorative banner.

### 2. Routing cards section

Purpose:
- help the visitor quickly choose the right next page
- reduce confusion between repair, leak, and narrower topics

Recommended pattern:
- short section intro
- 2–4 cards
- clear title
- short supporting sentence
- whole-card click target or strong link cue

Use on:
- homepage
- cluster pages
- related-page modules where useful

### 3. Diagnostic card grid

Purpose:
- show symptoms
- show likely affected areas
- show common reasons for enquiry
- show likely entry points or parts

Recommended pattern:
- concise cards or grid items
- short headings
- practical phrasing
- no oversized paragraphs

Do not overuse this pattern repeatedly on the same page.

### 4. Split image/text section

Purpose:
- break up long reading
- support a key explanation with an image
- make the page feel more like a website than a document

Recommended pattern:
- text block and image block side by side on desktop
- stacked on mobile
- use for clarifying a component, problem area, or homeowner observation point

This pattern is especially useful in the middle of service and problem pages.

### 5. Process section

Purpose:
- explain how enquiry or inspection works
- create procedural trust
- support conversion

Recommended pattern:
- numbered steps
- visually distinct but not heavy
- compact enough to read quickly
- avoid paragraph-heavy process explanations

### 6. FAQ section

Purpose:
- answer likely objections or clarifications
- reinforce service logic
- support conversion

Recommended pattern:
- clear dedicated wrapper
- stronger spacing than standard text sections
- static, readable rows or simple blocks
- no need for animated accordion behaviour

### 7. Closing CTA / contact section

Purpose:
- create a clear practical next step
- repeat the contact path
- help the reader prepare a useful enquiry

Recommended pattern:
- visually stronger than normal content sections
- clear CTA heading
- short support text
- confirmed channels only
- optional enquiry guidance panel

This should feel like a real service-enquiry endpoint, not a generic call-to-action.

## Approved Section Library

Use these as the first approved functional website sections. A section is approved because it has a page job, not merely because it has a visual treatment.

### Hero

Purpose: establish page topic, local repair-first fit, and first action path.

Allowed page types: all public page types.

Required content:
- page-specific H1 or hero title
- short practical summary
- one primary action to a real anchor or rendered page

Optional content:
- quick facts
- secondary action
- neutral or approved image

Allowed variations:
- compact homepage hero
- compact service/problem hero
- image with card overlay or adjacent content card

Anti-patterns:
- oversized decorative hero with no practical action
- fake phone or WhatsApp controls
- proof, price, or emergency claims without confirmation

### Routing cards

Purpose: help visitors choose between active pages or problem paths.

Allowed page types: homepage, cluster page, contact/enquiry page, later related-page modules.

Required content:
- short heading
- 2–4 rendered page links
- concise card title and description

Optional content:
- tags
- image support
- compact related-page treatment near the bottom

Allowed variations:
- two-card homepage routing
- compact related-page row
- text-first routing with image support

Anti-patterns:
- links to draft or non-rendered pages
- blog-style sidebar behaviour on core service pages
- routing cards that duplicate the same page job

### Fit-check block

Purpose: let the reader quickly decide whether their case belongs on the page.

Allowed page types: homepage, local service page, problem page, supporting service page.

Required content:
- clear fit question or fit heading
- concrete symptoms or situations
- one boundary statement where needed

Optional content:
- short negative-fit note
- internal link to a better page

Allowed variations:
- card grid
- compact bullet list
- stronger lead paragraph with cards

Anti-patterns:
- generic “we help with everything” language
- long article introduction
- repeated caveats without specific decision value

### Service-scope block

Purpose: show what work areas or components may be relevant.

Allowed page types: local service page, supporting service page, homepage when used briefly.

Required content:
- confirmed service areas only
- practical component names
- inspection-aware boundary

Optional content:
- neutral support image
- internal link to a narrower problem page

Allowed variations:
- split text/image
- diagnostic grid
- compact component list

Anti-patterns:
- product catalogue
- unconfirmed material/system claims
- broad sales/new-build positioning

### Causes / affected-zones block

Purpose: help problem-page readers recognise where a symptom may originate.

Allowed page types: problem page, supporting service page.

Required content:
- likely zones or causes
- observation guidance
- inspection boundary

Optional content:
- image or detail placeholder
- false-assumption clarification

Allowed variations:
- checkerboard image/text band
- diagnostic grid
- compact explainer

Anti-patterns:
- diagnosing the exact cause from copy alone
- making a sealant or replacement promise
- overloading the section with every possible cause

### Split text/image explainer

Purpose: create a visual anchor and explain an important practical idea.

Allowed page types: homepage, local service page, problem page, supporting service page.

Required content:
- one clear explanatory heading
- short paragraphs or bounded list
- approved or neutral image

Optional content:
- section CTA to `#kontakt`
- internal link where it clarifies routing

Allowed variations:
- image left
- image right
- compact or standard
- light or neutral background

Anti-patterns:
- decorative image with unrelated copy
- before-and-after implication without approved proof
- too many split sections in a row

### Diagnostic card grid

Purpose: make observations, symptoms, parts, or enquiry reasons scannable.

Allowed page types: homepage, local service page, problem page, supporting service page.

Required content:
- one short intro
- 4–9 concise items

Optional content:
- CTA link after the grid

Allowed variations:
- two-column mobile-friendly grid
- three-column desktop grid
- compact card treatment

Anti-patterns:
- multiple identical grids back to back
- long paragraph cards
- abstract service labels without homeowner context

### Compact explainer

Purpose: clarify a boundary, distinction, or inspection-dependent point without creating a heavy article section.

Allowed page types: all public page types.

Required content:
- one focused idea
- practical reason why it matters

Optional content:
- short bullet list
- internal link

Allowed variations:
- side-heading layout
- pale blue treatment
- compact full-width treatment

Anti-patterns:
- generic disclaimers
- repeating the same caution from earlier sections

### Process steps block

Purpose: explain how enquiry, Schadensprüfung, Beratung, or Angebot normally fits together without inventing a fixed promise.

Allowed page types: homepage, service pages, problem pages, contact/enquiry page.

Required content:
- 3–5 steps
- short step headings
- practical step descriptions

Optional content:
- CTA link to `#kontakt`

Allowed variations:
- dark blue band
- compact row
- stacked mobile cards

Anti-patterns:
- guaranteed response times
- emergency-service framing
- pretending photos replace inspection

### FAQ block

Purpose: answer objections and clarify decisions near the end of the page.

Allowed page types: all public page types.

Required content:
- real user questions as h3 headings
- short answers that add decision value

Optional content:
- internal link in an answer

Allowed variations:
- static rows
- compact grouped cards

Anti-patterns:
- animated accordion required for basic reading
- repeating earlier copy without adding clarity
- invented claims hidden inside answers

### CTA strip

Purpose: provide a short mid-page action point without replacing the final enquiry block.

Allowed page types: homepage, service pages, problem pages.

Required content:
- short practical CTA line
- functional link to `#kontakt` or a rendered page

Optional content:
- one supporting sentence

Allowed variations:
- blue strip
- pale strip
- compact inline button

Anti-patterns:
- fake phone or WhatsApp links
- pressure language
- price, discount, or response-time promises

### Enquiry / form block

Purpose: create the practical service-enquiry endpoint.

Allowed page types: all important public pages and future contact/enquiry page.

Required content:
- name
- contact method
- location
- problem description
- weather/repetition/previous repair notes
- clear statement if data is not submitted yet

Optional content:
- contact-channel status
- checklist of helpful details

Allowed variations:
- dark blue closing section
- future standalone contact page version

Anti-patterns:
- dummy-looking placeholder form
- unconfirmed phone/WhatsApp links
- hidden promise of response or appointment

### Service-area block

Purpose: state the broad confirmed area without overclaiming exact places.

Allowed page types: homepage, service pages, problem pages, contact/enquiry page.

Required content:
- Berlin
- Brandenburg
- nearby cities within roughly one hour drive
- request for specific location

Optional content:
- fit wording for private-first enquiries

Allowed variations:
- compact explainer
- small closing note

Anti-patterns:
- naming districts or towns before confirmation
- pretending every location is accepted

### Related pages block

Purpose: provide intentional next routes once enough public pages exist.

Allowed page types: homepage, service pages, problem pages, supporting pages.

Required content:
- links only to rendered public pages
- clear reason to open each page

Optional content:
- card tags
- small image support

Allowed variations:
- compact card row
- routing module

Anti-patterns:
- links to draft-only pages
- generic blog article cards
- unrelated SEO links

## Controlled Variation Rules

Variation should happen inside approved sections, not through random new page structures.

Allowed variation:
- image left or image right
- compact or standard spacing
- card grid, short list, or prose when the section permits it
- light, neutral, pale blue, or dark blue treatment
- stronger lead text on important sections and lighter intro text on support sections
- 2–4 cards for routing, 4–9 cards for diagnostic grids, 3–5 steps for process sections

Anti-repetition rules:
- do not place more than two similar grids or white-panel sections in a row
- every long page should have at least one stronger middle visual anchor
- process, FAQ, and enquiry sections should look distinct from diagnostic grids
- not every section deserves equal visual weight

Governance:
- a new section type must be documented here before it is used on production pages
- the page brief must state the intended recipe, sections, variants, and strongest visual sections
- renderer mappings should follow documented sections rather than inventing hidden layouts

## Header

The header should quickly communicate:

- brand or site identity
- repair/refurbishment positioning
- simple navigation
- a direct contact path

Expected header contents:

- brand or site name
- short supporting service descriptor if useful
- navigation to homepage, repair page, leak page, and future approved key pages
- one clear contact entry point once details are supplied

Header rules:

- keep it simple and static
- give it enough height and spacing to feel deliberate
- do not overload it with too many technical links
- do not include proof claims, certifications, reviews, or exact local areas unless confirmed
- do not link to draft or non-rendered pages

## Footer

The footer should reinforce:

- service area
- navigation
- contact logic
- site structure

Expected footer contents:

- short service-area note for Berlin, Brandenburg, and nearby cities within roughly one hour drive
- confirmed contact channels once public details are supplied
- links to key content pages
- legal/navigation links once those pages exist

Footer rules:

- footer should feel like a real structural close to the site
- use clearer grouping than a thin muted strip
- do not turn the footer into a second homepage
- keep it compact but visually grounded

## CTA And Contact Blocks

CTA blocks should appear:

- near the top as an early action path where appropriate
- near the end as the main closing action

The contact/form block should be reusable and fed only by confirmed public details.

Until details are supplied:
- mention only confirmed channels
- avoid implying a preferred order
- do not fake clickability

CTA language should support a real service-enquiry workflow:
- describe the problem
- send safe photos if available
- include location
- mention weather or usage context where relevant
- mention previous repair attempts where relevant

Avoid:
- vague CTA text
- emergency framing
- price promises
- response-time promises
- guaranteed outcomes

## Routing And Internal Links

Internal routing should feel like part of the site architecture, not like footnotes in an article.

Rules:

- link only to existing public pages unless a planned-link convention is explicitly approved
- use routing cards where homepage or cluster pages benefit from quick self-sorting
- do not use blog-style sidebars on core commercial pages
- related-page sections may be useful later, but should stay compact and intentional

## Image Rhythm

Pages should be image-ready without putting layout instructions into Markdown.

Image rules:

- use images to support fit, diagnosis, recognition, and page rhythm
- do not use images as empty decoration
- a hero image may establish page context
- one or two supporting images may clarify a problem zone, structure type, or component area
- captions or nearby copy must remain factual
- do not imply before-and-after proof, completed projects, or material-specific expertise unless approved

Avoid:
- image-heavy article layouts on core commercial pages
- random decorative imagery
- stock-gallery feeling
- too many image-less sections in a row on important pages

## Anti-Monotony Rules

The layout must avoid the “stacked content panels” feeling.

Do not:
- repeat the same bordered white-card treatment for too many sections in a row
- present the whole page as one uninterrupted article
- make all sections feel equally weighted
- rely only on grids and white boxes for visual structure

Do:
- alternate between denser and lighter sections
- use split image/text blocks in the middle of longer pages
- vary section treatment between routing, diagnostics, process, FAQ, and CTA
- create stronger visual rhythm while staying calm and static

## Page-Specific Layout Behaviour

### Homepage

The homepage should feel like:
- orientation first
- routing second
- contact readiness third

Recommended structural flow:

1. Hero
2. Routing section
3. Fit-check block
4. Image-supported service or inspection explainer
5. Typical problems or main enquiry reasons
6. Enquiry-prep section
7. Process
8. Service area
9. FAQ
10. Closing CTA / enquiry form

The homepage should not become a full repair article or a company biography.

### Repair page

The repair page should feel like:
- fit check
- scope clarity
- service capability

Recommended structural flow:

1. Hero
2. Fit / when repair is relevant
3. Typical repair cases or service-scope block
4. Work areas or affected components as image-supported block
5. Enquiry details
6. Inspection boundaries
7. Process
8. Local area
9. FAQ
10. Closing CTA / enquiry form

The repair page should feel commercial and useful, not neutral or encyclopaedic.

### Problem page

The problem page should feel like:
- issue recognition
- guided narrowing
- enquiry preparation

Recommended structural flow:

1. Hero
2. Quick fit / does this sound like your issue
3. What the owner notices first
4. Likely affected zones or causes
5. Image-supported problem-logic section
6. Clarification section for false assumptions
7. What to document
8. Enquiry path
9. Process or service area where useful
10. FAQ
11. Closing CTA / enquiry form

The problem page should feel more diagnostic than the repair page.

## Reusable Sections For Now

Extract only the pieces that clearly repeat across the first pages:

- Header
- Footer
- Hero
- Primary CTA block
- Contact/form block
- FAQ wrapper
- Optional service-area note
- Routing or related-page module
- Image block or image/text section wrapper
- Process section wrapper

Keep page-specific explanations, symptoms, process text, routing copy, and service detail in Markdown for now.

Do not create a large component system before the first pages render cleanly and the section rhythm is proven.
