<script>
	import Ticker from 'svelte-ticker';
	import { onMount } from "svelte";

	onMount(async () => {
		const audio = document.querySelector("audio");
		const infoText = document.querySelector("#radio-info-text");
		const play = document.querySelector("#play");
		const pause = document.querySelector("#pause");

		play.addEventListener("click", () => {
			audio.play();
			infoText.textContent = "Playing Galaxy Radio";
		});

		pause.addEventListener("click", () => {
			audio.pause();
			infoText.textContent = "Paused";
		});
	});
</script>

<div class="radio-container">
	<div class="radio">
		<div class="radio-info">
			<Ticker duration={25}>
				<span id="radio-info-text">Galaxy Radio Ready</span>
			</Ticker>
		</div>
		<div class="radio-controls">
			<img src="/assets/radio-speaker.png" alt="">
			<img id="play" src="/assets/radio-play.png" alt="">
			<img id="pause"  src="/assets/radio-pause.png" alt="">
			<img src="/assets/radio-speaker.png" alt="">
		</div>
		<audio loop>
			<source src="/assets/audio/space-radio.ogg" type="audio/ogg">
			<source src="/assets/audio/space-radio.mp3" type="audio/mpeg">
		</audio>
	</div>
</div>

<style>
	.radio-container {
		width: 158px;
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

	.radio-info {
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

	.radio-info span {
		margin-right: 24px;
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