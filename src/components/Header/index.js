import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";
import { Context } from "../../context";

export default function Header() {
  const [user] = useContext(Context);
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="Logo" />
        </Link>

        {user ? (
          <span>Logged in as: {user.username}</span>
        ) : (
          <Link to="/login">
            <span>Log in</span>
          </Link>
        )}

        <TMDBLogoImg src={TMDBLogo} alt="Logo" />
      </Content>
    </Wrapper>
  );
}
