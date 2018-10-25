// @flow

import React, { Component } from "react"

import type { PieceType } from "@flow/piece.flow"
import type { TrackType } from "@flow/track.flow"
import type { MeasureType } from "@flow/measure.flow"
import type { NoteType } from "@flow/note.flow"

import Cursor from "@components/cursor/cursor.redux"
import PieceHeader from "@components/piece-header/piece-header"
import Measure from "@components/measure/measure"

import type { Props, State } from "./piece.flow"

import testMDST from "../../../../tests/material/test.mdst.json"


class Piece extends Component <Props, State> {
  static defaultProps = {
    piece: testMDST,
  }

  state = {
    selectedTrack: 0,
    selectedMeasure: 0,
    selectedBeat: 0,
    selectedNote: 0,
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const out = { ...state }

    console.log(props, state)
    
    if (state.selectedTrack !== props.cursor.selectedTrack)
      out.selectedTrack = props.cursor.selectedTrack

    if (state.selectedMeasure !== props.cursor.selectedMeasure)
      out.selectedMeasure = props.cursor.selectedMeasure

    if (state.selectedBeat !== props.cursor.selectedBeat)
      out.selectedBeat = props.cursor.selectedBeat

    if (state.selectedNote !== props.cursor.selectedNote)
      out.selectedNote = props.cursor.selectedNote

    return out
  }

  renderMeasures(selectedTrack: number = 0) {
    const measures = this.props.piece.tracks[selectedTrack].measures
    return measures.map((measure: MeasureType, index: number) => {
      const cursor = this.state.selectedMeasure === index 
        ? <Cursor { ...this.state } /> 
        : null

      return (
        <Measure
          key={ index }
          cursor={ cursor }
          measure={ measure }
        />
      )
    })
  }

  render() {
    return (
      <div className="piece">
        <PieceHeader piece={ this.props.piece } />
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
