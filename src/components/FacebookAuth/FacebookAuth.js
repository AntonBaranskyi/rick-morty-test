import React from "react";

import SocialButton from "../SocialButton/SocialButton";
import { useDispatch } from "react-redux";
import { getUserData } from "../../redux/slices/authSlice";
import "./facebook.css";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";

export default function FacebookAuth() {
  const dispatch = useDispatch();
  const handleSocialLogin = (user) => {
    console.log(user);
    dispatch(getUserData(user.profile));
    localStorage.setItem("USER_DATA", JSON.stringify(user.profile));
  };

  const handleSocialLoginFailure = (err) => {
    dispatch(getUserData(err));
  };

  React.useEffect(() => {
    const data = localStorage.getItem("USER_DATA");
    if (data) {
      const user = JSON.parse(data);
      console.log(user ,'asfdds');
      dispatch(getUserData(user));
    }
  }, []);
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
