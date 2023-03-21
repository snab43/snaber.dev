<script>
	export let data;
</script>

<div>
	<h1>+ Blog Planet's Moon +</h1>
	<a href="/blog">&#8592 Back to Blog Planet</a>

	<main>
		<slot />
	</main>

	<div class="star-row"></div>

	<div class="more-posts">
		<h2>More moons</h2>
		<ul>
			{#each data.summaries as { slug, title }}
				<li>
					<a href="/blog/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	main {
		margin: 24px 0;
	}
</style>