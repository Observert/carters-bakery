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
			<li>
				<span>Monday – Saturday</span>
				<strong>8:00 am – 8:00 pm</strong>
			</li>
			<li>
				<span>Sunday</span>
				<strong>Closed</strong>
			</li>
		</ul>
	</div>
</section>
