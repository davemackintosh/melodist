import { TimeSignatureType } from "./time-signature"
import { TrackType } from "./track"

export interface PieceType {
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