import React from "react";
import { WrapperInfo } from "./SingleHeroInfoStyled";
import SingleHeroInfoItem from "../SingleHeroInfoItem/SingleHeroItem";

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
        infoItems.map(({ value, label }, index) => {
          return <SingleHeroInfoItem key={index} label={label} value={value} />;
        })}
    </WrapperInfo>
  );
}

export default SingleHeroInfo;
