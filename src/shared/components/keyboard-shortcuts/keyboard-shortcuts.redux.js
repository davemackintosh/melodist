// @flow

import { connect } from "react-redux"

import KeyboardShortcuts from "./keyboard-shortcuts"
import { KB_KEY_UP_EVENT } from "@constants/keyboard"

import type { Dispatch } from "react-redux"
import type { Melodist$AppState } from "@flow/melodist.flow"

import type {
  PropsFromState,
  PropsCallbacks,
} from "./keyboard-shortcuts.flow"

const mapDispatchToProps = (dispatch: Dispatch): PropsCallbacks => ({
  onKeyUp: (keyCode: number) =>
    dispatch({
      type: KB_KEY_UP_EVENT,
      keyCode,
    }),
})

const mapStateToProps = (state: Melodist$AppState): PropsFromState => ({
  cursor: state.cursor,
  showShortcuts: state.keyboard.showShortcuts,
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardShortcuts)
