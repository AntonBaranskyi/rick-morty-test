import React, { useState } from "react";

import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import Search from "../Search/Search";
import CharList from "../CharList/CharList";

import { Helmet } from "react-helmet";
import Pagination from "../Pagination/Pagination";
import AuthHeader from "../AuthHeader/AuthHeader";

interface IContext {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<IContext>({
  searchValue: "",
  setSearchValue: () => {},
});

function HomePage() {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Helmet>
        <meta name={`Main page`} content="Rick and Morty" />
        <title>{`Rick and Morty`}</title>
      </Helmet>
      <AuthHeader />
      <HeaderPhoto />
      <Search />
      <CharList />

      <Pagination />
    </SearchContext.Provider>
  );
}

export default HomePage;
