import React, { useState, useEffect, useContext } from "react";
import CharListItem from "../CharListItem/CharListItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { WrapperList } from "./CharListStyled";
import uniqid from "uniqid";

import { getAllHeroes } from "../../services/fetch";
import Skeleton from "../Skeleton/Skeleton";
import { SearchContext } from "../pages/HomePage";

function CharList() {
  const { searchValue } = useContext(SearchContext);
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getHero = () => {
    getAllHeroes().then(onLoadHeroes).catch(onError);
  };

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
      .map(({ name, species, image, id }) => {
        return (
          <CharListItem
            key={uniqid()}
            name={name}
            species={species}
            image={image}
            id={id}
          />
        );
      });

  return (
    <WrapperList>
      {error && <ErrorMessage />}
      {loading ? skeletonContent : heroesContent}
    </WrapperList>
  );
}

export default CharList;
