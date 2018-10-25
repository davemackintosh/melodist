// @flow

import type { Melodist$CursorState } from "@flow/app-states/cursor.flow"

export type PropsFromState = {
  cursor: Melodist$CursorState,
}

export type Props = {
  piece: PieceType,

  ...$Exact<PropsFromState>,
}

export type State = {
  selectedNote: number,
  selectedBeat: number,
  selectedMeasure: number,
  selectedTrack: number,
}
