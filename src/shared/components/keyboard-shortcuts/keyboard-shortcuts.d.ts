import { CursorType } from "@flow/cursor"

export interface PropsFromState {
  cursor: CursorType,
}

export interface PropsCallbacks {
  onKeyUp: (keyCode: number) => void,
  onPadUp?: (padAction: string) => void,
  onMIDINote?: (midiNote: number) => void,
}

export interface Props {
  ...PropsFromState,
  ...PropsCallbacks,

  showShortcuts?: boolean,
  keyboard?: boolean, // Default: true
  gamepad?: boolean, // Default: false
  midi?: boolean, // Default: false
}
