// @flow

import { standardTuningMap } from "@lib/tuning-map"

export type TuningType = {
  note: string,
  octave: number,
}

export type StandardTunings = $Keys<typeof standardTuningMap>

