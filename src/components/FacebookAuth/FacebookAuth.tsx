import React from "react";

import SocialButton from "../SocialButton/SocialButton";
import { useDispatch } from "react-redux";
import { getUserData } from "../../redux/slices/authSlice";
import "./facebook.css";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import { useNavigate } from "react-router-dom";

interface IUser {
  profile: {
    id: string;
    name: string;
    firstName: string;
    email: string;
  };
}

export default function FacebookAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSocialLogin = (user: IUser) => {
    console.log(user);
    dispatch(getUserData(user.profile));
    localStorage.setItem("USER_DATA", JSON.stringify(user.profile));
    navigate("/");
  };

  const handleSocialLoginFailure = (err: string) => {
    dispatch(getUserData(err));
    navigate("/");
  };

  React.useEffect(() => {
    const data = localStorage.getItem("USER_DATA");
    if (data) {
      const user = JSON.parse(data);
      dispatch(getUserData(user));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <HeaderPhoto />
      <div className="social-wrapper">
        <SocialButton
          className="social-btn"
          provider="facebook"
          appId="590094139826027"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          Login with Facebook
        </SocialButton>
      </div>
    </>
  );
}
