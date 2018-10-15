// @flow

import type { PieceType } from "@flow/piece.flow"
import type { Melodist$AppState } from "@flow/app-state/app-state.flow"

export type Meldist$GlobalState = {
  app: Melodist$AppState,
  piece: ?PieceType,
}