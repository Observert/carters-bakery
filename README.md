# Carter's Bakery

A static SvelteKit website for Carter's Bakery in Saint George, Barbados.

## Local development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run check
npm run lint
npm run test:unit -- --run
npm run test:e2e
npm run build
```

## Content updates

- Product prices and order-only items: `src/lib/catalog/data.ts`
- Business details, hours, specials and stockists: `src/lib/content/business.ts`
- Editorial images: `static/images/`

The first release has no cart, checkout, payment processing, backend or order form. WhatsApp is
used for availability and special-order inquiries.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds the project with the repository name as
the SvelteKit base path and deploys the static `build/` output. When moving to a custom domain,
remove the `BASE_PATH` value from the workflow build step.
