<script lang="ts">
	import { base } from '$app/paths';
	import OrderOnlyPanel from '$lib/components/OrderOnlyPanel.svelte';
	import SpecialsPanel from '$lib/components/SpecialsPanel.svelte';
	import VisitPanel from '$lib/components/VisitPanel.svelte';
	import { catalog, categories } from '$lib/catalog/data';
	import { formatPrice } from '$lib/catalog/utils';
	import { inquiryLinks } from '$lib/content/business';

	const featuredProducts = catalog.filter((product) => product.featured);
</script>

<svelte:head>
	<title>Carter’s Bakery | The Home of Bajan Bread</title>
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<h1>See what’s fresh today</h1>
			<p>
				Browse our in-store selection of Bajan breads, pastries and bakery favourites. Planning
				something special? We’re only a message away.
			</p>
			<div class="button-row">
				<a class="button" href={`${base}/products/`}>Browse all products</a>
				<a
					class="button button-outline"
					href={inquiryLinks.whatsapp}
					target="_blank"
					rel="noreferrer"
				>
					Special orders
				</a>
			</div>
			<p class="hero-note">All prices are shown in Barbados dollars (BBD).</p>
		</div>
		<div class="hero-image">
			<img
				src={`${base}/images/hero.jpg`}
				alt="A spread of fresh breads and Caribbean baked treats"
			/>
			<div class="hero-stamp">
				<strong>Freshly baked</strong>
				<span>in Saint George</span>
			</div>
		</div>
	</div>
</section>

<section class="section container">
	<div class="section-heading split-heading">
		<div>
			<span class="section-label">Browse the bakery</span>
			<h2>Made for everyday favourites</h2>
		</div>
		<p>
			From traditional salt bread to sweet bakes and savoury rolls, find the products that Carter’s
			customers know and love.
		</p>
	</div>
	<div class="category-grid">
		{#each categories as category (category.id)}
			<a class="category-card" href={`${base}/products/`}>
				<img src={`${base}${category.image}`} alt="" />
				<div>
					<h3>{category.name}</h3>
					<p>{category.description}</p>
					<span>Explore products →</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<section class="section section-soft">
	<div class="container">
		<div class="section-heading split-heading">
			<div>
				<span class="section-label">Popular picks</span>
				<h2>In-store favourites</h2>
			</div>
			<a class="text-link" href={`${base}/products/`}>View the full price list →</a>
		</div>
		<div class="featured-grid">
			{#each featuredProducts as product (product.name)}
				<article class="featured-product">
					<span>{categories.find((category) => category.id === product.category)?.name}</span>
					<h3>{product.name}</h3>
					<p>From {formatPrice(product.variants[0].price)}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<div class="section container"><OrderOnlyPanel /></div>

<div class="section container"><SpecialsPanel /></div>

<section class="section about-preview">
	<div class="container about-preview-grid">
		<img src={`${base}/images/about.jpg`} alt="Fresh bread being arranged in a bakery" />
		<div>
			<span class="section-label">The Home of Bajan Bread</span>
			<h2>Baked for the community</h2>
			<p>
				Carter’s Bakery is known for traditional Bajan salt bread, homemade sweet bread, turnovers,
				pastries and cakes. We keep the experience simple: browse what’s available, visit the
				bakery, or message us for special orders.
			</p>
			<a class="text-link" href={`${base}/about/`}>Learn about Carter’s →</a>
		</div>
	</div>
</section>

<div class="section container"><VisitPanel /></div>

<section class="inquiry-strip" id="inquire">
	<div class="container inquiry-strip-inner">
		<div>
			<h2>Need help planning an order?</h2>
			<p>Message Carter’s Bakery on WhatsApp to ask about availability or advance orders.</p>
		</div>
		<a class="button button-light" href={inquiryLinks.whatsapp} target="_blank" rel="noreferrer">
			Message us on WhatsApp
		</a>
	</div>
</section>
