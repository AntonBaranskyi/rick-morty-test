import React, { useContext, useRef } from "react";
import {
  SearchClose,
  SearchFind,
  SearchInput,
  SearchWrapper,
} from "./SearchStyled";
import find from "../../assets/search-icon.svg";
import close from "../../assets/close-icon.svg";
import { SearchContext } from "../pages/HomePage";

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const searchRef = useRef(null);

  const onCloseBtn = () => {
    setSearchValue("");
    searchRef.current.focus();
  };
  return (
    <SearchWrapper>
      <SearchFind src={find} alt="find" />
      <SearchInput
        ref={searchRef}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        placeholder="Filter by name..."
      />

      {searchValue && (
        <SearchClose onClick={onCloseBtn} src={close} alt="close" />
      )}
    </SearchWrapper>
  );
}

export default Search;
