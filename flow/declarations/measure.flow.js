// @flow

import type { BeatType } from "./beat.flow"
import type { TimeSignatureType } from "./time-signature.flow"

export type MeasureType = {
  repeat: number,
  beats: BeatType[],
  timeSignature: TimeSignatureType,
  text: string
}
