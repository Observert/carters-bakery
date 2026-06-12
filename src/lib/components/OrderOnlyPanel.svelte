<script lang="ts">
	import { orderOnlyItems } from '$lib/catalog/data';
	import { formatPrice } from '$lib/catalog/utils';
	import { inquiryLinks } from '$lib/content/business';
</script>

<section class="order-panel" aria-labelledby="order-only-heading">
	<div class="order-intro">
		<span class="section-label section-label-framed">Plan ahead</span>
		<h2 id="order-only-heading">Made to order</h2>
		<p>
			These items are prepared by advance order for the best quality and availability. Large
			quantities of any product should also be requested ahead.
		</p>
		<a class="button button-light" href={inquiryLinks.whatsapp} target="_blank" rel="noreferrer">
			Ask about an order
		</a>
	</div>
	<div class="order-list">
		{#each orderOnlyItems as item, index (item.name)}
			<article>
				<span class="order-number">{String(index + 1).padStart(2, '0')}</span>
				<div>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					{#if item.variants}
						<p class="order-prices">
							{item.variants
								.map((variant) => `${variant.label} ${formatPrice(variant.price)}`)
								.join(' · ')}
						</p>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>
