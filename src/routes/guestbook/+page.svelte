<script>
	import { onMount } from "svelte";

	onMount(async () => {
		// AJAX Submit
		const handleSubmit = (event) => {
			event.preventDefault();

			const myForm = event.target;
			const formData = new FormData(myForm);
			
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData).toString(),
			})
				.then(() => console.log("Form successfully submitted"))
				.catch((error) => alert(error));
		};

		document
			.querySelector("form")
			.addEventListener("submit", handleSubmit);

		// Get submissions
		/*
		fetch("https://api.netlify.com/api/v1/forms/641a1fe6cb18cd0008964769/submissions")
		.then(response => response.json())
		.then(data => {
			console.log(data);
			apiData.set(data);
		}).catch(error => {
			console.log(error);
			return [];
		});
		*/
	});
</script>

<h1>+ Guestbook Planet +</h1>
<h2>Sign the Galaxybook</h2>

<form name="guestbook" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
	<div class="form-input hidden">
		<label for="bot-field">Do not fill this out if you're human</label>
		<input name="bot-field" />
	</div>
	<div class="form-input">
		<label for="name">Your Name</label>
		<input type="text" name="name" />
	</div>
	<div class="form-input">
		<label for="message">Your Message</label>
		<textarea maxlength="500" name="message" />
	</div>
	<div data-netlify-recaptcha="true"></div>
	<button type="submit">Post</button>
</form>

<style>
	form {
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
</style>