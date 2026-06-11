export interface BusinessHour {
	day: string;
	hours: string;
}

export interface Stockist {
	name: string;
	address: string;
}

export interface Special {
	title: string;
	description: string;
}

export const business = {
	name: "Carter's Bakery",
	tagline: 'The Home of Bajan Bread',
	address: 'Froster Hall, Saint George, Barbados',
	phoneDisplay: '+1 246-436-5211',
	phone: '12464365211',
	whatsappDisplay: '+1 246-269-1830',
	whatsapp: '12462691830',
	map: 'https://share.google/tsI5lvyWA4v0tc712',
	facebook: 'https://www.facebook.com/cartersbakerybarbados/',
	instagram: 'https://www.instagram.com/cartersbakerybarbados/',
	hours: [
		{ day: 'Monday', hours: '8:00 am-8:00 pm' },
		{ day: 'Tuesday', hours: '8:00 am-8:00 pm' },
		{ day: 'Wednesday', hours: '8:00 am-8:00 pm' },
		{ day: 'Thursday', hours: '8:00 am-8:00 pm' },
		{ day: 'Friday', hours: '8:00 am-8:00 pm' },
		{ day: 'Saturday', hours: '8:00 am-8:00 pm' },
		{ day: 'Sunday', hours: 'Closed' }
	] satisfies BusinessHour[]
};

const whatsappMessage =
	"Hello Carter's Bakery, I'd like to ask about product availability or a special order.";

export const inquiryLinks = {
	phone: `tel:+${business.phone}`,
	whatsapp: `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
};

export const specials: Special[] = [];
export const stockists: Stockist[] = [];
