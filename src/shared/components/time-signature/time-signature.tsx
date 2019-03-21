import React from "react"

import { Props } from "./time-signature"

function TimeSignature(props: Props) {
  return (
    <div className="time-signature font font__bravura">
      <span className="numerator">
        {props.timeSignature.numerator}
      </span>
      <span className="denominator">
        {props.timeSignature.denominator}
      </span>
    </div>
  )
}

TimeSignature.defaultProps = {
  numerator: 4,
  denominator: 4,
}

export default TimeSignature
