import React from "react";

import SocialButton from "../SocialButton";
import { useDispatch } from "react-redux";
import { getUserData } from "../../redux/slices/authSlice";
import "./facebook.css";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";

export default function FacebookAuth() {
  const dispatch = useDispatch();
  const handleSocialLogin = (user) => {
    console.log(user);
    dispatch(getUserData(user.profile));
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };
  return (
    <>
    <HeaderPhoto/>
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
