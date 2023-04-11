import React from "react";

import { useDispatch } from "react-redux";
import { getUserData } from "../../redux/slices/authSlice";
import "./GoogleAuth.css";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
declare const google: any;

export default function GoogleAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCallbackResponce = (resp: any) => {
    let userObj = jwt_decode(resp.credential);
    console.log(userObj);
    dispatch(getUserData(userObj));
    localStorage.setItem("USER_DATA", JSON.stringify(userObj));
    navigate("/");
  };
  React.useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "648217752418-gpb0ib4cqvbh7qac40uug1rc8m74q3v2.apps.googleusercontent.com",
      callback: handleCallbackResponce,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <HeaderPhoto />
      <div className="main">
        <div id="signInDiv" />
      </div>
    </>
  );
}
