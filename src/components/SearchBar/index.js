import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../images/search-icon.svg";
import { Content, Wrapper } from "./SearchBar.style";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.target.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
