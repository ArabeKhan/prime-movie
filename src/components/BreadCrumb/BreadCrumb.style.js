import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: white;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    font-size: var(--fontMed);
    color: white;
    padding-right: 10px;
  }
`;
