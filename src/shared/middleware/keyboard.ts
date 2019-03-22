import { Melodist$KeyboardAction } from "@m-types/actions/keyboard"
import { Dispatch } from "react-redux"
import {
  Dispatch,
  Store,
} from "redux"
import Keys from "ts-keycode-enum"

import {
  KB_DOWN,
  KB_KEY_UP_EVENT,
  KB_LEFT,
  KB_RIGHT,
  KB_UP,
} from "@constants/keyboard"

export default (store: Store) => {
  return (next: Dispatch) => (inAction: Melodist$KeyboardAction) => {
    const state = store.getState()
    switch (inAction.type) {
    case KB_KEY_UP_EVENT:
      switch (inAction.keyCode) {
      case Keys.UpArrow:
        return next({
          type: KB_UP,
        })
      case Keys.DownArrow:
        return next({
          type: KB_DOWN,
        })
      case Keys.LeftArrow:
        return next({
          type: KB_LEFT,
        })
      case Keys.RightArrow:
        return next({
          type: KB_RIGHT,
        })
      default:
        return { ...state }
      }
    }
  }
}
