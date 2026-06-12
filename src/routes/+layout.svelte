<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#1a6b3a" />
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />
