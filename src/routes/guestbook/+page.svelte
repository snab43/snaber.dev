<script>
	import { onMount } from "svelte";

	export let data;

	let submitting = false;
	let success = false;
	let posts = [];
	let retrievedPosts = false;

	onMount(async () => {
		fetch("https://api.netlify.com/api/v1/forms/641a1fe6cb18cd0008964769/submissions/", {
			headers: {Authorization: 'Bearer ' + data.GUESTBOOK_API_KEY}
		})
		.then((response) => response.json())
		.then((data) => {
			retrievedPosts = true;
			posts = data;
		})
		.catch(error => {
			console.log(error);
		});

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
	});

	function formatDate(date) {
		let d = new Date(date);

		return d.toLocaleString("en-US");
	}
</script>

<h1>+ Guestbook Planet +</h1>
<h2>Sign the Galaxybook</h2>

<div class="form-container">
	{#if success}
		<span>thank you for your submission!</span>
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
				<textarea maxlength="500" name="message" required />
			</div>
			{#if submitting}
				<div>Submitting...</div>
			{:else}
				<button type="submit">Post</button>
			{/if}
		</form>
	{/if}
</div>

<h2>Galaxybook Posts</h2>
{#if retrievedPosts}
	<ul>
		{#each Object.values(posts) as post}
			<li class="post">
				<div class="post-header">
					<div class="post-name">{post.data.name}</div>
					<div class="post-date">{formatDate(post.created_at)}</div>
				</div>
				<div class="post-body">{post.data.message}</div>
			</li>
		{/each}
	</ul>
{:else}
	<p>Getting posts...</p>
{/if}

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

	input, textarea {
		border-radius: 6px;
		border: none;
		padding: 6px;
	}

	button {
		background-color: #ffff00;
		border: none;
		padding: 6px 18px;
		border-radius: 6px;
		font-weight: 700;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	button:hover {
		background-color: #ffff85;
		box-shadow: 0px 0px 10px #ffff0071;
		transition: all 0.3s ease;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	li {
		padding: 12px;
		background-color: #1b2740;
		border-radius: 6px;
	}

	li:not(:last-child) {
		margin-bottom: 12px;
	}

	.post-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 6px;
	}

	.post-name {
		font-weight: 700;
	}
</style>