import root from "window-or-global"

import { Actions$Cursor } from "@m-types/actions/cursor"
import { Melodist$CursorState } from "@m-types/app-state/cursor"

export const defaultState: Melodist$CursorState = {
  ...(root.__INITIAL_STATE__ ? root.__INITIAL_STATE__.keyboard : {}),
}

export default (state: Melodist$CursorState = defaultState, action: Actions$Cursor) => {
  switch (action.type) {
  default:
    return { ...state }
  }
}
