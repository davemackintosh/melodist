// @flow

import React, { Component } from "react"

import type { PieceType } from "@flow/piece.floe"

type Props = {
  piece: PieceType,
}

class PieceHeader extends Component<Props> {
  renderAuthors(authors: string[] = []) {
    return authors.map((author: string) => (
      <span className="piece--header--author">
        {author}
      </span>
    ))
  }

  render() {
    return (
      <div className="piece--header">
        <h1 className="piece--header--title">
          { this.props.piece.title }
        </h1>
        <h2>
          track #{ this.props.piece.trackNumber } of { this.props.piece.album }
        </h2>
        <p className="piece--header--authors">
          { this.renderAuthors(this.props.piece.authors) }
        </p>
      </div>
    )
  }
}

export default PieceHeader

