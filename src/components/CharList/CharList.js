import React, { useEffect, useContext, useRef } from "react";
import CharListItem from "../CharListItem/CharListItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { WrapperList, WrapperWrapper } from "./CharListStyled";
import uniqid from "uniqid";

import Skeleton from "../Skeleton/Skeleton";
import { SearchContext } from "../pages/HomePage";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroes } from "../../redux/slices/heroesSlice";

function CharList() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { status, items } = useSelector((state) => state.heroes);

  const dispatch = useDispatch();

  const listItemRefs = useRef([]);
  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    localStorage.setItem("searchValue", searchValue);
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const storedValue = localStorage.getItem("searchValue");
    if (storedValue) {
      setSearchValue(storedValue);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getHero = () => {
    dispatch(fetchHeroes());
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
    items &&
    items
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
        {status === "error" && <ErrorMessage />}
        {status === "loading" ? skeletonContent : heroesContent}
      </WrapperList>
    </WrapperWrapper>
  );
}

export default CharList;
