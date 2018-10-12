// @flow

import React, { Fragment } from "react"
import { Link } from "react-router-dom"

type Props = {
  name: string
}

function MelodistApp(props: Props) {
  return (
    <Fragment>
      <Link to="/welcome">Welcome</Link>
      { props.children }
    </Fragment>
  )
}

MelodistApp.defaultProps = {
  name: "Dave",
}

export default MelodistApp