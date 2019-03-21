import { Melodist$CursorState } from "@m-states/app-states/cursor"

export interface PropsFromState {
  cursor: Melodist$CursorState,
}

export interface Props {
  piece: PieceType,

  ...PropsFromState,
}

export interface State {
  selectedNote: number,
  selectedBeat: number,
  selectedMeasure: number,
  selectedTrack: number,
}
