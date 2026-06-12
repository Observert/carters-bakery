# Market-Day Institution Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the existing Market-Day Institution redesign into full alignment with `DESIGN.md` and the approved redesign specification, then prove it is cohesive, polished, and functional across all routes.

**Architecture:** Preserve the current SvelteKit route and content-data boundaries. Make focused markup and copy changes in route/components, keep visual-system corrections centralized in `src/app.css`, and use Playwright coverage plus browser inspection to protect practical flows while polishing the brand experience.

**Tech Stack:** SvelteKit 2, Svelte 5, TypeScript, CSS, Vitest, Playwright

---

### Task 1: Protect Brand Copy, Metadata, And Navigation

**Files:**

- Modify: `tests/site.e2e.ts`
- Modify: `src/routes/+layout.svelte`
- Modify: `src/routes/+page.svelte`
- Modify: `src/lib/components/Header.svelte`
- Modify: `src/lib/components/Footer.svelte`
- Modify: `src/lib/components/SpecialsPanel.svelte`
- Modify: `src/routes/about/+page.svelte`
- Modify: `src/routes/contact/+page.svelte`
- Modify: `src/routes/products/+page.svelte`

- [ ] **Step 1: Add failing Playwright assertions for the homepage brand promise, metadata, and active navigation**

```ts
await expect(
	page.getByRole('heading', { level: 1, name: 'Fresh from the heart of Barbados.' })
).toBeVisible();
await expect(page.locator('meta[name="description"]')).toHaveAttribute(
	'content',
	'Carter’s Bakery, the Home of Bajan Bread in Saint George, Barbados.'
);
await expect(page.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute(
	'aria-current',
	'page'
);
```

- [ ] **Step 2: Run the focused test and verify it fails for missing metadata and active navigation**

Run: `npm run test:e2e -- --grep "home page presents"`

Expected: FAIL because the homepage description and `aria-current="page"` are missing.

- [ ] **Step 3: Restore the homepage description, add active navigation state, and normalize customer-facing typography**

```svelte
<meta
	name="description"
	content="Carter’s Bakery, the Home of Bajan Bread in Saint George, Barbados."
/>
```

```svelte
<a
	href={`${base}${link.href}`}
	aria-current={isActive(link.href) ? 'page' : undefined}
	onclick={() => (menuOpen = false)}
>
	{link.label}
</a>
```

Use typographic apostrophes in customer-facing Carter’s copy and titles.

- [ ] **Step 4: Run the focused test and verify it passes**

Run: `npm run test:e2e -- --grep "home page presents"`

Expected: PASS.

### Task 2: Resolve Visual-System Drift And Route Cohesion

**Files:**

- Modify: `src/app.css`
- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/about/+page.svelte`
- Modify: `src/routes/contact/+page.svelte`
- Modify: `src/routes/products/+page.svelte`
- Modify: `src/lib/components/OrderOnlyPanel.svelte`
- Modify: `src/lib/components/SpecialsPanel.svelte`
- Modify: `src/lib/components/VisitPanel.svelte`

- [ ] **Step 1: Audit the rendered homepage, products, about, and contact routes at desktop and mobile sizes**

Record concrete gaps against:

- committed palette and typography
- varied editorial cues instead of repeated uppercase labels
- asymmetric image-led composition
- strong practical actions and visible interaction states
- no horizontal overflow or broken wrapping

- [ ] **Step 2: Replace repeated section-label scaffolding with a small set of intentional cue variants**

```svelte
<span class="section-label section-label-ribbon">Browse the bakery</span>
<span class="section-label section-label-location">Visit the bakery</span>
<span class="section-label section-label-framed">Plan ahead</span>
```

Keep labels that aid scanning, but vary their presentation by purpose rather than repeating one tiny-uppercase treatment everywhere.

- [ ] **Step 3: Centralize visual values and complete interactive states**

```css
:root {
	--chalk-raised: oklch(99% 0.004 145);
	--focus-ring: color-mix(in oklch, var(--guava-coral) 78%, var(--chalk));
	--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
}

.button:active {
	transform: translateY(1px);
}

.header-inner nav > a[aria-current='page'] {
	color: var(--heritage-green);
	text-decoration: underline;
	text-underline-offset: 0.45em;
}
```

Remove one-off hard-coded surface colours where a design token is appropriate, and ensure hover, focus, and active states are visible.

- [ ] **Step 4: Verify visual-system changes do not break behaviour**

Run: `npm run check && npm run test:unit -- --run`

Expected: PASS with zero Svelte diagnostics and 7 passing unit tests.

### Task 3: Polish Copy, Responsive Composition, And Edge States

**Files:**

- Modify: `src/app.css`
- Modify: `src/lib/components/ProductExplorer.svelte`
- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/about/+page.svelte`
- Modify: `src/routes/contact/+page.svelte`

- [ ] **Step 1: Review all visible copy using the approved voice**

Keep copy warm, direct, specific, and factual. Remove generic phrasing, duplicated information, and straight-apostrophe typography.

- [ ] **Step 2: Polish mobile and tablet composition**

Ensure:

- the asymmetric hero becomes a deliberate mobile composition
- product filters and actions have at least 44px touch targets
- horizontal strips provide visible overflow cues
- long headings and address text wrap without overflow
- category and product grids retain character rather than becoming generic stacked cards

- [ ] **Step 3: Polish empty and secondary states**

Make the no-results and no-stockists states helpful and visually aligned with framed notices, while keeping clear recovery actions.

- [ ] **Step 4: Run formatting and static verification**

Run: `npm run format && npm run check && npm run lint`

Expected: PASS with no formatting, type, or lint errors.

### Task 4: Full Behaviour And Visual Verification

**Files:**

- Modify if needed: `tests/site.e2e.ts`

- [ ] **Step 1: Run the complete automated suite**

Run: `npm test && npm run build`

Expected: All unit and Playwright tests pass, and the static production build completes.

- [ ] **Step 2: Run the Impeccable detector**

Run:

```sh
node /Users/shreyashphakadepawar/.codex/plugins/cache/impeccable/impeccable/3.5.0/skills/impeccable/scripts/detect.mjs --json src
```

Expected: No unresolved high-impact deterministic findings.

- [ ] **Step 3: Visually inspect all routes**

Inspect `/`, `/products/`, `/about/`, and `/contact/` at desktop and mobile widths. Verify the primary flow, search/filter empty state, menu, links, focus states, responsive layout, and reduced-motion fallback.

- [ ] **Step 4: Perform a requirement-by-requirement completion audit**

Compare current evidence against every acceptance criterion in
`docs/superpowers/specs/2026-06-12-market-day-institution-redesign.md`. Continue fixing until each criterion is directly supported by code, automated tests, or rendered-browser evidence.
