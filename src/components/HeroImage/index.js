import React from "react";
import { Content, Text, Wrapper } from "./HeroImage.style";

const HeroImage = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
