import "./App.css";
import React from "react";
import HomePage from "./components/pages/HomePage";
import SingleHeroPage from "./components/pages/SingleHeroPage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

import { useSelector } from "react-redux";
import FacebookAuth from "./components/FacebookAuth/FacebookAuth";

function App() {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <div className="App">
      <Routes>
        {userData ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/singleHero/:heroId" element={<SingleHeroPage />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="/" element={<FacebookAuth />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
