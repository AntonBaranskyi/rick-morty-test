import React from "react";
import SingleHeroHeader from "../SingleHeroHeader/SingleHeroHeader";
import SingleHeroInfo from "../SingleHeroInfo/SingleHeroInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { useSelector } from "react-redux";

import { Helmet } from "react-helmet";
import SkeletonHero from "../Skeleton/SkeletonHero";

import { fetchHero } from "../../redux/slices/singleHeroSlice";
import { RootState, useAppDispatch } from "../../redux/store/store";

export default function SingleHeroPage() {
  const { heroId } = useParams();
  const { hero, statusHero } = useSelector(
    (state: RootState) => state.singleHero
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHero(heroId));
    localStorage.setItem("heroData", JSON.stringify(hero));
  }, [heroId]); // eslint-disable-line react-hooks/exhaustive-deps

  const { name, image, gender, species, status, origin, type } = hero || {};

  return (
    <>
      {statusHero === "error" && <ErrorMessage />}
      {statusHero === "loading" ? (
        <SkeletonHero />
      ) : (
        <>
          <Helmet>
            <meta name={`${name} page`} content="Rick and Morty" />
            <title>{`${name}'s page info`}</title>
          </Helmet>
          <SingleHeroHeader name={name} image={image} />
          <SingleHeroInfo
            status={status}
            gender={gender}
            species={species}
            origin={origin}
            type={type}
          />
        </>
      )}
    </>
  );
}
