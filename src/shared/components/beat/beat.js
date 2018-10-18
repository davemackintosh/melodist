// @flow

import React from "react"

import type { NoteType } from "@flow/note.flow"
import type { Props } from "./beat.flow"

import Note from "@components/note/note"

function Beat(props: Props) {
  const noteElements = props.beat.notes.map((note: NoteType, index: number) =>
    <Note key={index} note={note} />
  )
  return (
    <div className="beat">
      { noteElements }
    </div>
  )
}


export default Beat
