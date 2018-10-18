// @flow

import React from "react"
import classes from "classnames"

import type { Props } from "./note.flow"

function Note(props: Props) {
  const classNames = classes({
    note: true,
    [`note--string-${props.note.string}`]: true,
  })

  return (
    <text className={ classNames }>
      { props.note.fret }
    </text>
  )
}

export default Note
