<header>
	<a id="logo" href="/">
		<img src="/assets/logo.gif" alt="snaber.dev">
	</a>
	<div id="ufo">
		<a href="/secret">
			<img id="ufo" src="/assets/gif/ufo-guy.gif" alt="UFO guy">
		</a>
	</div>
</header>

<!--
<div id="ticker-container">
	<div id="ticker">
		<div class="ticker-item">BREAKING: A lion escaped the zoo.</div>
		<div class="ticker-item">The president just ate 2 whole pizzas.</div>
		<div class="ticker-item">A new gym just opened up next to my house, but I still don't want to go.</div>
	</div>
</div>
-->

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

		#panel ul {
			display: flex;
		}

		#panel ul li:not(:last-child) {
			margin-right: 16px;
		}
	}
</style>