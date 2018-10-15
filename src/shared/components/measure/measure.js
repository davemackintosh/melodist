// @flow

import React, { Component } from "react"

import type { MeasureType } from "@flow/measure.flow"
import type { NoteType } from "@flow/note.flow"

type Props = {
  width: number,
  height: number,
  measure: MeasureType,
}

type State = {
  selectedNote: NoteType
}

class Bar extends Component <Props, State> {
  render() {
    return (
      <code>{ JSON.stringify(this.props, null, 2) }</code>
    )
  }
}

export default Bar