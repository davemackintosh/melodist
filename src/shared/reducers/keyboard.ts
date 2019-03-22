import { SHOW_KEYBOARD_SHORTCUTS } from "@constants/keyboard"
import root from "window-or-global"

import { Actions$Cursor } from "@m-types/actions/cursor"
import { Melodist$CursorState } from "@m-types/cursor"

export const defaultState: Melodist$CursorState = {
  showShortcuts: false, ...(root.__INITIAL_STATE__ ? root.__INITIAL_STATE__.keyboard : {})}

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
