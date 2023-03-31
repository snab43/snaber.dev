<script>
	import { onMount } from "svelte";

	let submitting = false;
	let success = false;

	onMount(async () => {
		// AJAX Submit
		document.querySelector("form").addEventListener("submit", event => {
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
		});

		// Character limit
		document.querySelector("textarea").addEventListener("input", event => {
			const target = event.currentTarget;
			const maxLength = target.getAttribute("maxlength");
			const currentLength = target.value.length;

			const charLimit = document.querySelector("#charLimit");
			charLimit.textContent = `${currentLength} / ${maxLength}`;
		});
	});
</script>

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
</style>