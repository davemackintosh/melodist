// @flow

import type { Store, Dispatch } from "redux"

import {
  KB_KEY_UP_EVENT,
  KB_UP,
  KB_DOWN,
  KB_LEFT,
  KB_RIGHT,
} from "@constants/keyboard"

export default (store: Store) => {
  return (next: Dispatch) => (inAction) => {
    const state = store.getState()
    switch (inAction.type) {
    case KB_KEY_UP_EVENT:
      switch (inAction.keyCode) {
      case KB_UP:
        return next({
          type: KB_UP,
        })
      case KB_DOWN:
        return next({
          type: KB_DOWN,
        })
      case KB_LEFT:
        return next({
          type: KB_LEFT,
        })
      case KB_RIGHT:
        return next({
          type: KB_RIGHT,
        })
      default:
        return { ...state }
      }
    }
  }
}
