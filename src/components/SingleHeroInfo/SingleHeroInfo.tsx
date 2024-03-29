import React from "react";
import { WrapperInfo } from "./SingleHeroInfoStyled";
import SingleHeroInfoItem from "../SingleHeroInfoItem/SingleHeroItem";
import uniqid from "uniqid";

export interface IInfoProps {
  gender?: string;
  status?: string;
  species?: string;
  origin?: {
    name: string;
  };
  type?: string;
}

const SingleHeroInfo: React.FC<IInfoProps> = ({
  gender,
  status,
  species,
  origin,
  type,
}) => {
  const infoItems = [
    { label: "Gender", value: gender },
    { label: "Status", value: status },
    { label: "Species", value: species },
    { label: "Origin", value: origin && origin.name },
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
};

export default SingleHeroInfo;
