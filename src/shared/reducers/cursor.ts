// @flow

import {
  UPDATE_CURSOR_MEASURE,
  UPDATE_CURSOR_NOTE,
} from "@constants/cursor"
import root from "window-or-global"

import {
  KB_DOWN,
  KB_KEY_UP_EVENT,
  KB_LEFT,
  KB_RIGHT,
  KB_UP,
} from "@constants/keyboard"

import type { Melodist$CursorState } from "@flow/cursor.flow"
import type { Actions$Cursor } from "@flow/actions/cursor.flow"

export const defaultState: Melodist$CursorState = {
  selectedNote: 0,
  selectedTrack: 0,
  selectedString: 0,
  selectedMeasure: 0, ...(root.__INITIAL_STATE__ ? root.__INITIAL_STATE__.cursor : {})}

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
  case KB_UP:
    return {
      ...state,
      selectedString: state.selectedString - 1,
    }
  case KB_DOWN:
    return {
      ...state,
      selectedString: state.selectedString + 1,
    }
  case KB_LEFT:
    return {
      ...state,
      selectedNote: state.selectedNote - 1,
    }
  case KB_RIGHT:
    return {
      ...state,
      selectedNote: state.selectedNote + 1,
    }
  default:
    return { ...state }
  }
}
