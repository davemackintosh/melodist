// @flow

import type { CursorType } from "@flow/cursor.flow"

export type PropsFromState = {
  cursor: CursorType,
}

export type PropsCallbacks = {
  onKeyUp: (keyCode: number) => void,
  onPadUp?: (padAction: string) => void,
  onMIDINote?: (midiNote: number) => void,
}

export type Props = {
  ...$Exact<PropsFromState>,
  ...$Exact<PropsCallbacks>,

  showShortcuts?: boolean,
  keyboard?: boolean, // Default: true
  gamepad?: boolean, // Default: false
  midi?: boolean, // Default: false
}
