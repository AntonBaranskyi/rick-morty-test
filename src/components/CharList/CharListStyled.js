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
  
  @media (max-width:1920px) {
    width: 1100px;
  }
  @media (max-width:1078px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width:795px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width:500px) {
    grid-template-columns: repeat(1, 1fr);  
  }
`;

export const WrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 188px;
  align-items: center;
  width: 1100px;
  margin: 0 auto;
  
`;
