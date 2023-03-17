<script>
	import { onMount } from 'svelte';

	export let images;

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
		<div class="image-container">
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
		border: 2px solid #7b88a8;
	}

	.image-container {
		height: 375px;
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
		padding: 16px;
		color: white;
		background-color: #0b101a;
		font-weight: bold;
		font-size: 18px;
		border: 2px solid #7b88a8;
		user-select: none;
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
		background-color: rgba(0,0,0,0.8);
	}
</style>