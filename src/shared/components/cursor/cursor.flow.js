// @flow

export type PropsFromState = {
  selectedNote: number,
  selectedBeat: number,
  selectedMeasure: number,
  selectedTrack: number,
}

export type Props = {
  ...$Exact<PropsFromState>,

  className?: string,
}
