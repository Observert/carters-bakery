<script lang="ts">
	import { business, inquiryLinks } from '$lib/content/business';
</script>

<section class="visit-panel" aria-labelledby="visit-heading">
	<div class="visit-summary">
		<span class="section-label section-label-location">Visit the bakery</span>
		<h2 id="visit-heading">Freshly baked in Saint George</h2>
		<p>{business.address}</p>
		<div class="button-row">
			<a class="button" href={business.map} target="_blank" rel="noreferrer">Get directions</a>
			<a class="text-link" href={inquiryLinks.phone}>{business.phoneDisplay}</a>
		</div>
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
</section>
