// @flow

import { connect } from "react-redux"
import Cursor from "./cursor"

import type { Melodist$AppState } from "@flow/app-states/melodist.flow"
import type { PropsFromState } from "./cursor.flow.js"

const mapStateToProps = (state: Melodist$AppState): PropsFromState => ({
  selectedNote: state.cursor.selectedNote,
  selectedBeat: state.cursor.selectedBeat,
  selectedMeasure: state.cursor.selectedMeasure,
  selectedTrack: state.cursor.selectedTrack,
})

export default connect(mapStateToProps)(Cursor)
