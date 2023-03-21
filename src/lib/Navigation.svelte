<nav>
	<h2>This Galaxy</h2>
	<ul>
		<li><a href="/"><img src="/assets/planet-home.png" alt="">home</a></li>
		<li><a href="/blog"><img src="/assets/planet-blog.png" alt="">blog</a></li>
		<li><a href="/artwork"><img src="/assets/planet-art.png" alt="">artwork</a></li>
		<li><a href="/sasquatch"><img src="/assets/planet-sasquatch.png" alt="">sasquatch</a></li>
		<li><a href="/guestbook"><img src="/assets/planet-home.png" alt="">guestbook</a></li>
	</ul>
	<br>
	<h2>Other Galaxies</h2>
	<ul>
		<li><a href="https://www.linkedin.com/in/snaber" target="_blank"><img src="/assets/planet-unknown.png" alt="">linkedin</a></li>
		<li><a href="https://www.github.com/snab43" target="_blank"><img src="/assets/planet-unknown.png" alt="">github</a></li>
	</ul>
</nav>

<style>
	nav {
		width: fit-content;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	a {
		display: flex;
		align-items: center;
	}

	img {
		margin-right: 4px;
	}

	h2 {
		white-space: nowrap;
	}

	@media only screen and (max-width: 500px) {
		nav {
			width: 100%;
		}

		h2 {
			margin-bottom: 0;
		}

		ul {
			display: flex;
			flex-flow: wrap;
		}

		li {
			margin-top: 8px;
		}

		ul li:not(:last-child) {
			margin-right: 16px;
		}
	}
</style>