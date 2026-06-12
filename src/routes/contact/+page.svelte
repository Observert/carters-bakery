<script lang="ts">
	import { business, inquiryLinks, stockists } from '$lib/content/business';
</script>

<svelte:head>
	<title>Visit & Contact | Carter’s Bakery</title>
	<meta
		name="description"
		content="Visit Carter’s Bakery in Saint George, Barbados. Get directions, hours, phone, WhatsApp and social links."
	/>
</svelte:head>

<section class="page-hero page-hero-contact">
	<div class="container narrow">
		<span class="section-label">Visit & contact</span>
		<h1>Come by the bakery</h1>
		<p>
			Visit Carter’s Bakery in Saint George, Barbados. Browse what’s fresh, ask about special
			orders, or message us on WhatsApp.
		</p>
	</div>
</section>

<section class="section container contact-grid" id="inquire">
	<div class="contact-card contact-primary">
		<span class="section-label section-label-location">Location</span>
		<h2>{business.address}</h2>
		<p>Freshly baked in Saint George, Barbados.</p>
		<a class="button button-light" href={business.map} target="_blank" rel="noreferrer">
			Get directions
		</a>
		<span>Google Maps</span>
	</div>
	<div class="contact-card">
		<h2>Phone</h2>
		<p>Call the bakery directly to ask about products, availability or special orders.</p>
		<a class="text-link text-link-large" href={inquiryLinks.phone}>{business.phoneDisplay}</a>
	</div>
	<div class="contact-card">
		<h2>WhatsApp</h2>
		<p>Message Carter’s Bakery on WhatsApp for quick questions and advance orders.</p>
		<a
			class="text-link text-link-large"
			href={inquiryLinks.whatsapp}
			target="_blank"
			rel="noreferrer"
		>
			Message us
		</a>
	</div>
</section>

<section class="section container">
	<div class="visit-panel">
		<div class="visit-summary">
			<span class="section-label section-label-framed">Opening hours</span>
			<h2>When to visit</h2>
			<p>Visit the bakery during opening hours to browse what’s fresh.</p>
		</div>
		<div class="hours-card">
			<h3>Opening hours</h3>
			<ul>
				{#each business.hours as entry (entry.day)}
					<li>
						<span>{entry.day}</span>
						<strong>{entry.hours}</strong>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="section container">
	{#if stockists.length}
		<div class="stockists-section">
			<div>
				<span class="section-label">Stockists</span>
				<h2>Find Carter’s near you</h2>
				<p>Selected Carter’s products are available at these locations.</p>
			</div>
			<div class="stockists-list">
				{#each stockists as stockist (stockist.name)}
					<article>
						<h3>{stockist.name}</h3>
						<p>{stockist.address}</p>
					</article>
				{/each}
			</div>
		</div>
	{:else}
		<div class="stockists-section">
			<div>
				<span class="section-label">Stockists</span>
				<h2>Find Carter’s near you</h2>
				<p>
					Stockists will be listed here as they become available. Visit the bakery in Saint George
					for the full range.
				</p>
			</div>
			<div class="framed-notice">
				<p>Stockists coming soon. Visit the bakery for the full range.</p>
			</div>
		</div>
	{/if}
</section>

<section class="section container">
	<div class="social-section">
		<div>
			<span class="section-label">Follow</span>
			<h2>Stay in touch</h2>
			<p>
				Follow Carter’s Bakery on Facebook and Instagram for updates, specials and new products.
			</p>
		</div>
		<div class="button-row">
			<a class="button" href={business.facebook} target="_blank" rel="noreferrer">Facebook</a>
			<a class="button button-outline" href={business.instagram} target="_blank" rel="noreferrer"
				>Instagram</a
			>
		</div>
	</div>
</section>
