import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  max-width: 1020px;
  margin: 0 auto;
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

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 14px;
  }
  @media (max-width: 795px) {
  
    
  }
`;

export const SearchFind = styled.img`
  position: absolute;

  width: 24px;
  height: 24px;

  left: 11px;
  top: 22px;
`;

export const SearchClose = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;

  right: 11px;
  top: 22px;

  cursor: pointer;
`;
