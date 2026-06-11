# Carter's Bakery Market-Day Institution Redesign

## Summary

Redesign Carter's Bakery as a contemporary Bajan neighbourhood institution. Preserve the site's
clear information architecture and practical flows, but replace its interchangeable modern-template
appearance with an image-led, culturally grounded, and memorable brand experience.

The chosen direction is **Market-Day Institution**: sunlit colour, strong serif typography,
generous food imagery, confident ribbons and seals, lively asymmetric composition, and expressive
motion.

## Goals

- Make everyday Barbadian customers feel that Carter's is their familiar local bakery.
- Give online visitors a trustworthy and appetising introduction to the bakery.
- Build strong brand recognition without resort styling or romanticised colonial nostalgia.
- Make products, prices, hours, directions, and inquiry actions easy to find.
- Create a clear visual “wow” moment on the homepage and carry the same character across every route.

## Current-State Critique

### What Works

- The navigation and route structure are simple and easy to understand.
- Products, prices, hours, directions, and WhatsApp inquiries are clearly available.
- Existing bakery photography is appetising and suitable for stronger art direction.
- Responsive behaviour, semantic structure, and baseline focus states provide a sound foundation.

### Priority Problems

1. **The site reads as a polished template before it reads as Carter's.**
   Geometric sans typography, cream surfaces, rounded cards, and restrained green accents are common
   across generic modern websites.
2. **The cultural and neighbourhood character is mostly carried by copy.**
   Layout, colour, typography, and interaction do not yet express the rooted, generous, spirited
   brand.
3. **Repeated component treatments flatten the emotional journey.**
   Similar cards, small uppercase labels, and evenly spaced sections give every moment comparable
   visual weight.
4. **The existing imagery is underused.**
   Strong food and bakery photographs appear inside polite containers rather than driving the
   composition.
5. **The interface has little memorable motion or interaction.**
   Hover lifts provide feedback but do not create a distinctive brand experience.

The deterministic Impeccable scan found no mechanical anti-pattern violations. The problem is art
direction, not broken functionality.

## Approved Brand Direction

### Strategic Context

- **Register:** Brand website
- **Audience:** Everyday local customers and online visitors discovering a trusted bakery
- **Purpose:** Build appetite, trust, recognition, and familiarity
- **Personality:** Rooted, generous, spirited
- **Cultural character:** Contemporary Bajan institution shaped by British, African, and Caribbean
  influences
- **Avoid:** Tourist-resort styling, colonial nostalgia, rustic farmhouse clichés, and generic
  trendy-café design

### Visual Concept

The site should feel like the digital expression of a busy, established local bakery on a bright
Barbadian day. It should have the confidence and presence of an institution, the abundance of a
market counter, and enough colour and movement to feel celebratory.

The design will not use literal cultural motifs as decoration. Cultural character will emerge from
colour commitment, rhythmic composition, warm language, strong photography, and the balance between
ceremonial presence and everyday familiarity.

## Design System

The detailed visual system lives in `DESIGN.md`. Key commitments:

- Replace `Libre Franklin` and `DM Sans` with `Bitter` and `Source Sans 3`.
- Replace the current cream-and-small-accent strategy with committed sun ochre, heritage green,
  guava coral, bread brown, and a green-tinted true off-white.
- Reduce repeated rounded cards and tiny uppercase section labels.
- Use asymmetric image-led layouts, ribbons, bakery seals, ruled price lists, and drenched sections.
- Use expressive motion for the hero, imagery, ribbons, and stamps, with reduced-motion fallbacks.

## Route Design

### Homepage

The homepage receives the strongest art direction.

- Replace the current hero with a sun-ochre asymmetric composition.
- Use the headline **Fresh from the heart of Barbados.**
- Retain product browsing and special-order actions.
- Give category exploration varied, image-led treatments instead of four identical cards.
- Present popular products as a bold counter-style price strip.
- Restyle made-to-order, specials, community story, visit details, and inquiry call-to-action with
  distinct visual worlds that still share the same voice.

### Products

- Keep search, category filters, and complete prices.
- Restyle the catalog as a clear bakery-board system with stronger category grouping and fewer
  generic cards.
- Make active filters and no-results states more expressive without reducing usability.
- Preserve all current catalog behaviour.

### About

- Use bakery process photography and confident typography to express living heritage.
- Replace the identical three-column value grid with a more narrative composition.
- Keep claims grounded in confirmed business information.

### Visit And Contact

- Make the physical location, hours, phone, directions, and WhatsApp actions immediately prominent.
- Use the location and opening hours as a strong branded destination panel.
- Keep unconfirmed email and stockist information honest and secondary.

### Header And Footer

- Strengthen the bakery seal and wordmark.
- Preserve navigation labels and inquiry access.
- Give the footer the presence of a closing brand statement, not only a utility area.

## Content And Copy

- Rewrite prominent copy in a warm, direct, specific voice.
- Do not invent history, founding dates, awards, product availability, or business claims.
- Preserve verified facts from the existing content modules.
- Keep all actionable labels unambiguous.
- Use Bajan identity confidently but avoid writing tourism copy for outsiders.

## Motion And Interaction

- Orchestrate the homepage hero entrance.
- Use masked or clipped image reveals for major photography.
- Add subtle movement to ribbons and bakery seals.
- Add tactile hover and press states to actionable elements.
- Keep core content visible before motion runs.
- Respect `prefers-reduced-motion`.

## Technical Approach

- Continue using SvelteKit and the existing static-site architecture.
- Keep business and catalog data in their current modules.
- Implement the new visual system primarily through `src/app.css` and focused component markup
  changes.
- Add small reusable presentation components only when they remove meaningful duplication.
- Do not add commerce, backend, checkout, or order-form functionality.
- Keep GitHub Pages compatibility.

## Testing And Verification

- Preserve existing unit and Playwright behaviour tests.
- Update heading-based assertions when approved copy changes.
- Add focused tests for any new interactive behaviour.
- Run:
  - `npm run check`
  - `npm run lint`
  - `npm run test:unit -- --run`
  - `npm run test:e2e`
  - `npm run build`
- Visually inspect the homepage, products, about, and contact routes at desktop and mobile sizes.
- Verify keyboard access, visible focus, readable contrast, reduced-motion fallback, filter behaviour,
  links, prices, hours, and inquiry actions.

## Acceptance Criteria

- The first viewport unmistakably presents Carter's as a Bajan neighbourhood bakery.
- The visual design feels rooted, generous, and spirited.
- The site does not resemble a resort, colonial heritage attraction, rustic farmhouse brand, or
  generic café.
- Existing products, prices, hours, directions, and inquiry flows remain accurate and usable.
- Every route shares the Market-Day Institution identity.
- The homepage contains at least one memorable, deliberate “wow” moment.
- Mobile layouts retain the brand character and practical actions.
- Required checks, tests, build, and visual verification pass.

## Out Of Scope

- Cart, checkout, payment processing, online ordering, or backend services
- New unverified business claims or historical content
- Replacing the current product catalog data
- Resort, souvenir, or colonial-themed visual motifs
