import React, { useState } from "react";

import HeaderPhoto from '../HeaderPhoto/HeaderPhoto';
import Search from "../Search/Search";
import CharList from "../CharList/CharList";

export const SearchContext = React.createContext();

 function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <HeaderPhoto />
      <Search />
      <CharList />
    </SearchContext.Provider>
  );
}

export default HomePage;