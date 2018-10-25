// @flow

import React from "react"
import classes from "classnames"

import type { Props } from "./note.flow"

function Note(props: Props) {
  const classNames = classes({
    note: true,
    [props.className]: Boolean(props.className),
    [`note--string__${props.note.string}`]: true,
  })

  return (
    <span
      onClick={ props.onNoteClick.bind(null, props.note) }
      className={ classNames }
    >
      { props.note.fret }
    </span>
  )
}

Note.defaultProps = {
  onNoteClick: (note: NoteType) =>
    console.warn("onNoteClick is a noop. Nothing will happen.", note), // eslint-disable-line

  onNoteKeyUp: (note: NoteType, keyCode: number) =>
    console.warn("onNoteKeyUp is a noop. Nothing will happen.", note, keyCode), // eslint-disable-line
}

export default Note
