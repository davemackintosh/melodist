// @flow

import React from "react"

type Props = {
  name: string
}

function MelodistApp(props: Props) {
  return <h1>Hai { props.name }</h1>
}

MelodistApp.defaultProps = {
  name: "Dave",
}

export default MelodistApp