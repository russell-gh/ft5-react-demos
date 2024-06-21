import React from "react";
import Character from "./Character";

function Characters({ characters, onLikeToggle, onDelete }) {
  return (
    <div className="characters">
      {characters.map((character, index) => {
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
            onLikeToggle={onLikeToggle}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default Characters;
