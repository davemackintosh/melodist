import React, { Component } from "react"
import root from "window-or-global"

import { Props } from "./keyboard-shortcuts"

class KeyboardShortcuts extends Component<Props> {
  public static defaultProps = {
    keyboard: true,
    gamepad: false,
    midi: false,
    showShortcuts: false,

    onKeyUp: (keyAction: string) =>
      console.warn("onKeyUp was triggered but is a NOOP. Nothing will happen.", keyAction),
    onPadUp: (padAction: string) =>
      console.warn("onPadUp was triggered but is a NOOP. Nothing will happen.", padAction),
    onMIDINote: (midiNote: number) =>
      console.warn("onMIDINote was triggered but is a NOOP. Nothing will happen.", midiNote),
  }

  public componentDidMount() {
    if (this.props.keyboard) {
      this.addKeyUpListener()
    }

    if (this.props.gamepad) {
      this.addGamepadListener()
    }

    if (this.props.midi) {
      this.addMIDIListener()
    }
  }

  public renderShortcut(shortcut) {
    return null
  }

  public render() {
    if (!this.props.showShortcuts) {
      return null
    }

    return this.renderShortcut()
  }

  private addKeyUpListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<DocumentType>) =>
      this.props.onKeyUp(event.keyCode),
    )
  }

  private addGamepadListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<DocumentType>) =>
      this.props.onKeyUp(event.keyCode),
    )
  }

  private addMIDIListener() {
    root.addEventListener("keyup", (event: SyntheticKeyboardEvent<DocumentType>) =>
      this.props.onKeyUp(event.keyCode),
    )
  }
}

export default KeyboardShortcuts
