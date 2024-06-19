import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  state = { liked: false };

  onLikeToggle = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { name, quote, image, characterDirection } = this.props;
    const { liked } = this.state;

    if (characterDirection === "Left") {
      return (
        <div
          onClick={() => this.onLikeToggle("Hello")}
          className={liked ? "character liked" : "character notLiked"}
        >
          <Name name={name} />
          <Image imageUrl={image} imageAlt={name} />
          <Quote quote={quote} />
        </div>
      );
    }

    return (
      <div
        className={liked ? "character liked" : "character notLiked"}
        onClick={this.onLikeToggle}
      >
        <Name name={name} />
        <Quote quote={quote} />
        <Image imageUrl={image} imageAlt={name} />
      </div>
    );
  }
}

export default Character;
