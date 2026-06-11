import type { CategoryId, Product } from './types';

export function formatPrice(price: number) {
	return `BBD $${price.toFixed(2)}`;
}

export function variantCount(products: Product[]) {
	return products.reduce((total, product) => total + product.variants.length, 0);
}

function searchableText(value: string) {
	return value.toLowerCase().replaceAll('w/w', 'whole wheat').replaceAll('n/s', 'no sugar');
}

export function filterCatalog(products: Product[], query: string, category: CategoryId | 'all') {
	const normalizedQuery = searchableText(query.trim());

	return products.filter((product) => {
		const categoryMatches = category === 'all' || product.category === category;
		const searchMatches =
			normalizedQuery.length === 0 ||
			searchableText(product.name).includes(normalizedQuery) ||
			product.variants.some((variant) => searchableText(variant.label).includes(normalizedQuery));

		return categoryMatches && searchMatches;
	});
}
