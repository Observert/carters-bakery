import type { Category, OrderOnlyItem, Product } from './types';

export const categories: Category[] = [
	{
		id: 'breads',
		name: 'Breads',
		description: 'Traditional Bajan loaves, salt breads and everyday favourites.',
		image: '/images/breads.jpg'
	},
	{
		id: 'sweet-bakes',
		name: 'Sweet Bakes',
		description: 'Homemade cakes, pones and richly spiced sweet breads.',
		image: '/images/sweet-bakes.jpg'
	},
	{
		id: 'biscuits-pastries',
		name: 'Biscuits & Pastries',
		description: 'Classic biscuits, slices and flaky treats for any time of day.',
		image: '/images/biscuits-pastries.jpg'
	},
	{
		id: 'rolls-savouries',
		name: 'Rolls & Savouries',
		description: 'Soft rolls, buns and savoury bakery staples.',
		image: '/images/rolls-savouries.jpg'
	}
];

export const catalog: Product[] = [
	{
		name: 'Banana Bread',
		category: 'breads',
		featured: true,
		variants: [
			{ label: 'Whole', price: 7.95 },
			{ label: 'Half', price: 4.25 }
		]
	},
	{
		name: 'Bodyline',
		category: 'biscuits-pastries',
		variants: [
			{ label: "1's", price: 3.25 },
			{ label: "2's", price: 6.5 },
			{ label: "3's", price: 9.75 }
		]
	},
	{ name: 'Bread Pone', category: 'sweet-bakes', variants: [{ label: 'Each', price: 4.75 }] },
	{
		name: 'Cake',
		category: 'sweet-bakes',
		variants: [
			{ label: 'Quarter', price: 5.7 },
			{ label: 'Half', price: 11.25 },
			{ label: 'Whole', price: 22 }
		]
	},
	{
		name: 'Cassava Pone',
		category: 'sweet-bakes',
		variants: [
			{ label: 'Half', price: 3.8 },
			{ label: 'Whole', price: 7.5 }
		]
	},
	{
		name: 'Chocolate Fudge',
		category: 'sweet-bakes',
		variants: [{ label: 'Each', price: 7.25 }]
	},
	{ name: 'Choice Loaf', category: 'breads', variants: [{ label: 'Each', price: 5 }] },
	{
		name: 'Raisin Biscuits',
		category: 'biscuits-pastries',
		variants: [
			{ label: "1's", price: 2.5 },
			{ label: "2's", price: 5 },
			{ label: "3's", price: 7.5 }
		]
	},
	{
		name: 'Rock Cake',
		category: 'biscuits-pastries',
		variants: [{ label: 'Each', price: 2 }]
	},
	{
		name: 'River Cake',
		category: 'biscuits-pastries',
		variants: [{ label: 'Each', price: 2.5 }]
	},
	{
		name: 'Salt Bread',
		category: 'breads',
		featured: true,
		variants: [
			{ label: "1's", price: 0.75 },
			{ label: "4's", price: 3 },
			{ label: "6's", price: 4.5 }
		]
	},
	{
		name: 'Salt Bread W/W',
		category: 'breads',
		variants: [
			{ label: "1's", price: 0.8 },
			{ label: "4's", price: 3.2 },
			{ label: "6's", price: 4.75 }
		]
	},
	{
		name: 'Sandbox',
		category: 'breads',
		variants: [
			{ label: "1's", price: 1.5 },
			{ label: "2's", price: 3 },
			{ label: "4's", price: 6 }
		]
	},
	{ name: 'Pointed Bread', category: 'breads', variants: [{ label: 'Each', price: 4.25 }] },
	{
		name: 'Pointed Bread W/W N/S',
		category: 'breads',
		variants: [{ label: 'Each', price: 4.5 }]
	},
	{
		name: 'Coconut Slices',
		category: 'sweet-bakes',
		featured: true,
		variants: [
			{ label: "1's", price: 2.5 },
			{ label: "2's", price: 5 },
			{ label: "3's", price: 7.5 }
		]
	},
	{
		name: 'Corn Biscuit',
		category: 'biscuits-pastries',
		variants: [{ label: 'Each', price: 2.25 }]
	},
	{ name: 'Corn Pone', category: 'sweet-bakes', variants: [{ label: 'Half', price: 3.8 }] },
	{
		name: 'Cupcakes - Frosted',
		category: 'sweet-bakes',
		variants: [{ label: "3's", price: 5 }]
	},
	{
		name: 'Granburger Rolls',
		category: 'rolls-savouries',
		variants: [{ label: 'Pack', price: 3 }]
	},
	{
		name: 'Hamburger Buns',
		category: 'rolls-savouries',
		variants: [{ label: "4's", price: 2 }]
	},
	{
		name: 'Horseshoe',
		category: 'biscuits-pastries',
		variants: [
			{ label: "1's", price: 2.5 },
			{ label: "2's", price: 5 },
			{ label: "3's", price: 7.5 }
		]
	},
	{
		name: 'Hot Dog Rolls',
		category: 'rolls-savouries',
		variants: [{ label: "4's", price: 2 }]
	},
	{ name: 'Sandwich Loaf', category: 'breads', variants: [{ label: 'Regular', price: 4.5 }] },
	{ name: 'Sandwich Loaf', category: 'breads', variants: [{ label: 'Large', price: 6.5 }] },
	{
		name: 'Sandwich Loaf W/W',
		category: 'breads',
		variants: [
			{ label: 'Regular', price: 4.75 },
			{ label: 'Large', price: 6.75 }
		]
	},
	{
		name: 'Sweet Bread - N/S',
		category: 'breads',
		variants: [
			{ label: 'Small', price: 6.5 },
			{ label: 'Large', price: 8.5 }
		]
	},
	{
		name: 'Sweet Bread - W/W',
		category: 'breads',
		variants: [
			{ label: 'Small', price: 6.75 },
			{ label: 'Large', price: 9 }
		]
	},
	{
		name: 'Sweet Bread',
		category: 'breads',
		featured: true,
		variants: [
			{ label: 'Small', price: 6.5 },
			{ label: 'Large', price: 8.5 }
		]
	},
	{
		name: 'Tennis Biscuit',
		category: 'biscuits-pastries',
		variants: [
			{ label: "1's", price: 1.5 },
			{ label: "2's", price: 3 },
			{ label: "4's", price: 6 }
		]
	},
	{
		name: 'Turnover',
		category: 'biscuits-pastries',
		variants: [
			{ label: "1's", price: 1.75 },
			{ label: "2's", price: 3.5 },
			{ label: "3's", price: 5.25 },
			{ label: "4's", price: 7 }
		]
	},
	{
		name: 'Hoagies',
		category: 'rolls-savouries',
		variants: [{ label: 'Each', price: 1.5 }]
	},
	{
		name: 'Hoagies W/W',
		category: 'rolls-savouries',
		variants: [{ label: 'Each', price: 1.75 }]
	},
	{
		name: 'Lead Pipes',
		category: 'biscuits-pastries',
		variants: [{ label: 'Each', price: 2 }]
	},
	{
		name: 'Meat Rolls',
		category: 'rolls-savouries',
		featured: true,
		variants: [
			{ label: "1's", price: 3 },
			{ label: "2's", price: 6 },
			{ label: "3's", price: 9 }
		]
	},
	{
		name: 'Pumpkin Bread',
		category: 'breads',
		variants: [
			{ label: 'Whole', price: 7.95 },
			{ label: 'Half', price: 4.25 }
		]
	},
	{
		name: 'Turnover W/W',
		category: 'biscuits-pastries',
		variants: [
			{ label: "1's", price: 1.85 },
			{ label: "2's", price: 3.7 },
			{ label: "3's", price: 5.55 },
			{ label: "4's", price: 7.4 }
		]
	},
	{
		name: 'Vanilla Ice Cake',
		category: 'sweet-bakes',
		variants: [{ label: 'Square', price: 7 }]
	},
	{
		name: 'Medium W/W Salt Bread',
		category: 'breads',
		variants: [{ label: 'Each', price: 0.7 }]
	},
	{
		name: 'Medium Salt Bread',
		category: 'breads',
		variants: [{ label: 'Each', price: 0.65 }]
	},
	{
		name: 'Mini W/W Salt Bread',
		category: 'breads',
		variants: [{ label: 'Each', price: 0.65 }]
	},
	{
		name: 'Mini Salt Bread',
		category: 'breads',
		variants: [{ label: 'Each', price: 0.6 }]
	}
];

export const orderOnlyItems: OrderOnlyItem[] = [
	{
		name: 'Pizza Doughs',
		description: 'Fresh dough prepared in advance for your recipe.'
	},
	{
		name: 'Mini Meat Rolls',
		description: 'Bite-size versions of our savoury meat rolls.'
	},
	{
		name: 'Jam Puffs',
		description: 'Flaky jam-filled pastries prepared by advance order.',
		variants: [
			{ label: "1's", price: 2.5 },
			{ label: "2's", price: 5 },
			{ label: "3's", price: 15 }
		]
	},
	{
		name: 'Currant Slices',
		description: 'Classic currant slices prepared by advance order.',
		variants: [
			{ label: "1's", price: 2.5 },
			{ label: "2's", price: 5 },
			{ label: "3's", price: 7.5 }
		]
	},
	{
		name: 'Decorated Cakes',
		description: 'Celebration cakes prepared for special occasions.'
	},
	{
		name: 'Large Quantities',
		description: 'Advance orders for larger quantities of any bakery product.'
	}
];
