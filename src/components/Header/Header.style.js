import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 250px;

  @media (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 300px;
  height: 35px;

  @media (max-width: 500px) {
    width: 80px;
  }
`;
