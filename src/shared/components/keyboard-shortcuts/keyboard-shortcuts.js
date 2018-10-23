// @flow

import root from "window-or-global"
import React, { Component } from "react"

type Props = {
  showShortcuts?: boolean,
  keyboard?: boolean, // Default: true
  gamepad?: boolean, // Default: false
  midi?: boolean, // Default: false
  onKeyUp?: (keyAction: string) => void,
  onPadUp?: (padAction: string) => void,
  onMIDINote?: (midiNote: number) => void,
}

class KeyboardShortcuts extends Component<Props> {
  static defaultProps = {
    keyboard: true,
    gamepad: false,
    midi: false,
    onKeyUp: (keyAction: string) =>
      console.warn("onKeyUp was triggered but is a NOOP. Nothing will happen.", keyAction), // eslint-disable-line
    onPadUp: (padAction: string) =>
      console.warn("onPadUp was triggered but is a NOOP. Nothing will happen.,": padAction), // eslint-disable-line
    onMIDINote: (midiNote: number) =>
      console.warn("onMIDINote was triggered but is a NOOP. Nothing will happen.", midiNote), // eslint-disable-line
  }

  componentDidMount() {
    this.props.keyboard && this.addKeyUpListener()
    this.props.gamepad && this.addGamepadListener()
    this.props.midi && this.addMIDIListener()
  }

  addKeyUpListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<Window>) =>
      this.props.onKeyUp(event.keyCode)
    )
  }

  addGamepadListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<Window>) =>
      this.props.onKeyUp(event.keyCode)
    )
  }

  addMIDIListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<Window>) =>
      this.props.onKeyUp(event.keyCode)
    )
  }

  render() {
    if (!this.props.showShortcuts)
      return null


  }
}

export default KeyboardShortcuts
