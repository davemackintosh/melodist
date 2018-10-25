// @flow

import { connect } from "react-redux"

import Piece from "./piece"

import type { PropsFromState } from "./piece.flow"
import type { Melodist$CursorState } from "@flow/app-states/cursor.flow"

const mapStateToProps = (state: Melodist$AppState): PropsFromState => ({
  cursor: state.cursor,
})

export default connect(mapStateToProps)(Piece)
