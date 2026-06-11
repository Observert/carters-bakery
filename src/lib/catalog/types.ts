export type CategoryId = 'breads' | 'sweet-bakes' | 'biscuits-pastries' | 'rolls-savouries';

export interface ProductVariant {
	label: string;
	price: number;
}

export interface Product {
	name: string;
	category: CategoryId;
	variants: ProductVariant[];
	featured?: boolean;
}

export interface Category {
	id: CategoryId;
	name: string;
	description: string;
	image: string;
}

export interface OrderOnlyItem {
	name: string;
	description: string;
	variants?: ProductVariant[];
}
