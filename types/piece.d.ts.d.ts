import { TimeSignatureType } from "./time-signature.flow"
import { TrackType } from "./track.flow"

export interface PieceType = {
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
