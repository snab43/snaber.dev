<script>
	import { onMount } from "svelte";
	import { shuffleArray, getFileFromSrc } from "$lib/utils.js";

	let playing = false;
	let currentTrack = 0;
	let playlist = [
		"/assets/audio/space-01.mp3",
		"/assets/audio/space-02.mp3",
		"/assets/audio/space-03.mp3",
		"/assets/audio/space-04.mp3",
		"/assets/audio/space-05.mp3"
	];

	playlist = shuffleArray(playlist);

	onMount(async () => {
		const music = document.querySelector("#music");
		const info = document.querySelector("#radio-info");
		const play = document.querySelector("#play");
		const pause = document.querySelector("#pause");

		const radioOnSFX = document.querySelector("#radio-on")
		const radioOffSFX = document.querySelector("#radio-off")

		music.src = playlist[0];

		music.addEventListener("ended", () => {
			if (currentTrack == (playlist.length - 1)) {
				currentTrack = 0;
			} else {
				currentTrack += 1;
			}

			music.pause();
			music.src = playlist[currentTrack];
			info.textContent = `Playing ${getFileFromSrc(music.src)}`;
			music.load();
			music.play();
		});

		play.addEventListener("click", () => {
			if (!playing) {
				radioOnSFX.load();
				radioOnSFX.play();
			}
			music.play();
			info.textContent = `Playing ${getFileFromSrc(music.src)}`;
			playing = true;
		});

		pause.addEventListener("click", () => {
			if (playing) {
				radioOffSFX.load();
				radioOffSFX.play();
			}
			music.pause();
			info.textContent = "Galaxy Radio Paused";
			playing = false;
		});
	});
</script>

<div class="radio-container">
	<div class="radio">
		<div id="radio-info">Galaxy Radio Ready</div>
		<div class="radio-controls">
			<img src="/assets/radio-speaker.png" alt="">
			<img id="play" src="/assets/radio-play.png" alt="">
			<img id="pause"  src="/assets/radio-pause.png" alt="">
			<img src="/assets/radio-speaker.png" alt="">
		</div>
		<audio id="music" src="" type="audio/mpeg" preload="auto"></audio>
		<audio id="radio-on" src="/assets/audio/radio-on.mp3" type="audio/mpeg" preload="auto"></audio>
		<audio id="radio-off" src="/assets/audio/radio-off.mp3" type="audio/mpeg" preload="auto"></audio>
	</div>
</div>

<style>
	.radio-container {
		min-width: 152px;
		margin-bottom: 12px;
		border: 12px solid;
		border-image: url("/assets/radio-grid.png") 12;
		border-image-repeat: repeat;
		position: relative;
	}

	.radio-container::before {
		content: url("/assets/radio-antenna.gif");
		position: absolute;
		right: -24px;
		top: -52px;
	}

	.radio {
		background-color: #4b3559;
		padding-top: 2px;
	}

	#radio-info {
		width: initial;
		font-family: 'VT323', monospace;
		text-transform: uppercase;
		margin: 6px 0;
		padding: 2px 6px;
		font-size: 15px;
		letter-spacing: 0.5px;
		color: rgb(2, 39, 2);
		background-color: rgb(37, 214, 37);
		border: 2px solid #2a0a40;
		border-radius: 6px;
		overflow: hidden;
	}

	.radio-controls {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}

	#play, #pause {
		cursor: pointer;
	}
</style>