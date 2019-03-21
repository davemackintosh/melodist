// @flow

import root from "window-or-global"
import { SHOW_KEYBOARD_SHORTCUTS } from "@constants/keyboard"

import type { Melodist$CursorState } from "@flow/cursor.flow"
import type { Actions$Cursor } from "@flow/actions/cursor.flow"

export const defaultState: Melodist$CursorState = Object.assign({}, {
  showShortcuts: false,
}, root.__INITIAL_STATE__ ? root.__INITIAL_STATE__.keyboard : {})

export default (state: Melodist$CursorState = defaultState, action: Actions$Cursor) => {
  switch (action.type) {
  case SHOW_KEYBOARD_SHORTCUTS:
    return {
      ...state,
      showShortcuts: action.showShortcuts,
    }
  default:
    return { ...state }
  }
}
