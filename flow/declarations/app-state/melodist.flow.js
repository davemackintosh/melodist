// @flow

import type { PieceType } from "@flow/piece.flow"
import type { Melodist$AppState } from "@flow/app-state/app-state.flow"
import type { Melodist$CursorState } from "@flow/app-state/cursor.flow"

export type Melodist$GlobalState = {
  app: Melodist$AppState,
  piece: ?PieceType,
  cursor: Melodist$CursorState,
}
