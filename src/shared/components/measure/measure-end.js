// @flow

import React, { Component } from "react"
import classes from "classnames"

import type { MeasureType } from "@flow/measure.flow"

type Props = {
  measure: MeasureType,
  className?: tring,
  onClick?: (measure: MeasureType) => void,
}

class MeasureEnd extends Component<Props> {
  static defaultProps = {
    onClick: () => null,
  }

  render() {
    const classNames = classes({
      [this.props.className || ""]: true,
      "measure--end": true,
      "measure--end__repeated": this.props.measure.repeats > 1,
    }) 

    return (
      <div className={ classNames } />
    )
  }
}

export default MeasureEnd
