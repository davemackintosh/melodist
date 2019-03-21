import classes from "classnames"
import React, { Component } from "react"

import { MeasureType } from "@m-types/measure"

interface Props {
  measure: MeasureType,
  className?: tring,
  onClick?: (measure: MeasureType) => void,
}

class MeasureEnd extends Component<Props> {
  public static defaultProps = {
    onClick: () => null,
  }

  public render() {
    const classNames = classes({
      [this.props.className || ""]: true,
      "measure--end": true,
      "measure--end__repeated": this.props.measure.repeats > 1,
    })

    return (
      <div className={classNames} />
    )
  }
}

export default MeasureEnd
