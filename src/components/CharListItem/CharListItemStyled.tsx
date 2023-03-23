import styled from "styled-components";

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;

  width: 240px;
  height: 244px;

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 240px;
  height: 168px;

  padding-bottom: 12px;
`;

export const ItemTitle = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);

  padding-bottom: 3px;
`;

export const ItemDescr = styled.h3`
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;


letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);
`;
