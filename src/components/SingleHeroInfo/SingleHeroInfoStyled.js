import styled from "styled-components";

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 413px;
  margin: 0 auto;

  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    width: 100%;

    margin-bottom: 20px;
  }
`;
