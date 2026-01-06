import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Your basic test component
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
