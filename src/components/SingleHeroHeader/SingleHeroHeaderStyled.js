import styled from "styled-components";

export const WrapperArrow = styled.div`
  display: flex;
  flex-direction: row;

  margin: 21px 0 31px 50px;
  cursor: pointer;
`;

export const Arrow = styled.img`
  height: 24px;
  width: 24px;

  padding-right: 8px;
`;

export const ArrowText = styled.h3`
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;

export const HeroHeaderImage = styled.img`
  height: 300px;
  width: 300px;
  overflow: hidden;

  object-fit: fill;

  border: 5px solid #f2f2f7;
  border-radius: 50%;

  margin: 0 auto;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.h2`
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;

  margin-bottom: 48px;
`;

export const Info = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #8e8e93;

  margin-bottom: 48px;
`;
