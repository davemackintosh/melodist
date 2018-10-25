// @flow

import root from "window-or-global"
import {
  UPDATE_CURSOR_NOTE,
  UPDATE_CURSOR_MEASURE,
} from "@constants/cursor"

import type { Melodist$CursorState } from "@flow/cursor.flow"
import type { Actions$Cursor } from "@flow/actions/cursor.flow"

export const defaultState: Melodist$CursorState = Object.assign({}, {
  selectedNote: 0,
  selectedMeasure: 0,
}, root.__INITIAL_STATE__ ? root.__INITIAL_STATE__.cursor : {})

export default (state: Melodist$CursorState = defaultState, action: Actions$Cursor) => {
  switch (action.type) {
  case UPDATE_CURSOR_MEASURE:
    return {
      ...state,
      measure: action.measure,
    }
  case UPDATE_CURSOR_NOTE:
    return {
      ...state,
      note: action.note,
    }
  default:
    return { ...state }
  }
}
