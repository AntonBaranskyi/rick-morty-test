import styled from "styled-components";

export const WrapperList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 24px;
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 85px;
  /* place-items: center; */

  @media (max-width: 1920px) {
    width: 1100px;
  }

  @media (max-width: 1078px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 732px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const WrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 188px;
  align-items: center;
  width: 1100px;
  margin: 0 auto;

  @media (max-width: 1430px) {
    width: 90%;
  }
  @media (max-width: 795px) {
    width: 100%;
    margin-bottom: 50px;
    margin-left: 85px;
  }
`;

export const NotFoundHero = styled.h3`
  font-size: 32px;
  font-weight: 700;
  text-align: center;

 
`;
