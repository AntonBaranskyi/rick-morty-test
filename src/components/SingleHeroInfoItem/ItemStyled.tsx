import styled from "styled-components";

export const Wrapper = styled.div`
  width: 413px;
  height: 64px;

  @media screen and (max-width: 768px) {
    width: 100%;

    font-size: 14px;
  }
`;

export const Maintext = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: #081f32;
`;

export const SecondText = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.25px;

  color: #6e798c;
  padding-bottom: 12px;
`;

export const Divider = styled.div`
  height: 1px;
  background: rgba(33, 33, 33, 0.08);
  mix-blend-mode: normal;
`;
