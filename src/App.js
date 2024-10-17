import React from "react";
import './styles/App.css';
import MainPage from "./pages/mainPage";
import About from "./pages/about";
import Project from "./pages/projects";
import Skills from "./pages/skills";
function App() {
  return (
    <div>
      <MainPage />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
