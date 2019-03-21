import { connect } from "react-redux"

import Piece from "./piece"

import { Melodist$CursorState } from "@m-types/app-states/cursor"
import { PropsFromState } from "./piece"

const mapStateToProps = (state: Melodist$AppState): PropsFromState => ({
  cursor: state.cursor,
})

export default connect(mapStateToProps)(Piece)
