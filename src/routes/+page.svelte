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
	<meta
		name="description"
		content="Carter’s Bakery, the Home of Bajan Bread in Saint George, Barbados."
	/>
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<div class="location-line hero-entrance">Saint George, Barbados</div>
			<h1 class="hero-entrance hero-entrance-delay-1">Fresh from the heart of Barbados.</h1>
			<p class="hero-entrance hero-entrance-delay-2">
				Browse our in-store selection of Bajan breads, pastries and bakery favourites. Planning
				something special? We’re only a message away.
			</p>
			<div class="button-row hero-entrance hero-entrance-delay-2">
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
			<p class="hero-note hero-entrance hero-entrance-delay-3">
				All prices are shown in Barbados dollars (BBD).
			</p>
		</div>
		<div class="hero-image">
			<img
				class="image-reveal"
				src={`${base}/images/hero.jpg`}
				alt="A spread of fresh breads and Caribbean baked treats"
			/>
			<div class="hero-stamp bakery-seal guava">
				<span>C</span>
			</div>
		</div>
	</div>
</section>

<section class="section container">
	<div class="section-heading split-heading">
		<div>
			<span class="section-label section-label-ribbon">Browse the bakery</span>
			<h2>What’s fresh at Carter’s</h2>
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
					<span>Explore products &rarr;</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<section class="featured-strip">
	<div class="container featured-strip-inner">
		<h2>In-store favourites</h2>
		<div class="featured-products-row">
			{#each featuredProducts as product (product.name)}
				<article class="featured-product-item">
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
			<h2>Baked here. Loved here.</h2>
			<p>
				Carter’s Bakery is known for traditional Bajan salt bread, homemade sweet bread, turnovers,
				pastries and cakes. We keep the experience simple: browse what’s available, visit the
				bakery, or message us for special orders.
			</p>
			<a class="text-link" href={`${base}/about/`}>Learn about Carter’s &rarr;</a>
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
