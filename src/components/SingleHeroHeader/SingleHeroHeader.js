import React from "react";
import arrow from "../../assets/arrow.svg";
import {
  Arrow,
  ArrowText,
  WrapperArrow,
  HeroHeaderImage,
  HeroTitle,
  Info,
} from "./SingleHeroHeaderStyled";
import { Link } from "react-router-dom";

function SingleHeroHeader({ image, name }) {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/">
        <WrapperArrow>
          <Arrow src={arrow} alt="arrow" />
          <ArrowText>GO BACK</ArrowText>
        </WrapperArrow>
      </Link>

      <HeroHeaderImage src={image} alt="rick" />
      <HeroTitle>{name}</HeroTitle>
      <Info>Informations</Info>
    </>
  );
}

export default SingleHeroHeader;
