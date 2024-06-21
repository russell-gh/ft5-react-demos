import React from "react";

function Image({ imageUrl, imageAlt }) {
  return <img src={imageUrl} alt={imageAlt} />;
}

export default Image;
