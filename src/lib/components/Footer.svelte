<script lang="ts">
	import { base } from '$app/paths';
	import { business, inquiryLinks } from '$lib/content/business';
</script>

<footer class="site-footer">
	<div class="container footer-grid">
		<div>
			<a class="brand brand-light" href={`${base}/`} aria-label="Carter's Bakery home">
				<span class="brand-mark">C</span>
				<span>
					<strong>Carter’s Bakery</strong>
					<small>{business.tagline}</small>
				</span>
			</a>
			<p>Freshly baked Bajan breads, pastries and special-occasion favourites.</p>
		</div>
		<div>
			<h2>Visit</h2>
			<p>{business.address}</p>
			<a href={business.map} target="_blank" rel="noreferrer">Get directions</a>
		</div>
		<div>
			<h2>Get in touch</h2>
			<a href={inquiryLinks.whatsapp} target="_blank" rel="noreferrer">Message us on WhatsApp</a>
			<a href={inquiryLinks.phone}>{business.phoneDisplay}</a>
			<span>Email address coming soon</span>
		</div>
		<div>
			<h2>Follow</h2>
			<a href={business.facebook} target="_blank" rel="noreferrer">Facebook</a>
			<a href={business.instagram} target="_blank" rel="noreferrer">Instagram</a>
		</div>
	</div>
	<div class="container footer-bottom">
		<span>© {new Date().getFullYear()} Carter’s Bakery</span>
		<span>Prices shown in Barbados dollars (BBD).</span>
	</div>
</footer>
