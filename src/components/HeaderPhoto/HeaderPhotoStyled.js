import styled from "styled-components";

export const HeaderLogo = styled.img`
  width: 600px;
  height: 200px;

  margin: 86px 0 16px 0;



  @media (max-width: 1024px) {
    width: 400px;
    height: 133px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 100px;
    margin: 60px 0 12px 0;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 67px;
    margin: 40px 0 8px 0;
  }
`;
