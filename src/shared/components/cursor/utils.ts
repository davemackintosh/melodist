import { CursorType } from "@m-types/cursor"
import { NoteType } from "@m-types/note"

export function isCursorOnNote(cursor: CursorType, note: NoteType, noteIndex: number) {
  return cursor.selectedString === note.string
}
