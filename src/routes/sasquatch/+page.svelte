<script>
	import Carousel from '$lib/Carousel.svelte';

	const images = [
		{
			src: "/assets/sasquatch/2021-01-15.jpg",
			alt: "Sasquatch on the floor.",
			desc: "sasquatch bugging out."
		},
		{
			src: "/assets/sasquatch/2023-02-02.jpg",
			alt: "Sasquatch in her carrier on a plane seat.",
			desc: "sasquatch on her flight from california to new york!"
		},
		{
			src: "/assets/sasquatch/2023-02-09.jpg",
			alt: "Selfie of my wife and my cat.",
			desc: "my girls: cat and wife (i'm out numbered)."
		},
		{
			src: "/assets/sasquatch/2023-02-17.jpg",
			alt: "Sasquatch in my lap at my desk looking up at me.",
			desc: "she helps me code every day. this photo was taken after she realized i was de-referencing a NULL pointer."
		},
		{
			src: "/assets/sasquatch/2023-02-18.jpg",
			alt: "Wide angle close up photo of Sasquatch's face",
			desc: "what i wake up to sometimes."
		},
		{
			src: "/assets/sasquatch/2023-02-23.jpg",
			alt: "Sasquatch in my lap with one paw on my desk.",
			desc: "seriously, though. she spends the majority of her day here."
		},
		{
			src: "/assets/sasquatch/2023-03-02.jpg",
			alt: "Sasquatch in her carrier at the veternarian office.",
			desc: "at the vet. confirmed: she's still crazy."
		}
	]
</script>

<h1>+ PLANET SASQUATCH +</h1>
<h2>ALL ABOUT SASQUATCH</h2>
<p>sasquatch was adopted at ripe (estimated) age of 12 years young and is currently 15. the shelter was ecstatic she was adopted on the first day she was made available, but we wanted an old cat and oh boy did we get one.</p>
<p>she came with a laundry list of baggage such as stage 1 kidney failure, dimentia, seperation anxiety, arthritis, partial deafness, and more that science has yet to find. she's since been nursed back to great physical health which means we get to enjoy her still degrated mental health for more years to come. she loves bite ankles during the day, and at night she practices her trademark, 46.8k views on TikTok, scream.</p>
<h2>NICKNAMES</h2>
<p>Sasquatch has been called a number of things, such as:</p>
<ul>
	<li>Sass</li>
	<li>Sassy</li>
	<li>Sassy Girl</li>
	<li>Squash</li>
	<li>Scream Squash</li>
	<li>Sassafrass</li>
	<li>Sassy Poo</li>
	<li>A Menace to Society</li>
	<li>Baby Girl</li>
</ul>
<h2>Photos</h2>

<Carousel {images} height={400} />

<style>
	ul {
		margin-top: 0;
	}

	p {
		margin: 6px 0 12px 0;
	}
</style>