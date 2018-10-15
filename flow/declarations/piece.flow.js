// @flow

import type { TimeSignatureType } from "./time-signature.flow"
import type { TrackType } from "./track.flow"

export type PieceType = {
  title: string,
  album: string,
  description: string,
  track_number: number,
  artist: string,
  authors: [ string ],
  tempo: number,
  timeSignature: TimeSignatureType,
  tracks: TrackType[],
}
