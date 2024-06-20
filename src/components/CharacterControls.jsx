import React, { Component } from "react";

class Controls extends Component {
  state = {};
  render() {
    const { liked, id, onLikeToggle, onDelete } = this.props;

    return (
      <>
        <button
          onClick={() => onLikeToggle(id)}
          className={liked ? "character liked" : "character notLiked"}
        >
          {liked ? "Click to like" : "Click to dislike"}
        </button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </>
    );
  }
}

export default Controls;
