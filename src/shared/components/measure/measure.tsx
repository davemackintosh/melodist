import React, { Component } from "react"

import { BeatType } from "@m-types/beat"
import { MeasureType } from "@m-types/measure"
import { NoteType } from "@m-types/note"

import Beat from "@components/beat/beat"
import MeasureEnd from "@components/measure/measure-end"
import TimeSignature from "@components/time-signature/time-signature"

interface Props {
  width: number,
  height: number,
  measure: MeasureType,
}

interface State {
  selectedNote: NoteType
}

class Measure extends Component <Props, State> {

  public renderBeat(beat: BeatType, index: number) {
    const cursor = this.props.cursor && this.props.cursor.props.selectedBeat === index
      ? this.props.cursor
      : null

    return (
      <Beat
        timeSignature={this.props.measure.timeSignature}
        beat={beat}
        key={index}
        cursor={cursor}
      />
    )
  }

  public renderBeats(beats: BeatType[]) {
    return beats.map(this.renderBeat, this)
  }

  public render() {
    const timeSignature = <TimeSignature timeSignature={this.props.measure.timeSignature} />

    return (
      <div className="measure">
        {timeSignature}
        {this.renderBeats(this.props.measure.beats)}
        {this.props.measure.timeSignature.numerator && this.renderBeat(undefined, Math.random())}
        <MeasureEnd measure={this.props.measure} />
      </div>
    )
  }
}

export default Measure
