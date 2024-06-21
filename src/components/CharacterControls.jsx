import React from "react";

function CharactersControls({ liked, id, onLikeToggle, onDelete }) {
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

export default CharactersControls;
