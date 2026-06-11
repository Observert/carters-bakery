<script lang="ts">
	import { catalog, categories } from '$lib/catalog/data';
	import type { CategoryId } from '$lib/catalog/types';
	import { filterCatalog, formatPrice } from '$lib/catalog/utils';

	let query = $state('');
	let selectedCategory = $state<CategoryId | 'all'>('all');
	let filteredProducts = $derived(filterCatalog(catalog, query, selectedCategory));
</script>

<section class="product-explorer" aria-labelledby="catalog-heading">
	<h2 class="sr-only" id="catalog-heading">Product catalog</h2>
	<div class="explorer-controls">
		<label class="search-field">
			<span class="sr-only">Search products</span>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<circle cx="11" cy="11" r="6.5"></circle>
				<path d="m16 16 4 4"></path>
			</svg>
			<input bind:value={query} placeholder="Search breads, pastries and more" />
		</label>
		<label class="category-field">
			<span class="sr-only">Filter by category</span>
			<select bind:value={selectedCategory}>
				<option value="all">All categories</option>
				{#each categories as category (category.id)}
					<option value={category.id}>{category.name}</option>
				{/each}
			</select>
		</label>
	</div>

	<div class="category-tabs" aria-label="Product categories">
		<button
			class:active={selectedCategory === 'all'}
			type="button"
			onclick={() => (selectedCategory = 'all')}
		>
			All
		</button>
		{#each categories as category (category.id)}
			<button
				class:active={selectedCategory === category.id}
				type="button"
				onclick={() => (selectedCategory = category.id)}
			>
				{category.name}
			</button>
		{/each}
	</div>

	<div class="results-summary" aria-live="polite">
		<strong>{filteredProducts.length}</strong>
		<span>{filteredProducts.length === 1 ? 'product family' : 'product families'}</span>
	</div>

	{#if filteredProducts.length}
		<div class="product-grid">
			{#each filteredProducts as product (`${product.name}-${product.variants[0].label}`)}
				<article class="product-card">
					<div>
						<span class="product-category">
							{categories.find((category) => category.id === product.category)?.name}
						</span>
						<h3>{product.name}</h3>
					</div>
					<ul>
						{#each product.variants as variant (variant.label)}
							<li>
								<span>{variant.label}</span>
								<strong>{formatPrice(variant.price)}</strong>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	{:else}
		<div class="empty-state">
			<h3>No products match that search.</h3>
			<p>Try another name or choose a different category.</p>
			<button type="button" onclick={() => ((query = ''), (selectedCategory = 'all'))}
				>Clear filters</button
			>
		</div>
	{/if}
</section>
