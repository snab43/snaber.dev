<script>
	import { formatDate } from "$lib/utils.js";
	import GuestbookForm from "$lib/GuestbookForm.svelte";

	export let data;
</script>

<h1>+ Guestbook Planet +</h1>
<h2>Sign the Galaxybook</h2>
<p>tell us your story! what galaxy are you coming from?</p>

<GuestbookForm />

<div class="star-row"></div>

<h2>Galaxybook Transmissions</h2>
<p><em><strong>note:</strong> the transmissions below are not reflective of the views of the site owner.</em></p>
{#await data.streamed.posts}
	<p>Getting posts...</p>
{:then value}
	<ul>
		{#each value as post}
			<li class="post">
				<div class="post-header">
					<span>&#62;{post.name}</span>
					<span>{formatDate(post.date)}</span>
				</div>
				<div class="post-body">{post.message}</div>
			</li>
		{/each}
	</ul>
{/await}

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.post {
		border-radius: 6px;
		background-color: rgb(0, 0, 0);
		padding: 12px;
		box-shadow: 0px 0px 8px rgba(142, 199, 142, 0.1), 0px 0px 2px rgba(82, 218, 82, 0.1);
		transition: box-shadow 1s ease;
		position: relative;
		overflow: hidden;
	}

	.post::before {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		content: "";
		background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.1));
		z-index: 2;
		background-size: 100% 3px, 2px 100%;
		pointer-events: none;
	}

	.post:hover {
		box-shadow: 0px 0px 14px rgba(142, 199, 142, 0.3), 0px 0px 4px rgba(82, 218, 82, 0.5);
		transition: box-shadow 0.2s ease;
	}

	.post:not(:last-child) {
		margin-bottom: 12px;
	}

	.post-header {
		font-family: 'VT323', monospace;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		color: rgb(26, 241, 26);
		margin-bottom: 3px;
	}

	.post-body {
		color: rgb(187, 255, 187);
	}
</style>