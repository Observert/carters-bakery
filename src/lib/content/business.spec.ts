import { describe, expect, it } from 'vitest';
import { business, inquiryLinks } from './business';

describe('business details', () => {
	it('uses the verified location and weekly hours', () => {
		expect(business.address).toContain('Froster Hall');
		expect(business.hours).toHaveLength(7);
		expect(business.hours.find((entry) => entry.day === 'Sunday')?.hours).toBe('Closed');
	});

	it('creates a WhatsApp inquiry link for the verified ordering number', () => {
		expect(inquiryLinks.whatsapp).toContain('12462691830');
		expect(inquiryLinks.whatsapp).toContain('Hello%20Carter');
	});
});
