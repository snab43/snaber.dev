<script>
	import { onMount } from "svelte";

	let playing = false;
	let currentTrack = 0;
	let playlist = ["/assets/audio/space-01.mp3", "/assets/audio/space-02.mp3", "/assets/audio/space-03.mp3", "/assets/audio/space-04.mp3", "/assets/audio/space-05.mp3"];

	function shuffle(array) {
		let currentIndex = array.length, randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	function getSongFromSrc(src) {
		let start = src.lastIndexOf('/');
		let end = src.lastIndexOf('.');
		return src.substring(start + 1, end);
	}

	playlist = shuffle(playlist);

	onMount(async () => {
		const audio = document.querySelector("#music");
		const info = document.querySelector("#radio-info");
		const play = document.querySelector("#play");
		const pause = document.querySelector("#pause");

		audio.src = playlist[0];

		audio.addEventListener("ended", () => {
			if (currentTrack == (playlist.length - 1)) {
				currentTrack = 0;
			} else {
				currentTrack += 1;
			}

			audio.pause();
			audio.src = playlist[currentTrack];
			info.textContent = `Playing ${getSongFromSrc(audio.src)}`;
			audio.load();
			audio.play();
		});

		play.addEventListener("click", () => {
			audio.play();
			info.textContent = `Playing ${getSongFromSrc(audio.src)}`;
			if (!playing) {
				document.querySelector("#radio-on").load();
				document.querySelector("#radio-on").play();
			}
			playing = true;
		});

		pause.addEventListener("click", () => {
			audio.pause();
			info.textContent = "Galaxy Radio Paused";
			if (playing) {
				document.querySelector("#radio-off").load();
				document.querySelector("#radio-off").play();
			}
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