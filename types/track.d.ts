import { Instrument } from "@m-types/instrument"
import { Measure } from "@m-types/measure"
import {
  StandardTunings,
  TuningType,
} from "@m-types/tuning"

export interface TrackType {
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
