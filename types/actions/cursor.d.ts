import * as CursorActions from "@constants/cursor"

import { MeasureType } from "@m-types/measure"
import { NoteType } from "@m-types/note"

export interface Actions$UpdateCursorNote {
  type: typeof CursorActions.UPDATE_CURSOR_NOTE,
  note: NoteType,
}

export interface Actions$UpdateCursorMeasure {
  type: typeof CursorActions.UPDATE_CURSOR_MEASURE,
  measure: MeasureType,
}

export type Actions$Cursor = Actions$UpdateCursorNote | Actions$UpdateCursorMeasure
