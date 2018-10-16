// @flow

import root from "window-or-global"
import {
  OPEN_PIECE,
  CLOSE_PIECE,
  PIECE_READY,
} from "@constants/app"

import testMDST from "../../../tests/material/test.mdst.json"

import type { AppAction } from "@flow/actions/app-actions.flow"
import type { Meldist$GlobalState } from "@flow/melodist.flow"

export const defaultState: Meldist$GlobalState = Object.assign({}, {
  openMenu: null,
  piece: testMDST,
}, root.__INITIAL_STATE__ ? root.__INITIAL_STATE__.app : {})

export default (state: Meldist$GlobalState = defaultState, action: AppAction = {}) => {
  switch (action.type) {
  
  case OPEN_PIECE:
  case CLOSE_PIECE:
  default:
    return { ...state }
  }
}
