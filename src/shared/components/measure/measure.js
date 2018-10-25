// @flow

import React, { Component } from "react"

import type { MeasureType } from "@flow/measure.flow"
import type { NoteType } from "@flow/note.flow"
import type { BeatType } from "@flow/beat.flow"

import MeasureEnd from "@components/measure/measure-end"
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
    const cursor = this.props.cursor && this.props.cursor.props.selectedBeat === index
      ? this.props.cursor
      : null

    return (
      <Beat
        timeSignature={ this.props.measure.timeSignature }  
        beat={ beat } 
        key={ index }
        cursor={ cursor }
      />
    )
  }

  renderBeats(beats: BeatType[]) {
    return beats.map(this.renderBeat, this)
  }

  render() {
    const timeSignature = <TimeSignature timeSignature={ this.props.measure.timeSignature } />

    return (
      <div className="measure">
        { timeSignature }
        { this.renderBeats(this.props.measure.beats) }
        { this.props.measure.timeSignature.numerator && this.renderBeat(undefined, Math.random()) }
        <MeasureEnd measure={ this.props.measure } />
      </div>
    )
  }
}

export default Measure
