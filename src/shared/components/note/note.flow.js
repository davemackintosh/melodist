// @flow

import type { NoteType } from "@flow/note.flow"

export type Props = {
  note: NoteType,
  className?: string,
  onNoteClick: (note: NoteType) => void,
  onNoteKeyUp: (note: NoteType, keyCode: number) => void,
}
