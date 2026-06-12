import { expect, test } from '@playwright/test';

test('home page presents the bakery without commerce controls', async ({ page }) => {
	await page.goto('/');

	await expect(
		page.getByRole('heading', { level: 1, name: 'Fresh from the heart of Barbados.' })
	).toBeVisible();
	await expect(page.getByRole('heading', { name: 'What’s fresh at Carter’s' })).toBeVisible();
	await expect(page.locator('meta[name="description"]')).toHaveAttribute(
		'content',
		'Carter’s Bakery, the Home of Bajan Bread in Saint George, Barbados.'
	);
	await expect(page.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute(
		'aria-current',
		'page'
	);
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
	await expect(page.getByRole('link', { name: 'Products', exact: true })).toHaveAttribute(
		'aria-current',
		'page'
	);
	const catalogHeading = page.locator('h2.sr-only');
	await expect(catalogHeading).toHaveCSS('position', 'absolute');
	await expect(catalogHeading).toHaveCSS('clip-path', 'inset(50%)');
	await page.getByPlaceholder('Search breads, pastries and more').fill('whole wheat');

	const catalog = page.getByLabel('Product catalog');
	await expect(catalog.getByRole('heading', { name: 'Salt Bread W/W' })).toBeVisible();
	await expect(catalog.getByRole('heading', { name: 'Turnover W/W' })).toBeVisible();
	await expect(catalog.getByRole('heading', { name: 'Jam Puffs' })).toHaveCount(0);
});

test('mobile navigation opens, identifies the current page and closes after navigation', async ({
	page
}) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/products/');

	const openNavigation = page.getByRole('button', { name: 'Open navigation' });
	await expect(openNavigation).toBeVisible();
	await openNavigation.click();

	const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
	await expect(navigation).toBeVisible();
	await expect(navigation.getByRole('link', { name: 'Products', exact: true })).toHaveAttribute(
		'aria-current',
		'page'
	);

	await navigation.getByRole('link', { name: 'About', exact: true }).click();
	await expect(page).toHaveURL('/about/');
	await expect(navigation).toBeHidden();
});

test('contact page exposes verified visit and inquiry actions', async ({ page }) => {
	await page.goto('/contact/');

	await expect(page.getByRole('heading', { name: 'Come by the bakery' })).toBeVisible();
	const contactGrid = page.locator('.contact-grid');
	await expect(contactGrid.getByRole('link', { name: 'Get directions' })).toHaveAttribute(
		'href',
		'https://share.google/tsI5lvyWA4v0tc712'
	);
	await expect(contactGrid.getByRole('link', { name: '+1 246-436-5211' })).toHaveAttribute(
		'href',
		'tel:+12464365211'
	);
});
