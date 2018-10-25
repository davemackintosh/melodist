// @flow

import React from "react"
import classes from "classnames"

import type { Props } from "./cursor.flow.js"

function Cursor(props: Props) {
  const classNames = classes({
    "cursor": true,
    [props.className]: Boolean(props.className),
  })

  return (
    <div className={ classNames } />
  )
}

export default Cursor
