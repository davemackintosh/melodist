// @flow

import React, { Component } from "react"

import type { MeasureType } from "@flow/measure.flow"
import type { NoteType } from "@flow/note.flow"
import type { BeatType } from "@flow/beat.flow"

import Beat from "@components/beat/beat"
import TimeSignature from "@components/time-signature/time-signature"

type Props = {
  width: number,
  height: number,
  measure: MeasureType,
}

type State = {
  selectedNote: NoteType
}

class Measure extends Component <Props, State> {

  renderBeat(beat: BeatType, index: number) {
    return (
      <Beat beat={ beat } key={ index } />
    )
  }

  render() {
    return (
      <div className="measure">
        <TimeSignature timeSignature={ this.props.measure.timeSignature } />
        { this.props.measure.beats.map(this.renderBeat, this) }
      </div>
    )
  }
}

export default Measure
