// @flow

import type { Instrument } from "./instrument.flow"
import type { Measure } from "./measure.flow"

export type TrackType = {
  title: string,
  instrument: Instrument,
  tuning: number,
  measures: Measure[],
  mute: boolean,
  strings: number,
  colour: string,
  volume: number,
  pan: number
}
