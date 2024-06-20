import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    return (
      <div className="characters">
        {this.props.characters.map((character, index) => {
          const {
            character: name,
            quote,
            image,
            id,
            characterDirection,
            liked,
          } = character;

          return (
            <Character
              key={id}
              id={id}
              name={name}
              quote={quote}
              image={image}
              liked={liked}
              characterDirection={characterDirection}
              onLikeToggle={this.props.onLikeToggle}
              onDelete={this.props.onDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Characters;
