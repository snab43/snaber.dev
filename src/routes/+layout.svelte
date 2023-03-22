<script>
	import Navigation from '../lib/Navigation.svelte';
	import Radio from '../lib/Radio.svelte';
	import Game from '../lib/Game.svelte';
	import News from '../lib/News.svelte';
</script>

<!-- Header -->
<header>
	<a href="/">
		<img src="/assets/logo.gif" alt="snaber.dev">
	</a>
	<a id="ufo" href="/secret">
		<img src="/assets/gif/ufo-guy.gif" alt="UFO guy">
	</a>
</header>

<!-- Breadcrumbs -->

<!-- Content Area -->
<div id="content-container">

	<!-- Main Content -->
	<div id="content" class="section">
		<slot></slot>
	</div>

	<!-- Sidebar Content -->
	<div id="sidebar">

		<!-- Navigation -->
		<div class="section">
			<Navigation />
		</div>

		<Radio />
		
	</div>
	
</div>

<!-- News Ticker -->
<div class="section">
	<News />
</div>

<!-- Footer -->
<footer>
	<div class="section">
		<p>Copyright &copy; 2023 snaber.dev. All Rights Reserved.<br/>Any spelling mistakes are actually just innocent typos.</p>
	</div>

	<img src="/assets/gif/astronaut.gif" alt="Astronaut">
</footer>

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
		font-size: 12px;
		text-align: center;
		color: #c0c0c0;
	}

	footer p {
		margin: 6px 0;
	}

	#content-container {
		display: flex;
	}

	#content {
		margin-right: 12px;
		width: 100%;
	}

	.section {
		margin-bottom: 12px;
		padding: 12px;
		background: repeat-x url("../assets/texture-bg.png") #0b101a;
		border: 2px solid #3b4866;
		border-radius: 6px;
		transition: box-shadow 1s ease;
	}

	.section:hover {
		box-shadow: 0 0 30px 5px rgba(208, 211, 219, 0.089), 0 0 3px 2px #234fb654;
		transition: box-shadow 0.2s ease;
	}

	@media only screen and (max-width: 500px) {
		#content-container {
			flex-direction: column-reverse;
		}

		#content {
			max-width: fit-content;
			margin-right: 0 !important;
		}
	}
</style>