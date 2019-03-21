import classes from "classnames"
import React from "react"

import { Props } from "./cursor"

function Cursor(props: Props) {
  const classNames = classes({
    cursor: true,
    [props.className]: Boolean(props.className),
  })

  return (
    <div className={classNames} />
  )
}

export default Cursor
