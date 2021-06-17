import { css } from "@emotion/react"

const CELL_WIDTH = 50
const CELL_HEIGHT = 25

function TrackCell(): JSX.Element {
	const styles = css({
		flexBasis: "100%",
		width: CELL_WIDTH,
		height: CELL_HEIGHT,
		borderTop: "1px solid #CFCFCF",
		borderLeft: "1px solid #CFCFCF",
	})

	return <div css={styles} />
}

function TrackRow(): JSX.Element {
	const numColumns = Array.from({
		length: Math.ceil(window.innerWidth / CELL_WIDTH),
	})
	const styles = css({
		display: "flex",
		flexDirection: "row",
	})

	return (
		<div css={styles}>
			{numColumns.map((_, i) => (
				<TrackCell key={i} />
			))}
		</div>
	)
}
export function TrackEditor(): JSX.Element {
	const styles = css({
		display: "flex",
		flexDirection: "column",
	})
	const numRows = Array.from({
		length: Math.ceil(window.innerHeight / CELL_HEIGHT),
	})

	return (
		<div css={styles}>
			{numRows.map((_, i) => (
				<TrackRow key={`T${i}`} />
			))}
		</div>
	)
}
