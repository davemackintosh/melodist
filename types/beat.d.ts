import { NoteType } from "./note"

export interface BeatType {
  duration: number,
  notes: NoteType[],
  triplet?: boolean,
  dotted?: boolean,
}
