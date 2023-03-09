import React from "react";
import SingleHeroHeader from "../SingleHeroHeader/SingleHeroHeader";
import SingleHeroInfo from "../SingleHeroInfo/SingleHeroInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Helmet } from "react-helmet";
import SkeletonHero from "../Skeleton/SkeletonHero";

import { fetchHero } from "../../redux/slices/singleHeroSlice";

export default function SingleHeroPage() {
  const { heroId } = useParams();
  const { hero, status } = useSelector((state) => state.singleHero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHero(heroId));
    localStorage.setItem("heroData", JSON.stringify(hero));
  }, [heroId]); // eslint-disable-line react-hooks/exhaustive-deps

  const { image, name } = hero;

  return (
    <>
      {status === "loading" ? (
        <SkeletonHero />
      ) : (
        <>
          <Helmet>
            <meta name={`${name} page`} content="Rick and Morty" />
            <title>{`${name}'s page info`}</title>
          </Helmet>
          <SingleHeroHeader name={name} image={image} />
          <SingleHeroInfo {...hero} />
        </>
      )}
    </>
  );
}
