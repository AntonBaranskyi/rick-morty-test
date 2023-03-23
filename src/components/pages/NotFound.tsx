import React from "react";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Tittle = styled.h1`
  font-size: 48px;
  padding-top: 20px;
`;
const Btn = styled.div`
  font-size: 28px;
  padding-top: 20px;
  color: black;
`;
function NotFound() {
  return (
    <>
      <HeaderPhoto />

      <Tittle>Page not found 😕</Tittle>
      <Btn>
        <Link to="/" style={{ textDecoration: "none", color: "purpule" }}>
          Back home page
        </Link>
      </Btn>
    </>
  );
}

export default NotFound;
