<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';

	let menuOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/products/', label: 'Products' },
		{ href: '/about/', label: 'About' },
		{ href: '/contact/', label: 'Visit & Contact' }
	];

	const isActive = (href: string) => page.url.pathname === `${base}${href}`;
</script>

<header class="site-header">
	<div class="container header-inner">
		<a class="brand" href={`${base}/`} aria-label="Carter's Bakery home">
			<span class="brand-mark">C</span>
			<span>
				<strong>Carter’s Bakery</strong>
				<small>The Home of Bajan Bread</small>
			</span>
		</a>

		<button
			class="menu-toggle"
			type="button"
			aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
			aria-expanded={menuOpen}
			aria-controls="primary-navigation"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span><span></span>
		</button>

		<nav id="primary-navigation" class:open={menuOpen} aria-label="Primary navigation">
			{#each links as link (link.href)}
				<a
					href={`${base}${link.href}`}
					aria-current={isActive(link.href) ? 'page' : undefined}
					onclick={() => (menuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
			<a
				class="button button-small"
				href={`${base}/contact/#inquire`}
				onclick={() => (menuOpen = false)}
			>
				Ask about an order
			</a>
		</nav>
	</div>
</header>
