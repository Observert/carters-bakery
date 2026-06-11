import { expect, test } from '@playwright/test';

test('home page presents the bakery without commerce controls', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { name: 'See what’s fresh today' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Browse all products' })).toBeVisible();
	await expect(
		page.locator('#inquire').getByRole('link', { name: 'Message us on WhatsApp' })
	).toBeVisible();
	await expect(
		page
			.getByLabel('Freshly baked in Saint George')
			.getByText('Froster Hall, Saint George, Barbados')
	).toBeVisible();
	await expect(page.getByRole('link', { name: 'Cart', exact: true })).toHaveCount(0);
	await expect(page.getByRole('button', { name: 'Checkout', exact: true })).toHaveCount(0);
	await expect(page.getByRole('button', { name: 'Pay now', exact: true })).toHaveCount(0);
});

test('product explorer searches the supplied catalog', async ({ page }) => {
	await page.goto('/products/');
	await page.getByPlaceholder('Search breads, pastries and more').fill('whole wheat');

	const catalog = page.getByLabel('Product catalog');
	await expect(catalog.getByRole('heading', { name: 'Salt Bread W/W' })).toBeVisible();
	await expect(catalog.getByRole('heading', { name: 'Turnover W/W' })).toBeVisible();
	await expect(catalog.getByRole('heading', { name: 'Jam Puffs' })).toHaveCount(0);
});

test('contact page exposes verified visit and inquiry actions', async ({ page }) => {
	await page.goto('/contact/');

	await expect(page.getByRole('heading', { name: 'Visit Carter’s Bakery' })).toBeVisible();
	const visit = page.getByLabel('Freshly baked in Saint George');
	await expect(visit.getByRole('link', { name: 'Get directions' })).toHaveAttribute(
		'href',
		'https://share.google/tsI5lvyWA4v0tc712'
	);
	await expect(visit.getByRole('link', { name: '+1 246-436-5211' })).toHaveAttribute(
		'href',
		'tel:+12464365211'
	);
});
