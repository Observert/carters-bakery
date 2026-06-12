<script lang="ts">
	import OrderOnlyPanel from '$lib/components/OrderOnlyPanel.svelte';
	import ProductExplorer from '$lib/components/ProductExplorer.svelte';
</script>

<svelte:head>
	<title>Products & Prices | Carter’s Bakery</title>
	<meta
		name="description"
		content="Browse Carter’s Bakery breads, sweet bakes, biscuits, pastries, rolls and savouries."
	/>
</svelte:head>

<section class="page-hero page-hero-products">
	<div class="container narrow">
		<span class="section-label">Products & prices</span>
		<h1>Good bread, ready when you are.</h1>
		<p>
			Search the current product list or browse by category. Prices are shown in Barbados dollars
			(BBD) and availability may change during the day.
		</p>
	</div>
</section>

<section class="section container">
	<ProductExplorer />
</section>

<div class="section container"><OrderOnlyPanel /></div>
