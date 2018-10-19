// @flow

import type { Instrument } from "@flow/instrument.flow"
import type { Measure } from "@flow/measure.flow"
import type { 
  TuningType,
  StandardTunings, 
} from "@flow/tuning.flow"

export type TrackType = {
  title: string,
  instrument: Instrument,
  tuning: TuningType[] | StandardTunings,
  measures: Measure[],
  mute: boolean,
  strings: number,
  colour: string,
  volume: number,
  pan: number
}
