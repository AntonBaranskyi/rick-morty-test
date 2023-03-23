import React from "react";
import { Link } from "react-router-dom";
import {
  ItemDescr,
  ItemImg,
  ItemTitle,
  WrapperItem,
} from "./CharListItemStyled";

interface ICharListItem {
  name: string;
  species: string;
  image: string;
  id: number;
}

const CharListItem: React.FC<ICharListItem> = ({
  name,
  species,
  image,
  id,
}) => {
  const itemRef = React.useRef(null);
  return (
    <Link to={`/singleHero/${id}`} style={{ textDecoration: "none" }}>
      <WrapperItem ref={itemRef}>
        <ItemImg src={image} alt="rick" />
        <ItemTitle>{name}</ItemTitle>
        <ItemDescr>{species}</ItemDescr>
      </WrapperItem>
    </Link>
  );
};

export default CharListItem;
