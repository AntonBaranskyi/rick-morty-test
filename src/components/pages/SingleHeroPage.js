import React from "react";
import SingleHeroHeader from "../SingleHeroHeader/SingleHeroHeader";
import SingleHeroInfo from "../SingleHeroInfo/SingleHeroInfo";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getHeroById } from "../../services/fetch";

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
          <SingleHeroHeader name={name} image={image} />
          <SingleHeroInfo {...singleHero} />
        </>
      )}
    </>
  );
}
