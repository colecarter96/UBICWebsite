import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Your basic test component
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
