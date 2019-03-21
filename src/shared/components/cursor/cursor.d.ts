export interface PropsFromState {
  selectedNote: number,
  selectedBeat: number,
  selectedMeasure: number,
  selectedTrack: number,
}

export interface Props {
  ...PropsFromState,

  className?: string,
}
