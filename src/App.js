import "./App.css";
import React from "react";
import HomePage from "./components/pages/HomePage";
import SingleHeroPage from "./components/pages/SingleHeroPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singleHero/:heroId" element={<SingleHeroPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
