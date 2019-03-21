import { EffectType } from "./effect"

export interface NoteType {
  string: number,
  fret: number,
  ring?: boolean,
  linked?: NoteType,
  dynamic?: number,
  effects?: EffectType,
}
