// @flow

import React from "react"
import classes from "classnames"

import type { Props } from "./note.flow"

function Note(props: Props) {
  const classNames = classes({
    note: true,
    [`note--string__${props.note.string}`]: true,
  })

  return (
    <span className={ classNames }>
      { props.note.fret }
    </span>
  )
}

export default Note
