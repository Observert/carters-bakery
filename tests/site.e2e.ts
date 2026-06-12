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
	const menuSize = await openNavigation.evaluate((element) => {
		const bounds = element.getBoundingClientRect();
		return { height: bounds.height, width: bounds.width };
	});
	expect(menuSize.height).toBeGreaterThanOrEqual(44);
	expect(menuSize.width).toBeGreaterThanOrEqual(44);
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

test('mobile and tablet routes never create page-level horizontal scrolling', async ({ page }) => {
	const routes = ['/', '/products/', '/about/', '/contact/'];
	const viewports = [
		{ width: 320, height: 568 },
		{ width: 390, height: 844 },
		{ width: 667, height: 375 },
		{ width: 768, height: 1024 }
	];

	for (const viewport of viewports) {
		await page.setViewportSize(viewport);

		for (const route of routes) {
			await page.goto(route);
			const dimensions = await page.evaluate(() => ({
				clientWidth: document.documentElement.clientWidth,
				scrollWidth: document.documentElement.scrollWidth
			}));

			expect(dimensions.scrollWidth, `${route} at ${viewport.width}px`).toBe(
				dimensions.clientWidth
			);
		}
	}
});

test('phone landscape keeps the homepage primary action in the first viewport', async ({
	page
}) => {
	await page.setViewportSize({ width: 667, height: 375 });
	await page.goto('/');

	const actionBounds = await page
		.getByRole('link', { name: 'Browse all products' })
		.evaluate((element) => element.getBoundingClientRect().toJSON());

	expect(actionBounds.top).toBeGreaterThanOrEqual(0);
	expect(actionBounds.bottom).toBeLessThanOrEqual(375);
});

test('narrow about hero keeps its headline compact', async ({ page }) => {
	await page.setViewportSize({ width: 320, height: 568 });
	await page.goto('/about/');

	const headingHeight = await page
		.getByRole('heading', { level: 1, name: 'Bajan baking, made to share' })
		.evaluate((element) => element.getBoundingClientRect().height);

	expect(headingHeight).toBeLessThanOrEqual(160);
});

test('mobile inquiry links provide touch-friendly targets', async ({ page }) => {
	await page.setViewportSize({ width: 320, height: 568 });
	await page.goto('/contact/');
	const contactGrid = page.locator('.contact-grid');

	for (const name of ['+1 246-436-5211', 'Message us']) {
		const linkHeight = await contactGrid
			.getByRole('link', { name, exact: true })
			.evaluate((element) => element.getBoundingClientRect().height);

		expect(linkHeight, name).toBeGreaterThanOrEqual(44);
	}
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
