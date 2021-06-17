/**
 * Take a list of buffers and mix them down into a single AudioBuffer to listen back or render to a file.
 */
export function mixDown(
	context: AudioContext,
	bufferList: AudioBuffer[],
	totalLength: number,
	numberOfChannels = 2,
): AudioBuffer {
	if (bufferList?.length <= 0)
		throw new TypeError("No bufferlist? What am I to do with this?!")

	//create a buffer using the totalLength and sampleRate of the first buffer node
	const finalMix = context.createBuffer(
		numberOfChannels,
		totalLength,
		bufferList[0]?.sampleRate ?? 0,
	)

	//first loop for buffer list
	for (let i = 0; i < bufferList.length; i++) {
		// second loop for each channel ie. left and right
		for (let channel = 0; channel < numberOfChannels; channel++) {
			//here we get a reference to the final mix buffer data
			const buffer = finalMix.getChannelData(channel)
			const trackBuffer = bufferList[i]

			if (!trackBuffer) continue

			//last is loop for updating/summing the track buffer with the final mix buffer
			for (let j = 0; j < trackBuffer.length; j++) {
				const trackData = trackBuffer.getChannelData(channel)
				if (!trackData) continue

				if (typeof trackData[j] === "number")
					buffer[j] += trackData[j] as number
			}
		}
	}

	return finalMix
}
