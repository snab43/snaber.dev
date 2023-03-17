<script>	
	let works = [
		{
			title: "Title",
			img: "",
			link: ""
		}
	]
</script>

<h1>+ PORTFOLIO PLANET +</h1>

<h2>Here's My Work!</h2>

<p>More projects can be found on GitHub.</p>

{#each works as work}
	<div class="work">
		<strong>{work.title}</strong>
		<a href="{work.link}">Link</a>
	</div>
{/each}