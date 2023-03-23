import React from "react";
import { Divider, Maintext, SecondText, Wrapper } from './ItemStyled';

interface ISingleItem {
  label?: string;
  value?: string;
}

const SingleHeroInfoItem: React.FC<ISingleItem> = ({ label, value }) => {
  return (
    <Wrapper>
      <Maintext>{label}</Maintext>
      <SecondText>{value}</SecondText>
      <Divider />
    </Wrapper>
  );
};

export default SingleHeroInfoItem;
