import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  height: 300px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 10px;

  animation: animateHeroImage 1s;
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  :hover {
    opacity: 0.8;
  }
`;
