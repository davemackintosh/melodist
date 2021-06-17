// import { mixDown } from "./mix-down"
import ReactDOM from "react-dom"

const CELL_WIDTH = 50
const CELL_HEIGHT = 25
/*
const context = new AudioContext()

async function loadSample(url: string) {
	return fetch(url)
		.then(response => response.arrayBuffer())
		.then(buffer => context.decodeAudioData(buffer))
}

function playSample(sample: AudioBuffer) {
	const source = context.createBufferSource()
	source.buffer = sample
	source.connect(context.destination)
	source.start(0)
}

const samples = {
	kick: "./samples/kick.wav",
	snare: "./samples/snare.wav",
	cymbal: "./samples/cymbal.wav",
}

window.addEventListener("DOMContentLoaded", async () => {
	const [snare, kick, cymbal] = await Promise.all([
		loadSample(samples.snare),
		loadSample(samples.kick),
		loadSample(samples.cymbal),
	])

	document.addEventListener("click", event => {
		let sample: AudioBuffer | undefined
		switch (event.target.getAttribute("id")) {
			case "kick":
				sample = kick
				break
			case "snare":
				sample = snare
				break
			case "cymbal":
				sample = cymbal
				break
			case "all":
				const mix = context.createBufferSource()
				mix.buffer = mixDown(
					[snare, kick, cymbal],
					Math.max(snare.length, kick.length, cymbal.length),
					2,
				)

				mix.connect(context.destination)
				mix.start()

				setTimeout(() => {
          mix.disconnect();
          mix.buffer = null;
        }, mix.buffer.duration);
				break
		}
		if (sample) playSample(sample)
	})
})*/

function Melodist(): JSX.Element {
	const numColumns = Math.ceil(window.innerWidth / CELL_WIDTH)
	const numRows = Math.ceil(window.innerHeight / CELL_HEIGHT)

	for (let r = 0; r <= numRows; r++) {
		for (let c = 0; c <= numColumns; c++) {
			console.log(c, r)
		}
	}

	return <div>Hi</div>
}

ReactDOM.render(<Melodist />, document.querySelector("body"))
