<script>
	import { page } from '$app/stores';

	const path = $page.url.pathname;
	console.log(path);

	// Remove zero-length tokens.
	const tokens = path.split('/').filter((t) => t !== '');

	// Create { label, href } pairs for each token.
	let tokenPath = '';
	let crumbs = tokens.map((t) => {
		tokenPath += '/' + t;
		return {
			label: t,
			href: tokenPath
		};
	});

	// Add a way to get home too.
	crumbs.unshift({ label: 'home', href: '/' });
</script>

{#each crumbs as c, i}
    {#if i == crumbs.length-1}
        {c.label}
    {:else}
        <a href={c.href}>{c.label}</a> &gt;&nbsp;
    {/if}
{/each}