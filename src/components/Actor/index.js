import React from "react";
import { Image, Wrapper } from "./Actor.style";

function Actor({ name, character, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

export default Actor;
