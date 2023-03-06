import React, { useState, useEffect, useContext } from "react";
import CharListItem from "../CharListItem/CharListItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { WrapperList } from "./CharListStyled";
import uniqid from "uniqid";

import { getAllHeroes } from "../../services/fetch";
import Skeleton from "../Skeleton/Skeleton";
import { SearchContext } from '../pages/HomePage';

function CharList() {
  const { searchValue } = useContext(SearchContext);
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getAllHeroes().then(onLoadHeroes).catch(onError);
  }, []);

  const onLoadHeroes = (resp) => {
    const sortedHeroes = resp.sort((a, b) => a.name.localeCompare(b.name));
    setHeroes(sortedHeroes);
    setLoading(false);
  };
  const onError = () => {
    setHeroes([]);
    setLoading(false);
    setError(true);
  };

  const skeletonContent = [...new Array(8)].map((_) => (
    <Skeleton key={uniqid()} />
  ));

  const heroesContent =
    heroes &&
    heroes
      .filter((obj) => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase());
      })
      .map((item) => {
        return <CharListItem key={uniqid()} {...item} />;
      });

  return (
    <WrapperList>
      {error && <ErrorMessage />}
      {loading ? skeletonContent : heroesContent}
    </WrapperList>
  );
}

export default CharList;
