import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";

export default function AuthHeader() {
  const { userData } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="logo">
        <p>{`Hello, ${userData ? userData.name : "Uknown user"}`}</p>
      </div>
      <div className="user-auth">
        <div>
          {userData && (
            <img
              className="user-profile"
              src={userData.picture}
              alt="user_photo"
            />
          )}
        </div>
        {userData ? (
          <Link
            to="/"
            onClick={() => dispatch(logoutUser())}
            className="btn-logout"
          >
            Вийти
          </Link>
        ) : (
          <Link to="/login" className="btn-login">
            Увійти
          </Link>
        )}
      </div>
    </header>
  );
}
