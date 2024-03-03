import React from "react";
import Techno from "../components/Techno";
import t1 from "../../img/skills/t1.png";
import t2 from "../../img/skills/t2.png";
import t3 from "../../img/skills/t3.png";
import t4 from "../../img/skills/t4.png";
import t5 from "../../img/skills/t5.png";
import t6 from "../../img/skills/t6.png";

import c1_1 from "../../img/skills/c1_1.png";
import c1_2 from "../../img/skills/c1_2.png";
import c1_3 from "../../img/skills/c1_3.png";
import c1_4 from "../../img/skills/c1_4.png";
import c1_5 from "../../img/skills/c1_5.png";
import c1_6 from "../../img/skills/c1_6.png";

import c2_1 from "../../img/skills/c2_1.png";
import c2_2 from "../../img/skills/c2_2.png";
import c2_3 from "../../img/skills/c2_3.png";
import c2_4 from "../../img/skills/c2_4.png";
import c2_5 from "../../img/skills/c2_5.png";
import c2_6 from "../../img/skills/c2_6.png";

import c3_1 from "../../img/skills/c3_1.png";
import c3_3 from "../../img/skills/c3_3.png";
import c3_6 from "../../img/skills/c3_6.png";

const Skills = () => {
  const titles = [
    { imageSrc: t1,},
    { imageSrc: t2,},
    { imageSrc: t3,},
    { imageSrc: t4,},
    { imageSrc: t5,},
    { imageSrc: t6,},
  ];

  const row1 = [
    { imageSrc: c1_1, onClick: ""},
    { imageSrc: c1_2, onClick: ""},
    { imageSrc: c1_3, onClick: ""},
    { imageSrc: c1_4, onClick: ""},
    { imageSrc: c1_5, onClick: ""},
    { imageSrc: c1_6, onClick: ""},
  ];

  const row2 = [
    { imageSrc: c2_1, onClick: ""},
    { imageSrc: c2_2, onClick: ""},
    { imageSrc: c2_3, onClick: ""},
    { imageSrc: c2_4, onClick: ""},
    { imageSrc: c2_5, onClick: ""},
    { imageSrc: c2_6, onClick: ""},
  ];

  const row3 = [
    { imageSrc: c3_1, onClick: ""},
    { imageSrc: "", onClick: ""},
    { imageSrc: c3_3, onClick: ""},
    { imageSrc: "", onClick: ""},
    { imageSrc: "", onClick: ""},
    { imageSrc: c3_6, onClick: ""},
  ];

  const goToElement = (id: string) => () => {
    if (id !== "") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="component skills" data-testid='skills-component'>
      <div className="title-container">
        <h1 className="title" id="skills">Competences</h1>
        <div className="title-separator"></div>
      </div>
      <p className="skills-intro-phrase">Durant ma formation à l'IUT Informatique Paul Sabatier, voici les compétences que j'ai acquises (cf <a target="_blank" rel="noreferrer" href="https://www.enseignementsup-recherche.gouv.fr/sites/default/files/annexe-2-licence-professionnelle-bachelor-universitaire-de-technologie-informatique-29016.pdf">Programme national informatique, page 28</a>) : </p>

      <div className="skills-bottom-container">
        <div id="skills-table-container">
          <table className="skills-table">
            <caption>Cliquez sur une compétences pour voir un projet associé ! </caption>
            <thead>
              <tr>
                {titles.map((title, index) => (
                  <th key={index}>
                    <img src={title.imageSrc} alt={title.imageSrc}/>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {row1.map((row, index) => (
                  <td key={index} onClick={goToElement(row.onClick)}>
                    <img src={row.imageSrc} alt={row.imageSrc}/>
                  </td>
                ))}
              </tr>
              <tr>
                {row2.map((row, index) => (
                  <td key={index} onClick={goToElement(row.onClick)}>
                    <img src={row.imageSrc} alt={row.imageSrc}/>
                  </td>
                ))}
              </tr>
              <tr>
                {row3.map((row, index) => (
                  <td key={index} onClick={goToElement(row.onClick)}>
                    {row.imageSrc !== "" && <img src={row.imageSrc} alt={row.imageSrc}/> }
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>


        <Techno/>
      </div>
    </div>
  );
}
 
export default Skills;