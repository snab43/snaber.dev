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

	shuffle(ticker);
</script>

<header>
	<a id="logo" href="/">
		<img src="/assets/logo.gif" alt="snaber.dev">
	</a>
	<a id="ufo" href="/secret">
		<img src="/assets/gif/ufo-guy.gif" alt="UFO guy">
	</a>
</header>

<div id="content-container">
	<div id="content" class="section">
		<slot></slot>
	</div>
	<div id="panel">
		<nav class="section">
			<h2>This Galaxy</h2>
			<ul>
				<li><a href="/"><img src="/assets/planet-home.png" alt="">home</a></li>
				<li><a href="/portfolio"><img src="/assets/planet-portfolio.png" alt="">portfolio &#9888;</a></li>
				<li><a href="/artwork"><img src="/assets/planet-art.png" alt="">artwork</a></li>
				<li><a href="/sasquatch"><img src="/assets/planet-sasquatch.png" alt="">sasquatch</a></li>
			</ul>
		</nav>
		<nav class="section">
			<h2>Other Galaxies</h2>
			<ul>
				<li><a href="https://www.linkedin.com/in/snaber" target="_blank"><img src="/assets/planet-unknown.png" alt="">linkedin</a></li>
				<li><a href="https://www.github.com/snab43" target="_blank"><img src="/assets/planet-unknown.png" alt="">github</a></li>
			</ul>
		</nav>
	</div>
</div>

<div id="ticker-container" class="section">
	<h2>Galaxy News</h2>
	<Ticker duration={500}>
		{#each ticker as tick}
			<span>{tick}</span>
		{/each}
	</Ticker>
</div>

<footer class="section">
	<p>Copyright &copy; 2023 snaber.dev. All Rights Reserved.<br/>Any spelling mistakes are actually just innocent typos.</p>
</footer>

<div style="text-align: center;">
	<img src="/assets/gif/astronaut.gif" alt="Astronaut">
</div>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12px;
	}

	#ufo {
		cursor: default;
	}

	footer {
		font-size: 0.8rem;
		text-align: center;
		color: #c0c0c0;
	}

	footer > p {
		margin: 6px 0;
	}

	#content-container {
		display: flex;
	}

	#content {
		margin-right: 12px;
		width: 100%;
	}

	#panel {
		width: fit-content;
	}

	#panel ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	#panel a {
		display: flex;
		align-items: center;
	}

	#panel img {
		margin-right: 4px;
	}

	#ticker-container {
		overflow: hidden;
	}

	#ticker-container span {
		text-transform: uppercase;
		font-size: 0.8rem;
		margin-right: 40px;
	}

	.section {
		margin-bottom: 12px;
		padding: 12px;
		background: repeat-x url("../assets/texture-bg.png") #0b101a;
		/* border: 2px solid #1a243c; */
		border: 2px solid #3b4866;
		border-radius: 6px;
		transition: box-shadow 0.3s ease;
	}

	.section:hover {
		box-shadow: 0 0 30px 5px rgba(208, 211, 219, 0.089), 0 0 3px 2px #234fb654;
		transition: box-shadow 0.3s ease;
	}

	h2 {
		white-space: nowrap;
	}

	@media only screen and (max-width: 500px) {
		#content-container {
			flex-direction: column-reverse;
		}

		#content {
			max-width: fit-content;
			margin-right: 0 !important;
		}

		#panel {
			width: 100%;
		}

		#panel h2 {
			margin-bottom: 0;
		}

		#panel ul {
			display: flex;
			flex-flow: wrap;
		}

		#panel li {
			margin-top: 8px;
		}

		#panel ul li:not(:last-child) {
			margin-right: 16px;
		}
	}
</style>