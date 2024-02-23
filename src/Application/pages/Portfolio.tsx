import React from "react";
import Home from "./Home";
import Formation from "./Formation";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div id="top">
      <Home />
      <Skills />
      <Formation />
      <Experiences />
      <Projects />
      <Contact />
      <p id="fin-de-page">©Mathieu ANTUNES 2024 - Site réalisé en ReactJs, CI/CD avec GitHub Pages</p>
    </div>

  );
}
 
export default Portfolio;