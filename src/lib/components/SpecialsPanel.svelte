<script lang="ts">
	import { specials } from '$lib/content/business';
</script>

<section class="specials-panel" aria-labelledby="specials-heading">
	<div>
		<span class="section-label">From the bakery</span>
		<h2 id="specials-heading">Today’s specials</h2>
	</div>
	{#if specials.length}
		<div class="specials-list">
			{#each specials as special (special.title)}
				<article>
					<h3>{special.title}</h3>
					<p>{special.description}</p>
				</article>
			{/each}
		</div>
	{:else}
		<div class="specials-empty">
			<strong>Specials change regularly.</strong>
			<p>Follow Carter’s Bakery on Facebook or Instagram, or message us to see what’s fresh.</p>
		</div>
	{/if}
</section>
