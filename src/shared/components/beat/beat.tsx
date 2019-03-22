import classes from "classnames"
import React from "react"

import { NoteType } from "@m-types/note"
import { Props } from "./beat"

import { isCursorOnNote } from "@components/cursor/utils"
import Note from "@components/note/note"

function Beat(props: Props) {
  const noteElements = props.beat.notes.map((note: NoteType, index: number) => {
    const cursor = props.cursor && isCursorOnNote(props.cursor, note, index)
      ? props.cursor
      : null

    const classNames = classes({
      cursor: Boolean(cursor),
    })

    return (
      <Note
        key={index}
        note={note}
        className={classNames}
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
      style={{ width: `${divisor}%` }}
      className={classNames}
    >
      {noteElements}
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
    cursor: {},
  },
}


export default Beat
