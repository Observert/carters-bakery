<script lang="ts">
	import { base } from '$app/paths';
	import { business } from '$lib/content/business';
</script>

<svelte:head>
	<title>About | Carter’s Bakery</title>
	<meta
		name="description"
		content="Learn about Carter’s Bakery, the Home of Bajan Bread in Saint George, Barbados."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container about-hero-grid">
		<div>
			<span class="section-label">{business.tagline}</span>
			<h1>Bajan baking, made to share</h1>
			<p>
				Carter’s Bakery is a neighbourhood bakery in Saint George, Barbados, offering freshly baked
				breads, pastries and cakes for everyday enjoyment and special occasions.
			</p>
		</div>
		<img src={`${base}/images/about.jpg`} alt="A baker arranging fresh loaves" />
	</div>
</section>

<section class="section container story-grid">
	<div>
		<span class="section-label">What we bake</span>
		<h2>Traditional favourites, baked fresh</h2>
	</div>
	<div class="story-copy">
		<p>
			The bakery’s range is grounded in familiar Bajan favourites: old-fashioned salt bread,
			homemade sweet bread, turnovers, biscuits, pastries, pones, rolls and celebration cakes.
		</p>
		<p>
			Most products are available in store, while selected pastries, decorated cakes, pizza dough
			and larger quantities are prepared by advance order.
		</p>
		<p>
			Our website is here to make finding products, prices, hours and contact details easier. For
			the freshest availability, message or visit the bakery directly.
		</p>
	</div>
</section>

<section class="section value-narrative">
	<div class="container value-narrative-grid">
		<article>
			<span>01</span>
			<h2>Local favourites</h2>
			<p>A wide selection of breads and pastries rooted in Bajan bakery traditions.</p>
		</article>
		<article>
			<span>02</span>
			<h2>Simple ordering</h2>
			<p>Ask about availability and special orders directly through WhatsApp.</p>
		</article>
		<article>
			<span>03</span>
			<h2>Made for occasions</h2>
			<p>Advance-order items and larger quantities for gatherings and celebrations.</p>
		</article>
	</div>
</section>
