---
version: 1.05
created: 2026-05-01
updated: 2026-05-08
---

# Layout Description

This file describes the structural layout direction for the Astro build. It is based on the canonical homepage in `ω┇site/src/content/pages/startseite.md`, the flagship repair page in `ω┇site/src/content/pages/wintergarten-reparatur-berlin.md`, the leak/problem page in `ω┇site/src/content/pages/wintergarten-undicht.md`, and the current benchmark screenshots supplied by the owner.

Keep this as implementation guidance, not final visual design polish. Public Markdown remains semantic content; Astro owns layout, rendering, reusable components, styling, image presentation, and contact controls.

The site should feel like a practical repair-first service website for Berlin and Brandenburg, not like a generic article layout, a product catalogue, or a glossy new-build sales page.

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
3. Typical problems or main enquiry reasons
4. Service-scope clarification
5. One image-supported support section if useful
6. Process
7. FAQ
8. Closing CTA

The homepage should not become a full repair article or a company biography.

### Repair page

The repair page should feel like:
- fit check
- scope clarity
- service capability

Recommended structural flow:

1. Hero
2. Fit / when repair is relevant
3. Typical repair cases
4. Work areas or affected components
5. Image-supported clarification section
6. Enquiry details
7. Inspection boundaries
8. Process
9. Local area
10. FAQ
11. Closing CTA

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
5. Image-supported clarification section
6. What to document
7. What cannot be judged yet
8. Enquiry path
9. FAQ
10. Closing CTA

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