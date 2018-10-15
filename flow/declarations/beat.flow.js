// @flow

import type { NoteType } from "./note.flow"

export type BeatType = {
  duration: number,
  notes: NoteType[],
  triplet: boolean,
  dotted: boolean,
}
