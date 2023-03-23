<script>
	import Carousel from '$lib/Carousel.svelte';

	const images = [
		{
			src: "/assets/artwork/2023-01-01.jpg",
			alt: "Farm house in a rural meadow.",
			desc: "Untitled (January 1, 2023)"
		},
		{
			src: "/assets/artwork/2021-06-05.jpg",
			alt: "Creature in foggy woods.",
			desc: "Woodland Creature (June 5, 2021)"
		},
		{
			src: "/assets/artwork/2018-06-01.jpg",
			alt: "Group of people around a campfire.",
			desc: "Campfire (June 1, 2018)"
		},
		{
			src: "/assets/artwork/2017-02-01.jpg",
			alt: "Abstract painting of a big band.",
			desc: "Big Band (February 1, 2017)"
		},
		{
			src: "/assets/artwork/2017-01-27.jpg",
			alt: "Abstract painting of a city.",
			desc: "Drunk (January 27, 2017)"
		}
	]
</script>

<h1>+ ARTWORK PLANET +</h1>
<h2>My Art</h2>
<p>i've been drawing for as long as i can remember. recently i've been interested in painting. below you'll find a select few pieces from over the years.</p>

<h2>Gallery</h2>
<p><b>note:</b> the gallery may take a second to load on slower internet connections.</p>
<Carousel {images} height={580} />