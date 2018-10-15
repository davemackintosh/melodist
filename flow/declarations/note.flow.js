// @flow

import type { EffectType } from "./effect.flow"

export type NoteType = {
  string: number,
  fret: number,
  ring: boolean,
  linked: NoteType,
  dynamic: number,
  effects: EffectType[],
}
