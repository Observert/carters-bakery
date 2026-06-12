# Design System

## Direction

**Market-Day Institution**

Carter's Bakery should feel like a trusted Bajan neighbourhood institution on a bright, busy day:
rooted, generous, and spirited. The visual system combines ceremonial confidence with the warmth of
a familiar local counter. It expresses heritage through colour, rhythm, typography, and composition,
not through tourist motifs or colonial nostalgia.

## Theme

- Light, image-led brand experience.
- True off-white and deep bread-brown provide a clear foundation.
- Sunlit ochre carries warmth and recognition.
- Heritage green signals trust and continuity.
- Guava coral adds spirited emphasis.
- Sections may become fully colour-drenched when the narrative benefits from greater energy.

## Color Palette

Use OKLCH tokens in CSS, with these roles:

| Role          | Token                   | Value                                                      | Use                                  |
| ------------- | ----------------------- | ---------------------------------------------------------- | ------------------------------------ |
| Background    | `--chalk`               | `oklch(97% 0.008 145)`                                     | Main page background                 |
| Ink           | `--bread-brown`         | `oklch(25% 0.035 52)`                                      | Primary text and dark surfaces       |
| Heritage      | `--heritage-green`      | `oklch(38% 0.095 150)`                                     | Brand anchors and primary actions    |
| Heritage dark | `--heritage-green-dark` | `oklch(27% 0.07 150)`                                      | Drenched sections and footer         |
| Sun           | `--sun-ochre`           | `oklch(83% 0.15 88)`                                       | Hero fields, ribbons, and highlights |
| Guava         | `--guava-coral`         | `oklch(68% 0.16 36)`                                       | Stamps, active moments, and delight  |
| Leaf tint     | `--leaf-wash`           | `oklch(93% 0.035 145)`                                     | Quiet section separation             |
| Rule          | `--rule`                | `color-mix(in oklch, var(--bread-brown) 18%, transparent)` | Borders and dividers                 |

Use colour with commitment. Avoid timid neutral sections interrupted by small green accents. Do not
use generic beige, purple-blue gradients, or resort-style tropical palettes.

## Typography

- **Display:** `Bitter`, a sturdy serif with warmth and institutional presence.
- **Body and UI:** `Source Sans 3`, a clear humanist sans-serif.
- Headlines use confident weight, restrained tracking, and compact line-height.
- Body copy remains highly readable, with line length capped near 68 characters.
- Replace repeated tiny uppercase section labels with varied editorial cues: ribbons, conversational
  introductions, framed notices, and occasional location lines.

## Logo And Brand Mark

Retain the circular `C` mark as a continuity device, but make it feel like a bakery seal:

- Use the display serif.
- Add a double-ring or subtle scalloped edge where appropriate.
- Pair it with a stronger wordmark and the existing tagline.
- Allow the seal to appear as a stamp over photography, on ribbons, and in transition moments.

## Layout

- Use asymmetric compositions and decisive image crops.
- Let photography break section boundaries or occupy full-width fields.
- Replace repeated identical card grids with mixed treatments: image strips, framed menu panels,
  staggered category features, and ruled price lists.
- Keep practical information, especially products, prices, hours, and contact actions, easy to scan.
- Use varied spacing to create rhythm: generous visual moments followed by compact information
  sections.

## Components

### Header

- Stronger wordmark and bakery seal.
- Compact, dependable navigation.
- A framed or colour-filled order inquiry action.
- Sticky treatment remains quiet and readable.

### Hero

- Lead with: **Fresh from the heart of Barbados.**
- Use a sun-ochre field with asymmetric photography.
- Include a strong location line and a bakery-seal stamp.
- Preserve product browsing and special-order actions.

### Product Categories

- Use editorial image crops and varied composition rather than four identical cards.
- Each category should feel abundant and appetising.
- Keep category names and product links clear.

### Product And Price Lists

- Present prices like a confident bakery board or printed counter list.
- Use rules, grouped categories, and clear typographic hierarchy.
- Keep search and filters practical and familiar.

### Notices And Calls To Action

- Use ribbons, framed notices, or drenched colour blocks.
- Do not default to rounded white cards.
- Copy should sound warm, direct, and locally confident.

### Footer

- Use heritage-green-dark or bread-brown.
- Give the tagline and location more prominence.
- Preserve directions, phone, WhatsApp, and social links.

## Imagery

- Use the existing food and bakery photography as the primary emotional material.
- Crop decisively and at varied aspect ratios.
- Prefer images showing abundance, hands, fresh bread, and the real work of baking.
- Avoid decorative tropical imagery, resort cues, or generic lifestyle photography.

## Motion

- Use a cinematic first-load sequence in the hero: masthead, headline, imagery, then seal.
- Animate ribbons and stamps with restrained directional movement and rotation.
- Reveal product imagery through clips or masks rather than repeated fades.
- Use responsive hover states that feel tactile and quick.
- Never delay navigation or hide core information behind animation.
- Provide a reduced-motion fallback that removes choreography while preserving the full layout.

## Voice

- Warm, direct, specific, and confident.
- Write as an established local bakery, not as a lifestyle startup.
- Prefer concise lines such as:
  - “Fresh from the heart of Barbados.”
  - “Baked here. Loved here.”
  - “What’s fresh at Carter’s.”
  - “Good bread, ready when you are.”
- Avoid generic hospitality language, exaggerated claims, and tourism copy.

## Responsive Behaviour

- Preserve the same character on mobile; do not reduce the design to stacked generic cards.
- Keep actions thumb-friendly and product information scannable.
- Recompose asymmetric layouts for mobile through deliberate crops, horizontal scrolling strips, and
  compact framed lists.
- Test headline wrapping, menu access, filters, prices, and inquiry actions at common breakpoints.
