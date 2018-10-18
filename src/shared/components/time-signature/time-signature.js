// @flow

import React from "react"

import type { Props } from "./time-signature.flow"

function TimeSignature(props: Props) {
  return (
    <div className="time-signature">
      <span>
        { props.timeSignature.numerator }
      </span>
      <span>
        /
      </span>

      <span>
        { props.timeSignature.denominator }
      </span>
    </div>
  )
}

TimeSignature.defaultProps = {
  numerator: 4,
  denominator: 4,
}

export default TimeSignature
