import { BeatType } from "@m-types/beat"
import { TimeSignatureType } from "@m-types/time-signature"

export interface Props {
  beat: BeatType,
  className?: string,
  timeSignature?: TimeSignatureType,
}
