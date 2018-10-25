// @flow

import type { BeatType } from "@flow/beat.flow"
import { TimeSignatureType } from "@flow/time-signature.flow"

export type Props = {
  beat: BeatType,
  className?: string,
  timeSignature?: TimeSignatureType,
}
