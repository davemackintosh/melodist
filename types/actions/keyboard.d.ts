import { KB_KEY_UP_EVENT } from "@constants/keyboard"
import Keys from "ts-keycode-enum"

export interface Melodist$KeyupAction {
  type: KB_KEY_UP_EVENT,
  keyCode: Keys,
}

export type Melodist$KeyboardAction = Melodist$KeyupAction
