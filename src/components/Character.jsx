import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./CharacterControls";

function Character({
  name,
  quote,
  image,
  characterDirection,
  id,
  liked,
  onLikeToggle,
  onDelete,
}) {
  if (characterDirection === "Left") {
    return (
      <div>
        <Name name={name} />
        <Image imageUrl={image} imageAlt={name} />
        <Quote quote={quote} />
        <Controls
          id={id}
          liked={liked}
          onLikeToggle={onLikeToggle}
          onDelete={onDelete}
        />
      </div>
    );
  }

  return (
    <div>
      <Name name={name} />
      <Quote quote={quote} />
      <Image imageUrl={image} imageAlt={name} />
      <Controls
        id={id}
        liked={liked}
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Character;
