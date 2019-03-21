import { connect } from "react-redux"
import Cursor from "./cursor"

import { Melodist$AppState } from "@flow/app-states/melodist"
import { PropsFromState } from "./cursor"

const mapStateToProps = (state: Melodist$AppState): PropsFromState => ({
  selectedNote: state.cursor.selectedNote,
  selectedBeat: state.cursor.selectedBeat,
  selectedMeasure: state.cursor.selectedMeasure,
  selectedTrack: state.cursor.selectedTrack,
})

export default connect(mapStateToProps)(Cursor)
