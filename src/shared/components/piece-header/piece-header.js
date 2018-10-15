// @flow

import React, { Component } from "react"

import type { PieceType } from "@floe/piece.floe"

type Props = {
  piece: PieceType,
}

class PieceHeader extends Component {
  render() {
    return (
      <div classname="piece--header">
        {this.props.piece.title}
      </div>
    )
  }
}

export default PieceHeader

