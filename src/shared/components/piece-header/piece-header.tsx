import React, { Component } from "react"

import { PieceType } from "@m-types/piece"

interface Props {
  piece: PieceType,
}

class PieceHeader extends Component<Props> {
  public renderAuthors(authors: string[] = []) {
    return authors.map((author: string) => (
      <span className="piece--header--author" key={author}>
        {author}
      </span>
    ))
  }

  public render() {
    return (
      <div className="piece--header">
        <h1 className="piece--header--title">
          {this.props.piece.title}
        </h1>
        <h2>
          track #{this.props.piece.trackNumber} of {this.props.piece.album}
        </h2>
        <p className="piece--header--authors">
          {this.renderAuthors(this.props.piece.authors)}
        </p>
        <p className="piece--header--description">
          {this.props.piece.description}
        </p>
      </div>
    )
  }
}

export default PieceHeader

