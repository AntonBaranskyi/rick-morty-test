import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  margin-bottom: 61px;
`;

export const SearchInput = styled.input`
  width: 1020px;
  height: 66px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-left: 48px;
  color: rgba(0, 0, 0, 0.5);

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const SearchFind = styled.img`
  position: absolute;
  left: 606px;
  top: 24px;

  width: 24px;
  height: 24px;
`;

export const SearchClose = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;

  right: 610px;
  top: 22px;
  cursor: pointer;
`;
