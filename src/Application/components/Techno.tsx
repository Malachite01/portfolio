import React from 'react';

const Techno = () => {
  const iconList = [
    "nodejs", "react", "electron", "c", "cs", "go", "docker", "kubernetes", "linux", "grafana", "py", "blender", "unity", "androidstudio", "html", "css", "js", "php", "postman", "mysql", "java", "latex", "ps"
  ];
  
  return (
    <div className="component projects" data-testid='projects-component'>
      <div className="title-container">
        <h1 className="title" id="projects">Technologies maitrisees</h1>
        <div className="title-separator"></div>
      </div>
      <div className="skills-img-container">
        {iconList.map((icon, index) => (
          <img key={index} src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
        ))}
      </div>
    </div>
  );
}
 
export default Techno;