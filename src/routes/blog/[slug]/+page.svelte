<script>
	export let data;
</script>

<h2>{data.post.title}</h2>
<div class="info-container">
	<span class="info"><strong>Discovered</strong> {data.post.date}</span>
	<span class="info"><strong>Diameter</strong> {data.post.diameter}km</span>
	<span class="info"><strong>Mass</strong> {data.post.mass} &#215; 10<sup>16</sup> kg</span>
	<span class="info"><strong>Orbital Period</strong> {data.post.orbitalPeriod}d</span>
</div>
<div>{@html data.post.content}</div>

<style>
	h2 {
		text-align: center;
	}

	.info-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		margin-bottom: -8px;
		margin-right: -8px;
	}

	.info {
		color: #f5dada;
		background-color: #441414;
		padding: 3px 6px;
		border: 2px solid #794949;
		border-radius: 6px;
		margin-bottom: 8px;
		margin-right: 8px;
	}
</style>