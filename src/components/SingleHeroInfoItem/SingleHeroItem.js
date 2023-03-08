import React from "react";
import { Divider, Maintext, SecondText, Wrapper } from "./ItemStyled";

function SingleHeroInfoItem({ label, value }) {
  return (
    <Wrapper>
      <Maintext>{label}</Maintext>
      <SecondText>{value}</SecondText>
      <Divider />
    </Wrapper>
  );
}

export default SingleHeroInfoItem;
