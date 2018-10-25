// @flow

import type { NoteType } from "@flow/note.flow"
import type { MeasureType } from "@flow/measure.flow"

// Note, there is no selected track here
// because if the user changes selected track we should stay in position.
export type CursorType = {
  selectedNote: NoteType,
  selectedMeasure: MeasureType,
}

export CursorRangeType = {
  start: CursorType,
  end: CursorType,
}
