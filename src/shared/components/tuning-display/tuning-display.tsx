import classes from "classnames"
import React from "react"

import {
  StandardTunings,
  TuningType,
} from "@m-types/tuning"

import {
  standardTuningMap,
  tuningMap,
} from "@lib/tuning-map"

interface Props {
  className?: string,
  tuning: TuningType[] | StandardTunings
}

function TuningDisplay(props: Props) {
  const classNames = classes({
    "tuning-display": true,
    [props.className || ""]: true,
  })

  const tunings = typeof props.tuning === "string"
    ? standardTuningMap[props.tuning]
    : props.tuning

  const renderableTunings = tunings.map((tuning: TuningType, index: number) => (
    <span key={`${tuning.note}-${index}`} className="tuning-display--note">
      {tuning.note}
    </span>
  ))

  return (
    <div className={classNames}>
      {renderableTunings}
    </div>
  )
}

export default TuningDisplay
