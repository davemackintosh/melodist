import { MeasureType } from "@m-types/measure"
import { NoteType } from "@m-types/note"

// Note, there is no selected track here
// because if the user changes selected track we should stay in position.
export type CursorType = CursorSingleType | CursorRangeType

export interface CursorSingleType {
  selectedNote: NoteType,
  selectedMeasure: MeasureType,
}

export interface CursorRangeType {
  start: CursorType,
  end: CursorType,
}

