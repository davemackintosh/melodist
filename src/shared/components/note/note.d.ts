import { NoteType } from "@m-types/note"

export interface Props {
  note: NoteType,
  className?: string,
  onNoteClick: (note: NoteType) => void,
  onNoteKeyUp: (note: NoteType, keyCode: number) => void,
}
