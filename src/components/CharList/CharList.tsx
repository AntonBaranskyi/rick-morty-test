import React, { useEffect, useContext } from "react";
import CharListItem from "../CharListItem/CharListItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  WrapperList,
  WrapperWrapper,
  NotFoundHero,
  NotFoundWrapper,
} from "./CharListStyled";
import uniqid from "uniqid";

import Skeleton from "../Skeleton/Skeleton";
import { SearchContext } from "../pages/HomePage";
import { useSelector } from "react-redux";
import { fetchHeroes } from "../../redux/slices/heroesSlice";
import { RootState, useAppDispatch } from "../../redux/store/store";

export interface ICharList {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

function CharList() {
  const { searchValue, setSearchValue } = useContext(SearchContext)!;
  const { status, items, pageNum } = useSelector(
    (state: RootState) => state.heroes
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    getHero();
  }, [pageNum]); // eslint-disable-line react-hooks/exhaustive-deps

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
    dispatch(fetchHeroes(pageNum));
  };

  const skeletonContent = [...new Array(8)].map((_) => (
    <Skeleton key={uniqid()} />
  ));

  const heroesContent =
    items &&
    items
      .filter((obj) => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase());
      })
      .map(({ name, species, image, id }) => {
        return (
          <CharListItem
            key={id}
            name={name}
            species={species}
            image={image}
            id={id}
          />
        );
      });

  return (
    <WrapperWrapper>
      <WrapperList>
        {status === "error" && <ErrorMessage />}
        {status === "loading" ? (
          skeletonContent
        ) : (
          <>
            {heroesContent.length > 0 ? (
              heroesContent
            ) : (
              <NotFoundWrapper>
                <NotFoundHero>There is no any charecters 😕</NotFoundHero>
              </NotFoundWrapper>
            )}
          </>
        )}
      </WrapperList>
    </WrapperWrapper>
  );
}

export default CharList;
