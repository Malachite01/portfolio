import React from "react";

const Skills = () => {
  const iconList = [
    "nodejs", "react", "electron", "c", "cs", "go", "docker", "kubernetes", "linux", "grafana", "py", "blender", "unity", "androidstudio", "html", "css", "js", "php", "postman", "mysql", "java", "latex", "ps"
  ];

  return (
    <div className="component skills" data-testid='skills-component'>
      <h1 className="title" id="skills">Competences</h1>
      <p>Voici les compétences que j'ai acquises durant ma formation et mes expériences professionnelles.</p>

      <h2>Langages et Technologies</h2>
      <div className="skills-img-container">
        {iconList.map((icon, index) => (
          <img key={index} src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
        ))}
      </div>
    </div>
  );
}
 
export default Skills;