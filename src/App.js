import "./App.css";
import React from "react";
import HomePage from "./components/pages/HomePage";
import SingleHeroPage from "./components/pages/SingleHeroPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singleHero/:heroId" element={<SingleHeroPage />} />
      </Routes>
    </div>
  );
}

export default App;
