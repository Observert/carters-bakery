import { describe, expect, it } from 'vitest';
import { catalog, categories, orderOnlyItems } from './data';
import { filterCatalog, formatPrice, variantCount } from './utils';

describe('catalog', () => {
	it('contains every priced variant from the supplied price list', () => {
		const orderOnlyVariantCount = orderOnlyItems.reduce(
			(total, item) => total + (item.variants?.length ?? 0),
			0
		);
		expect(variantCount(catalog) + orderOnlyVariantCount).toBe(81);
	});

	it('keeps jam puffs and currant slices out of the in-store catalog', () => {
		expect(catalog.some((product) => /jam puff|currant slice/i.test(product.name))).toBe(false);
		expect(orderOnlyItems.map((item) => item.name)).toEqual(
			expect.arrayContaining(['Jam Puffs', 'Currant Slices'])
		);
	});

	it('formats prices explicitly as Barbados dollars', () => {
		expect(formatPrice(7.95)).toBe('BBD $7.95');
		expect(formatPrice(0.6)).toBe('BBD $0.60');
	});

	it('searches product names and variant labels case-insensitively', () => {
		expect(filterCatalog(catalog, 'whole wheat', 'all').map((product) => product.name)).toEqual(
			expect.arrayContaining(['Salt Bread W/W', 'Sandwich Loaf W/W', 'Turnover W/W'])
		);
	});

	it('filters by category', () => {
		const breads = filterCatalog(catalog, '', 'breads');
		expect(breads.length).toBeGreaterThan(0);
		expect(breads.every((product) => product.category === 'breads')).toBe(true);
		expect(categories.map((category) => category.id)).toContain('breads');
	});
});
