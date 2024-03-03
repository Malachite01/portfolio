import React from 'react';

const Techno = () => {
  const iconList = [
    "nodejs", "react", "electron", "c", "cs", "go", "docker", "kubernetes", "linux", "grafana", "py", "blender", "unity", "androidstudio", "html", "css", "js", "php", "postman", "mysql", "java", "latex", "ps"
  ];
  
  return (
    <React.Fragment>
      <h2>Technologies maitrisées</h2>
      <div className="skills-img-container">
        {iconList.map((icon, index) => (
          <img key={index} src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
        ))}
      </div>
    </React.Fragment>
  );
}
 
export default Techno;