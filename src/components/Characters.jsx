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
          } = character;

          return (
            <Character
              key={id}
              id={id}
              name={name}
              quote={quote}
              image={image}
              characterDirection={characterDirection}
            />
          );
        })}
      </div>
    );
  }
}

export default Characters;
