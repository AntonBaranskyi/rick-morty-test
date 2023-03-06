import React from "react";
import {
  ItemDescr,
  ItemImg,
  ItemTitle,
  WrapperItem,
} from "./CharListItemStyled";


function CharListItem({ name, species, image }) {
  return (
    <WrapperItem>
      <ItemImg src={image} alt="rick" />
      <ItemTitle>{name}</ItemTitle>
      <ItemDescr>{species}</ItemDescr>
    </WrapperItem>
  );
}

export default CharListItem;
