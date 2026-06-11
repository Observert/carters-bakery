<script lang="ts">
	import VisitPanel from '$lib/components/VisitPanel.svelte';
	import { business, inquiryLinks, stockists } from '$lib/content/business';
</script>

<svelte:head>
	<title>Visit & Contact | Carter’s Bakery</title>
	<meta
		name="description"
		content="Visit Carter’s Bakery in Froster Hall, Saint George, Barbados, or contact the bakery."
	/>
</svelte:head>

<section class="page-hero page-hero-contact">
	<div class="container narrow">
		<span class="section-label">Visit & contact</span>
		<h1>Visit Carter’s Bakery</h1>
		<p>
			Stop by for fresh breads and pastries, or message us before your visit to ask about
			availability and special orders.
		</p>
	</div>
</section>

<div class="section container"><VisitPanel /></div>

<section class="section container contact-grid" id="inquire">
	<article class="contact-card contact-primary">
		<span class="section-label">Order inquiries</span>
		<h2>Message us on WhatsApp</h2>
		<p>Ask about product availability, special orders, decorated cakes or larger quantities.</p>
		<a class="button button-light" href={inquiryLinks.whatsapp} target="_blank" rel="noreferrer">
			Message us on WhatsApp
		</a>
		<span>{business.whatsappDisplay}</span>
	</article>
	<article class="contact-card">
		<span class="section-label">Call the bakery</span>
		<h2>Speak with Carter’s</h2>
		<p>Call during opening hours for general questions and current availability.</p>
		<a class="text-link text-link-large" href={inquiryLinks.phone}>{business.phoneDisplay}</a>
	</article>
	<article class="contact-card">
		<span class="section-label">Email</span>
		<h2>Email address coming soon</h2>
		<p>This contact option is ready to be added when the bakery confirms its preferred email.</p>
	</article>
</section>

<section class="section section-soft">
	<div class="container stockists-section">
		<div>
			<span class="section-label">Stockists</span>
			<h2>Find Carter’s products nearby</h2>
			<p>Additional locations that carry Carter’s products will be listed here once confirmed.</p>
		</div>
		{#if stockists.length}
			<div class="stockist-list">
				{#each stockists as stockist (stockist.name)}
					<article>
						<h3>{stockist.name}</h3>
						<p>{stockist.address}</p>
					</article>
				{/each}
			</div>
		{:else}
			<div class="empty-state compact">
				<h3>Stockist details coming soon.</h3>
				<p>Visit the bakery directly or follow Carter’s on social media for updates.</p>
			</div>
		{/if}
	</div>
</section>

<section class="section container social-section">
	<div>
		<span class="section-label">Follow the bakery</span>
		<h2>See what’s fresh</h2>
	</div>
	<div class="button-row">
		<a class="button button-outline" href={business.facebook} target="_blank" rel="noreferrer"
			>Facebook</a
		>
		<a class="button button-outline" href={business.instagram} target="_blank" rel="noreferrer"
			>Instagram</a
		>
	</div>
</section>
