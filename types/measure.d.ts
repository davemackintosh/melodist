import { BeatType } from "./beat"
import { TimeSignatureType } from "./time-signature"

export interface MeasureType {
  repeat: number,
  beats: BeatType[],
  timeSignature: TimeSignatureType,
  text?: string
}
