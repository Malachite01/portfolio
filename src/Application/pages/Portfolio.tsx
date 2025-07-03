import React from "react";
import Home from "./Home";
import Techno from "../components/Techno";
import Formation from "./Formation";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="top">
      <Home />
      <Formation />
      <Experiences />
      <Projects />
      <Techno/>
      <Contact />
      <p id="fin-de-page">©Mathieu ANTUNES 2024/{currentYear} - Site réalisé en ReactJs, CI/CD avec GitHub Pages</p>
    </div>

  );
}
 
export default Portfolio;