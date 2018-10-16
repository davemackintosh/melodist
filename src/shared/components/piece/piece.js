// @flow

import React, { Component } from "react"

import type { PieceType } from "@flow/piece.flow"
import type { TrackType } from "@flow/track.flow"
import type { MeasureType } from "@flow/measure.flow"
import type { NoteType } from "@flow/note.flow"

import Measure from "@components/measure/measure"

type Props = {
  piece: PieceType,
}

type State = {
  selectedBeat: NoteType,
  selectedMeasure: MeasureType,
  selectedTrack: TrackType,
}

class Piece extends Component <Props, State> {
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
      <svg width="100%">
        { this.renderMeasures(this.state.selectedTrack.measures) }
      </svg>
    )
  }
}

export default Piece
