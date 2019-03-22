import {
  CursorRangeType,
  CursorType,
} from "@m-types/cursor"

export interface Melodist$CursorState {
  selectedNote: number,
  selectedBeat: number,
  selectedTrack: number,
  selectedString: number,
  selectedMeasure: number,
}
