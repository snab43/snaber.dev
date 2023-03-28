<script>
	import Ticker from 'svelte-ticker';

	let ticker = [
		"BREAKING: A lion escaped the zoo. Which zoo? We're not sure. Stay tuned!",
		"The president just ate 2 whole pizzas with no breaks in between.",
		"A new gym just opened by my house but I still don't want to go.",
		"My cat has finally settled down for a nap.",
		"A cow found it's way onto the international space highway causing a massive slowdown.",
		"Galactic Creamery just revealed it's new ice cream flavor: Cookies & Cream of Mushroom Soup.",
		"Pizza Planet is forced to shut down 7 locations due to failed health inspections (I'd still eat there tbh).",
		"An astroid is heading towards Planet Apathy. Residents are unsure how to feel.",
		"A solar ray just caused another Super Mario 64 bit flip during a speedrun.",
		"The Artwork Planet just lost it's 3rd moon. Please keep an eye out.",
		"A UFO just landed on Planet Sasquatch. The sole resident has already made herself comfortable in the alien's lap.",
		"Mass hysteria as the North Star is discovered to actually point West.",
		"Scientists confirm Planet Sasquatch's moon to be made of tuna.",
		"Resident of the Home Planet claims to have discovered a Secret Planet."
	];

	function shuffle(array) {
		let currentIndex = array.length, randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	ticker = shuffle(ticker);
</script>

<!-- News Ticker -->
<div id="ticker-container">
	<h2>Galaxy News</h2>
	<Ticker duration={500}>
		{#each ticker as tick}
			<span>{tick}</span>
		{/each}
	</Ticker>
</div>

<style>
	#ticker-container {
		overflow: hidden;
	}

	#ticker-container span {
		text-transform: uppercase;
		font-size: 12px;
		margin-right: 40px;
	}
</style>