<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="description"
		content="Carter’s Bakery, the Home of Bajan Bread in Saint George, Barbados."
	/>
	<meta name="theme-color" content="#147a38" />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />
