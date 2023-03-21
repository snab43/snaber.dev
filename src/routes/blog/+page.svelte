<script>
	export let data;
</script>

<h1>+ BLOG PLANET +</h1>
<h2>Welcome!</h2>
<p>here at the blog planet you can visit various moons and see what they have to offer. (not much, if we're being honest).</p>

<h2>Latest moons</h2>
<ul>
	{#each data.summaries as { slug, title, date }}
		<li><a href="/blog/{slug}">{title}</a> (Discovered: {date})</li>
	{/each}
</ul>
