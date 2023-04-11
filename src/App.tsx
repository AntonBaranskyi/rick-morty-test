import "./App.css";
import React from "react";
import HomePage from "./components/pages/HomePage";
import SingleHeroPage from "./components/pages/SingleHeroPage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";
import { getUserData } from "./redux/slices/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const data = localStorage.getItem("USER_DATA");
    if (data) {
      const user = JSON.parse(data);
      dispatch(getUserData(user));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singleHero/:heroId" element={<SingleHeroPage />} />
        <Route path="/login" element={<GoogleAuth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
function dispatch(arg0: { payload: any; type: "auth/getUserData" }) {
  throw new Error("Function not implemented.");
}
