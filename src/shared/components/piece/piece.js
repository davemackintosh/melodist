// @flow

import React, { Component } from "react"

import type { PieceType } from "@flow/piece.flow"
import type { TrackType } from "@flow/track.flow"
import type { MeasureType } from "@flow/measure.flow"
import type { NoteType } from "@flow/note.flow"

import PieceHeader from "@components/piece-header/piece-header"
import Measure from "@components/measure/measure"

import testMDST from "../../../../tests/material/test.mdst.json"

type Props = {
  piece: PieceType,
}

type State = {
  selectedBeat: NoteType,
  selectedMeasure: MeasureType,
  selectedTrack: TrackType,
}

class Piece extends Component <Props, State> {
  static defaultProps = {
    piece: testMDST,
  }

  state = {
    selectedTrack: this.props.piece.tracks[0],
    selectedMeasure: this.props.piece.tracks[0].measures[0],
    selectedBeat: this.props.piece.tracks[0].measures[0].beats[0],
  }

  renderMeasures(measures: MeasureType[] = []) {
    return measures.map((measure: MeasureType) => 
      <Measure measure={ measure } />
    )
  }

  render() {
    return (
      <div className="piece">
        <PieceHeader piece={this.props.piece} />
        <div className="piece--measures">
          { this.renderMeasures(this.state.selectedTrack.measures) }
        </div>

        <div className="piece--footer">

        </div>
      </div>
    )
  }
}

export default Piece
