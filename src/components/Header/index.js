import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="Logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="Logo" />
      </Content>
    </Wrapper>
  );
}
