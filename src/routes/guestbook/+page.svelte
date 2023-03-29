<script>
	import { onMount } from "svelte";

	export let data;

	let submitting = false;
	let success = false;

	onMount(async () => {
		// AJAX Submit
		const handleSubmit = (event) => {
			event.preventDefault();

			const myForm = event.target;
			const formData = new FormData(myForm);
			submitting = true;
			
			fetch("/guestbook", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData).toString(),
			})
			.then(() => {
				console.log("Form successfully submitted");
				success = true;
				submitting = false;
				myForm.reset();
			})
			.catch((error) => {
				alert(error);
				submitting = false;
			});
		};

		document.querySelector("form").addEventListener("submit", handleSubmit);

		// Character limit
		document.querySelector("textarea").addEventListener("input", event => {
			const target = event.currentTarget;
			const maxLength = target.getAttribute("maxlength");
			const currentLength = target.value.length;

			const charLimit = document.querySelector("#charLimit");
			charLimit.textContent = `${currentLength} / ${maxLength}`;
		});
	});

	function formatDate(date) {
		let d = new Date(date);

		return d.toLocaleString("en-US");
	}
</script>

<h1>+ Guestbook Planet +</h1>
<h2>Sign the Galaxybook</h2>
<p>tell us your story! what galaxy are you coming from?</p>

<div class="form-container">
	{#if success}
		<span>thank you for your transmission!</span>
	{:else}
		<form name="guestbook" method="POST" netlify-honeypot="bot-field" data-netlify="true">
			<input type="hidden" name="form-name" value="guestbook" />
			<div class="form-input hidden">
				<label for="bot-field">Do not fill this out if you're human</label>
				<input name="bot-field" />
			</div>
			<div class="form-input">
				<label for="name">Your Name</label>
				<input type="text" name="name" required />
			</div>
			<div class="form-input">
				<label for="message">Your Message</label>
				<textarea rows="4" maxlength="500" name="message" required />
				<span id="charLimit">0 / 500</span>
			</div>
			{#if submitting}
				<div>Submitting...</div>
			{:else}
				<button type="submit">Send Transmission</button>
			{/if}
		</form>
	{/if}
</div>

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
	.form-container {
		margin-bottom: 20px;
		padding: 12px;
		background-color: #1b2740;
		border-radius: 6px;
	}

	.form-input {
		display: flex;
		flex-direction: column;
		margin-bottom: 12px;
	}

	label {
		margin-bottom: 6px;
	}

	textarea {
		resize: none;
	}

	#charLimit {
		color: white;
		text-align: right;
		padding-top: 6px;
	}

	input, textarea {
		border-radius: 6px;
		border: none;
		padding: 6px;
	}

	button {
		color: #ffff00;
		background-color: rgb(0, 0, 0);
		border: none;
		padding: 10px 18px;
		border-radius: 6px;
		font-weight: 700;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	button:hover {
		color: #ffff85;
		background-color: rgb(20, 20, 20);
		box-shadow: 0px 0px 10px #ffff0046;
		transition: all 0.3s ease;
	}

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