---
version: 1.11
created: 2026-05-01
updated: 2026-05-02
---

# Wintergarten Content Actions

This file holds human follow-up, client questions, page tasks, risks, and SEO notes. It is not public website content.

Confirmed client facts belong in `α┇docs/03┇client-info.md`. Keep unanswered questions, active decisions, and action items here.

## Remaining Decisions Needed

- Confirm exact public phone number, contact form destination, WhatsApp number/link, and preferred CTA order.
- Collect usable photos, before-and-after examples, and certification details with usage approval.
- Confirm reviews, manufacturer partnerships, years of experience, or case studies if they should ever be mentioned.
- Confirm excluded services, materials, systems, or damage types.
- Confirm whether general house window sealing is offered, or only winter garden doors, windows, and sliding elements.
- Confirm whether commercial clients should be mentioned now or only kept as future expansion.
- Confirm whether exact Berlin districts, Brandenburg towns, or nearby cities may be named publicly.
- Confirm detailed repair scope for glass, Scheiben, Verglasung, Stegplatten, doors, windows, sliding elements, Beschläge, Schließpunkte, and foundations.
- Confirm priority among next pages: Dichtungen, Sanierung, Fundament, Stegplatten, and Isolieren.

## Page Actions

### Homepage — `/`

Status: canonical rewrite created and rendering locally from `ω┇site/src/content/pages/startseite.md`; P1; core scope confirmed; needs contact details, asset selection, and SEO review.

Purpose: introduce the site as a repair and refurbishment Wintergarten website for Berlin, Brandenburg, and nearby cities, route visitors quickly to the strongest existing repair pages, and avoid unconfirmed sales or full new-build claims.

Source note:

- `ω┇site/src/content/pages/startseite.md` is the future single source of truth for homepage content.
- `ω┇site/src/content/pages/home.md` is superseded and should not be developed as a parallel homepage draft.
- Do not delete `home.md` unless explicitly requested.

Open questions:

- Which public contact details and CTA order should be used: phone, form, or WhatsApp first?
- Should concrete Berlin districts, Brandenburg towns, or nearby cities be named?
- Which photos, before-and-after examples, and certification details are approved for the homepage?
- Should commercial clients be hinted at now, or omitted until expansion is active?

Publish checklist:

- [x] Confirm homepage positioning: repair, refurbishment, and new foundations.
- [x] Confirm private customers as the first priority.
- [x] Confirm broad service area: Berlin, Brandenburg, and nearby cities within roughly a one-hour drive.
- [x] Confirm core service scope and no public price/fee/travel-cost wording.
- [x] Create canonical `startseite.md` and stop developing multiple homepage-like drafts in parallel.
- [x] Render locally as `/` in Astro.
- [x] Keep internal links limited to rendered pages for the first build.
- [ ] Confirm public contact details and CTA order.
- [ ] Check SEO title and description.
- [x] Add only internal links whose target pages exist.
- [ ] Remove any unconfirmed sales, full new-build, price, guarantee, named certification, emergency, or case-study claims.

SEO notes:

- Primary keyword: `wintergarten reparatur berlin`.
- Supporting themes: `wintergarten undicht`, `wintergarten abdichten`, `wintergarten berlin`.
- Keep the homepage distinct from `/wintergarten-reparatur-berlin/` by using it as a routing and trust entry point.

Risks:

- Sales, full new-build, prices, guarantees, and emergency claims are not confirmed.
- Contact details, exact asset files, and certification names still need approval.

### Wintergarten Reparatur Berlin — `/wintergarten-reparatur-berlin/`

Status: rewritten as flagship service-page model and rendering locally; P1; core scope confirmed; needs asset decisions, detailed scope confirmation, and SEO review.

Purpose: serve as the strongest local repair landing page for Berlin, Brandenburg, and nearby-city repair, sealing, refurbishment, component work, and practical damage assessment. Keep it distinct from the homepage by making it service-led, and distinct from `/wintergarten-undicht/` by covering broader repair and refurbishment enquiries.

Open questions:

- Which confirmed repair services should be emphasised first on the page?
- Should Brandenburg and nearby cities be named individually, or kept broad?
- How should the enquiry process be described: phone/form/WhatsApp first, photos first, then `Prüfung vor Ort`?
- Which photos or local examples are approved for use?
- Do glass, Scheiben, Verglasung, Stegplatten, doors, windows, sliding elements, Beschläge, Schließpunkte, and foundations include repair, replacement, adjustment, inspection only, or a mix by case?

Publish checklist:

- [x] Confirm services and broad service area.
- [x] Confirm allowed wording: `Angebot`, `Beratung`, `Schadensprüfung`, and `Prüfung vor Ort`.
- [x] Confirm no prices, price ranges, inspection fees, or travel costs.
- [x] Rewrite as the reference service-page model.
- [x] Render locally as `/wintergarten-reparatur-berlin/` in Astro.
- [x] Check internal links after `startseite.md` is wired into the Astro build.
- [ ] Confirm CTA order and public contact details.
- [ ] Check SEO title and description.
- [ ] Keep page distinct from any future `/wintergarten-berlin/` page.
- [ ] Remove any unconfirmed promises.

SEO notes:

- Primary keyword: `wintergarten reparatur`.
- Secondary keyword: `wintergarten reparatur berlin`.
- Intent: transactional / local transactional.
- Cluster: repair and water damage.

Risks:

- Do not imply fixed prices, emergency service, guarantees, named certifications, years of experience, or case studies.
- Avoid full new-build or sales positioning.

### Wintergarten Undicht — `/wintergarten-undicht/`

Status: drafted; P1; leak scope confirmed; needs process details and SEO review.

Purpose: target urgent problem-solving intent around leaking winter gardens and move users towards inspection or repair enquiries without overdiagnosing.

Open questions:

- What information and photos should customers send for leak enquiries?
- How should condensation versus rainwater ingress be explained?
- Which CTA should lead leak enquiries: phone, form, or WhatsApp?

Publish checklist:

- [x] Confirm leak inspection and sealing scope.
- [x] Confirm roof, wall connection, drainage, glazing, Stegplatten, and seal wording.
- [x] Confirm no price, inspection-fee, or travel-cost wording.
- [ ] Confirm CTA order and public contact details.
- [ ] Check SEO title and description.
- [ ] Keep distinct from `/wintergarten-reparatur-berlin/` and future `/wintergarten-dichtungen-erneuern/`.

SEO notes:

- Primary keyword: `wintergarten undicht`.
- Secondary keywords: `wintergarten dach undicht`, `wintergarten abdichten`, `wasser dringt in wintergarten`.
- Focus on leak causes, diagnosis, roof leaks, sealing logic, and repair enquiry preparation.

Risks:

- Do not present condensation as definite leakage.
- Do not promise same-day repair, fixed prices, guarantees, named certifications, years of experience, or unapproved case studies.

### Fenster Abdichten — `/fenster-abdichten/`

Status: drafted; P2; winter-garden scope partly confirmed; needs page decision and SEO review.

Purpose: cover window sealing for winter garden windows, doors, and sliding elements. Keep general house window sealing out unless confirmed.

Open questions:

- Does the client also offer general house window sealing?
- Are Anschlagdichtungen, Verglasungsdichtungen, glass-edge seals, Beschläge, and Schließpunkte handled?
- Is this page needed, or should the topic merge into `/wintergarten-dichtungen-erneuern/`?

Publish checklist:

- [x] Confirm winter garden doors, windows, and sliding elements.
- [ ] Confirm whether the separate page should exist.
- [ ] Confirm general house window scope or keep it explicitly excluded.
- [ ] Confirm detailed seal, glazing, Beschläge, Schließpunkte, and adjustment scope.
- [ ] Check overlap with `/wintergarten-dichtungen-erneuern/`.
- [ ] Confirm CTA order and public contact details.

SEO notes:

- Primary keyword: `fenster abdichten`.
- Supporting keywords: `fensterdichtungen austauschen lassen`, `fenster verglasungsdichtung austauschen`, `fensterglas dichtung erneuern`, `fensterscheiben dichtung austauschen`.
- Keep broad gasket and window-seal variants on `/wintergarten-dichtungen-erneuern/` unless a separate service is confirmed.

Risks:

- This page may still be unnecessary if `/wintergarten-dichtungen-erneuern/` covers the topic better.
- Do not imply general house window repair services unless confirmed.

## Next Pages To Decide

Repair and refurbishment sequence:

1. `/wintergarten-dichtungen-erneuern/`
2. `/wintergarten-sanierung/`
3. `/wintergarten-fundament/`
4. `/wintergarten-stegplatten-erneuern/`
5. `/wintergarten-isolieren/`

Blocked or later unless sales/full new-build scope is confirmed:

- `/wintergarten-kaufen-bauen/`
- `/wintergarten-kosten-preise/`
- `/wintergarten-berlin/`
- `/wintergarten-anbau/`
- `/wintergarten-ueberdachung/`
- `/wintergarten-beschattung/`
- `/wintergarten-baugenehmigung/`
- `/kaltwintergarten/`
- `/wohnwintergarten/`
- `/sommergarten/`
- Material, permit, kit, and DIY pages.

Repair/refurbishment pages for Kaltwintergärten, Warmwintergärten, or Terrassenüberdachungen can be considered later, but they should not read like sales or new-build pages.

## Client Meeting Questions

### Business Scope

- Welche gewerblichen Kunden sollen später eventuell angesprochen werden?
- Gibt es Leistungen, die wir auf keinen Fall nennen sollen?

### Repair Services

- Werden Glas, Scheiben oder Verglasungselemente repariert, ersetzt oder nur geprüft?
- Reparieren, ersetzen oder justieren Sie Beschläge, Schließpunkte und bewegliche Elemente?
- Welche Arbeiten an Stegplatten und Doppelstegplatten sind ausdrücklich gewünscht: Prüfung, Reparatur, Austausch oder Abdichtung?
- Welche Schadensarten nehmen Sie nicht an?

### Foundations

- Welche Fundamentarten, Untergrundarbeiten, Drainage, Dämmung, Frostschutz oder Feuchtigkeitsschutz übernehmen Sie?
- Ist das Fundament-Thema für Neubau, Reparatur, Erweiterung oder Sanierung relevant?
- Soll eine separate Seite zu Wintergarten Fundament erstellt werden?

### Service Area And Process

- Gibt es bevorzugte oder ausgeschlossene Bezirke und Orte?
- Was soll ein Kunde als Erstes tun?
- Soll der Kunde zuerst anrufen, das Formular nutzen, WhatsApp schreiben oder Fotos senden?
- Prüfen Sie Schäden vor Ort, bevor Sie ein Angebot erstellen?
- Welche Informationen sollte der Kunde unbedingt angeben?

### Commercial Wording And Trust

- Gibt es Formulierungen, die vermieden werden sollen?
- Welche Fotos und Vorher-nachher-Beispiele dürfen konkret verwendet werden?
- Welche Zertifizierungen dürfen mit exakter Bezeichnung genannt werden?
- Dürfen Bewertungen, Herstellerpartnerschaften, Qualifikationen oder Jahre Erfahrung genannt werden?
