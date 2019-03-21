import {
  CLOSE_PIECE,
  OPEN_PIECE,
  PIECE_READY,
} from "@constants/app"
import root from "window-or-global"

import testMDST from "../../../tests/material/test.mdst.json"

import { AppAction } from "@m-types/actions/app-actions"
import { Melodist$GlobalState } from "@m-types/app-state/melodist"

export const defaultState: Melodist$GlobalState = {
  openMenu: null,
  piece: testMDST,
  ...(root.__INITIAL_STATE__ ? root.__INITIAL_STATE__.app : {}),
}

export default (state: Melodist$GlobalState = defaultState, action: AppAction = {}) => {
  switch (action.type) {
  case OPEN_PIECE:
  case CLOSE_PIECE:
  default:
    return { ...state }
  }
}
