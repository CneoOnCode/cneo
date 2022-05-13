import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import FrontPage from "./pages/FrontPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/navbar";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/socials" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
