import { connect } from "react-redux"

import { KB_KEY_UP_EVENT } from "@constants/keyboard"
import KeyboardShortcuts from "./keyboard-shortcuts"

import { Melodist$AppState } from "@m-types/melodist"
import { Dispatch } from "react-redux"

import {
  PropsCallbacks,
  PropsFromState,
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
