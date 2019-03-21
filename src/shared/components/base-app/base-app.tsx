import KeyboardShortcuts from "@components/keyboard-shortcuts/keyboard-shortcuts.redux"
import React, { Fragment } from "react"

import { Node } from "react"

import "@less/default-theme.less"

interface Props {
  name: string,
  children: ?Node[],
}

function MelodistApp(props: Props) {
  return (
    <Fragment>
      {props.children}
      <KeyboardShortcuts />
    </Fragment>
  )
}

export default MelodistApp
