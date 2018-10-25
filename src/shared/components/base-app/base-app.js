// @flow

import React, { Fragment } from "react"
import KeyboardShortcuts from "@components/keyboard-shortcuts/keyboard-shortcuts.redux"

import type { Node } from "react"

import "@less/default-theme.less"

type Props = {
  name: string,
  children: ?Node[],
}

function MelodistApp(props: Props) {
  return (
    <Fragment>
      { props.children }
      <KeyboardShortcuts />
    </Fragment>
  )
}

export default MelodistApp
