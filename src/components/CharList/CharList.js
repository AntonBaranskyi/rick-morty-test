import React, { useState, useEffect, useContext, useRef } from "react";
import CharListItem from "../CharListItem/CharListItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { WrapperList, WrapperWrapper } from "./CharListStyled";
import uniqid from "uniqid";

import { getAllHeroes } from "../../services/fetch";
import Skeleton from "../Skeleton/Skeleton";
import { SearchContext } from "../pages/HomePage";

function CharList() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const listItemRefs = useRef([]);
  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    localStorage.setItem("searchValue", searchValue);
  }, [searchValue]);

  useEffect(() => {
    const storedValue = localStorage.getItem("searchValue");
    if (storedValue) {
      setSearchValue(storedValue);
    }
  }, []);

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

  const handleMouseEnter = (index) => {
    listItemRefs.current[index].style.backgroundColor = "red";
  };

  const handleMouseLeave = (index) => {
    listItemRefs.current[index].style.backgroundColor = "";
  };

  const heroesContent =
    heroes &&
    heroes
      .filter((obj) => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase());
      })
      .map(({ name, species, image, id }, index) => {
        return (
          <CharListItem
            key={uniqid()}
            name={name}
            species={species}
            image={image}
            id={id}
            ref={(el) => (listItemRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      });

  return (
    <WrapperWrapper>
      <WrapperList>
        {error && <ErrorMessage />}
        {loading ? skeletonContent : heroesContent}
      </WrapperList>
    </WrapperWrapper>
  );
}

export default CharList;
