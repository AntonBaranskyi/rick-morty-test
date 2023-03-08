import React from "react";
import SingleHeroHeader from "../SingleHeroHeader/SingleHeroHeader";
import SingleHeroInfo from "../SingleHeroInfo/SingleHeroInfo";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getHeroById } from "../../services/fetch";

import { Helmet } from "react-helmet";

export default function SingleHeroPage() {
  const { heroId } = useParams();
  const [singleHero, setSingleHero] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    onHeroData();
  }, [heroId]); // eslint-disable-line react-hooks/exhaustive-deps

  const onHeroData = () => {
    getHeroById(heroId).then(onLoadHero);
  };
  const onLoadHero = (resp) => {
    setSingleHero(resp);
    setLoading(false);
  };
  const { image, name } = singleHero;
  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <Helmet>
            <meta name={`${name} page`} content="Rick and Morty" />
            <title>{`${name}'s page info`}</title>
          </Helmet>
          <SingleHeroHeader name={name} image={image} />
          <SingleHeroInfo {...singleHero} />
        </>
      )}
    </>
  );
}
