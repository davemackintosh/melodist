// @flow

import React from "react"
import classes from "classnames"

import type { NoteType } from "@flow/note.flow"
import type { Props } from "./beat.flow"

import Note from "@components/note/note"

function Beat(props: Props) {
  const noteElements = props.beat.notes.map((note: NoteType, index: number) => {
    const cursor = props.cursor && props.cursor.props.selectedNote === index
      ? props.cursor
      : null

    const classNames = classes({
      cursor: Boolean(cursor),
    })

    return (
      <Note
        key={ index }
        note={ note }
        className={ classNames }
      />
    )
  })

  const musicalLength = (props.timeSignature.numerator / props.beat.duration)
  const divisor = 100 / musicalLength
  const classNames = classes({
    [props.className]: Boolean(props.className),
    beat: true,
    [`beat--width__${musicalLength}`]: true,
  })

  return (
    <div
      style={ { width: `${divisor}%` } }
      className={ classNames }
    >
      { noteElements }
    </div>
  )
}

Beat.defaultProps = {
  beat: {
    timeSignature: {
      numerator: 4,
      denominator: 4,
    },
    notes: [{}],
    duration: 1,
  },
}


export default Beat
