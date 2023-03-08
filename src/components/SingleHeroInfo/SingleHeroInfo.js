import React from "react";
import { WrapperInfo } from "./SingleHeroInfoStyled";
import SingleHeroInfoItem from "../SingleHeroInfoItem/SingleHeroItem";
import uniqid from "uniqid";

function SingleHeroInfo({ gender, status, species, origin, type }) {
  const infoItems = [
    { label: "Gender", value: gender },
    { label: "Status", value: status },
    { label: "Species", value: species },
    { label: "Origin", value: origin?.name },
    { label: "Type", value: type || "Unknown" },
  ];
  return (
    <WrapperInfo>
      {infoItems &&
        infoItems.map(({ value, label }) => {
          return (
            <SingleHeroInfoItem key={uniqid()} label={label} value={value} />
          );
        })}
    </WrapperInfo>
  );
}

export default SingleHeroInfo;
