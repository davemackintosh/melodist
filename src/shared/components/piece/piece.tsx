import React, { Component } from "react"

import { MeasureType } from "@m-types/measure"
import { NoteType } from "@m-types/note"
import { PieceType } from "@m-types/piece"
import { TrackType } from "@m-types/track"

import Cursor from "@components/cursor/cursor.redux"
import Measure from "@components/measure/measure"
import PieceHeader from "@components/piece-header/piece-header"

import { Props, State } from "./piece"

import testMDST from "../../../../tests/material/test.mdst.json"


class Piece extends Component <Props, State> {
  public static defaultProps = {
    piece: testMDST,
  }

  public static getDerivedStateFromProps(props: Props, state: State) {
    // If nothing changed, do no update.
    if (
      state.selectedMeasure === props.cursor.selectedMeasure
      && state.selectedTrack === props.cursor.selectedTrack
      && state.selectedString === props.cursor.selectedString
      && state.selectedBeat === props.cursor.selectedBeat
      && state.selectedNote === props.cursor.selectedNote
    ) {
      return null
    }

    const out = { ...state }

    if (state.selectedTrack !== props.cursor.selectedTrack) {
      out.selectedTrack = props.cursor.selectedTrack
    }

    if (state.selectedString !== props.cursor.selectedString) {
      out.selectedString = props.cursor.selectedString
    }

    if (state.selectedMeasure !== props.cursor.selectedMeasure) {
      out.selectedMeasure = props.cursor.selectedMeasure
    }

    if (state.selectedBeat !== props.cursor.selectedBeat) {
      out.selectedBeat = props.cursor.selectedBeat
    }

    if (state.selectedNote !== props.cursor.selectedNote) {
      out.selectedNote = props.cursor.selectedNote
    }

    return out
  }

  public state = {
    selectedTrack: 0,
    selectedMeasure: 0,
    selectedBeat: 0,
    selectedNote: 0,
    selectedString: 0,
  }

  public renderMeasures(selectedTrack: number = 0) {
    const measures = this.props.piece.tracks[selectedTrack].measures
    return measures.map((measure: MeasureType, index: number) => {
      const cursor = this.state.selectedMeasure === index
        ? {...this.state}
        : null

      return (
        <Measure
          key={index}
          cursor={cursor}
          measure={measure}
        />
      )
    })
  }

  public render() {
    return (
      <div className="piece">
        <PieceHeader piece={this.props.piece} />
        <div className="piece--measures">
          {this.renderMeasures(this.state.selectedTrack.measures)}
        </div>

        <div className="piece--footer" />
      </div>
    )
  }
}

export default Piece
