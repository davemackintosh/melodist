// @flow

import root from "window-or-global"
import React, { Component } from "react"

import type { Props } from "./keyboard-shortcuts.flow"

class KeyboardShortcuts extends Component<Props> {
  static defaultProps = {
    keyboard: true,
    gamepad: false,
    midi: false,
    showShortcuts: false,

    onKeyUp: (keyAction: string) =>
      console.warn("onKeyUp was triggered but is a NOOP. Nothing will happen.", keyAction), // eslint-disable-line
    onPadUp: (padAction: string) =>
      console.warn("onPadUp was triggered but is a NOOP. Nothing will happen.", padAction), // eslint-disable-line
    onMIDINote: (midiNote: number) =>
      console.warn("onMIDINote was triggered but is a NOOP. Nothing will happen.", midiNote), // eslint-disable-line
  }

  componentDidMount() {
    this.props.keyboard && this.addKeyUpListener()
    this.props.gamepad && this.addGamepadListener()
    this.props.midi && this.addMIDIListener()
  }

  addKeyUpListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<DocumentType>) =>
      this.props.onKeyUp(event.keyCode)
    )
  }

  addGamepadListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<DocumentType>) =>
      this.props.onKeyUp(event.keyCode)
    )
  }

  addMIDIListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<DocumentType>) =>
      this.props.onKeyUp(event.keyCode)
    )
  }

  renderShortcut(shortcut) {

  }

  render() {
    if (!this.props.showShortcuts)
      return null

    return (
      <div className="">
        
      </div>
    )
  }
}

export default KeyboardShortcuts
