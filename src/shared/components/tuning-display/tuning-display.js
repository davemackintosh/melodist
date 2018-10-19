// @flow

import React from "react"
import classes from "classnames"

import type {
  TuningType,
  StandardTunings,
} from "@flow/tuning.flow"

import {
  tuningMap,
  standardTuningMap,
} from "@lib/tuning-map"

type Props = {
  className?: string,
  tuning: TuningType[] | StandardTunings
}

function TuningDisplay(props: Props) {
  const classNames = classes({
    "tuning-display": true,
    [props.className || ""]: true,
  })

  let tunings = null

  if (typeof props.tuning === "string")
    tunings = standardTuningMap[props.tuning]
  else
    tunings = props.tuning

  const renderableTunings = tunings.map((tuning: TuningType, index: number) => (
    <span key={ `${tuning.note}-${index}` } className="tuning-display--note">
      { tuning.note }
    </span>
  ))

  return (
    <div className={ classNames }>
      { renderableTunings }
    </div>
  )
}

export default TuningDisplay
