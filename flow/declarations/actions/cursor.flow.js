// @flow

import * as CursorActions from "@constants/cursor"

import type { NoteType } from "@flow/note.flow"
import type { MeasureType } from "@flow/measure.flow"

export type Actions$UpdateCursorNote = {
  +type: typeof CursorActions.UPDATE_CURSOR_NOTE,
  note: NoteType,
}

export type Actions$UpdateCursorMeasure = {
  +type: typeof CursorActions.UPDATE_CURSOR_MEASURE,
  measure: MeasureType,
}

export type Actions$Cursor = Actions$UpdateCursorNote | Actions$UpdateCursorMeasure
