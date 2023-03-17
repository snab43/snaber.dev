<script>
	import { onMount } from 'svelte';

	export let images;
	export let height;

	onMount(() => {
		let slideIndex = 1;
		showSlides(slideIndex);

		document.getElementById("prev").addEventListener("click", () => {
			showSlides(slideIndex -= 1);
		});

		document.getElementById("next").addEventListener("click", () => {
			showSlides(slideIndex += 1);
		});

		function showSlides(n) {
			let i;
			let slides = document.getElementsByClassName("image-container");
			
			if (n > slides.length) slideIndex = 1;
			if (n < 1) slideIndex = slides.length;

			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}

			slides[slideIndex-1].style.display = "block";
		}
	});
</script>

<div class="carousel-container">
	{#each images as image}
		<div
			class="image-container"
			style="--image-height: {height}px; --mobile-image-height: {Math.floor(height * 0.7)}px;"
		>
			<img src="{image.src}" alt="{image.alt}" />
			<div class="desc">{image.desc}</div>
		</div>
	{/each}

	<button id="prev">&#10094;</button>
	<button id="next">&#10095;</button>
</div>

<style>
	.carousel-container {
		width: 100%;
		position: relative;
		margin: auto;
		background-color: black;
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 0 0 10px black;
	}

	.image-container {
		height: var(--image-height);
		display: none;
		text-align: center;
	}

	img {
		max-height: 100%;
		max-width: 100%;
	}

	.desc {
		background-color: #000000af;
		padding: 8px 0;
		position: absolute;
		bottom: 0px;
		width: 100%;
		text-align: center;
	}

	#prev, #next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -22px;
		padding: 12px 10px;
		color: #ffff00;
		background-color: #0b101a;
		font-weight: bold;
		font-size: 18px;
		border: 2px solid #1e335c;
		user-select: none;
		transition: background-color 0.3s ease;
	}

	#prev {
		border-left: 0;
		border-radius: 0 6px 6px 0;
	}

	#next {
		right: 0;
		border-right: 0;
		border-radius: 6px 0 0 6px;
	}

	#prev:hover, #next:hover {
		background-color: #182644;
		transition: background-color 0.3s ease;
	}

	@media only screen and (max-width: 500px) {
		.image-container {
			height: var(--mobile-image-height);
		}
	}
</style>