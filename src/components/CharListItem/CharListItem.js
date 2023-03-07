import React from "react";
import { Link } from "react-router-dom";
import {
  ItemDescr,
  ItemImg,
  ItemTitle,
  WrapperItem,
} from "./CharListItemStyled";

function CharListItem({ name, species, image, id }) {
  return (
    <Link to={`/singleHero/${id}`} style={{ textDecoration: "none" }}>
      <WrapperItem>
        <ItemImg src={image} alt="rick" />
        <ItemTitle>{name}</ItemTitle>
        <ItemDescr>{species}</ItemDescr>
      </WrapperItem>
    </Link>
  );
}

export default CharListItem;
