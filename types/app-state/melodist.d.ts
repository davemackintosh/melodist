import { Melodist$AppState } from "@m-types/app-state/app-state"
import { Melodist$CursorState } from "@m-types/app-state/cursor"
import { PieceType } from "@m-types/piece"

export interface Melodist$GlobalState {
  app: Melodist$AppState,
  piece: ?PieceType,
  cursor: Melodist$CursorState,
}
