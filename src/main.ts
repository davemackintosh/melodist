function mixDown(
	bufferList: AudioBuffer[],
	totalLength: number,
	numberOfChannels = 2,
) {
	if (!bufferList?.length)
		throw new TypeError("No bufferlist? What am I to do with this?!")

	//create a buffer using the totalLength and sampleRate of the first buffer node
	const finalMix = context.createBuffer(
		numberOfChannels,
		totalLength,
		bufferList[0].sampleRate,
	)

	//first loop for buffer list
	for (let i = 0; i < bufferList.length; i++) {
		// second loop for each channel ie. left and right
		for (let channel = 0; channel < numberOfChannels; channel++) {
			//here we get a reference to the final mix buffer data
			const buffer = finalMix.getChannelData(channel)

			//last is loop for updating/summing the track buffer with the final mix buffer
			for (let j = 0; j < bufferList[i].length; j++) {
				buffer[j] += bufferList[i].getChannelData(channel)[j]
			}
		}
	}

	return finalMix
}

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

				/*setTimeout(() => {
          mix.disconnect();
          mix.buffer = null;
        }, mix.buffer.duration);*/
				break
		}
		if (sample) playSample(sample)
	})
})
