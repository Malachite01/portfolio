import React from 'react';
import arrow from "../../img/arrow_forward.svg";

interface CardProps {
  gitUrl: string;
  imageSrc: string;
  title: string;
  description: string;
  id: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ gitUrl, imageSrc, title, description, id, index }) => {
  return (
    <div className="project-container" key={index} id={id}>
      <div className="project-card-style">
        <div className="project">
          <img src={imageSrc} alt={title} />
          <div className="project-text">
            <h1>{title}</h1>
            <div className='separator'></div>
            <p>&ensp;{description}</p>
          </div>
        </div>
        <p className="project-number">{index+1}</p>
        <button 
          disabled={gitUrl === ""}
          style={gitUrl === "" ? {cursor: "not-allowed", color: "white"} : {}}
          className="classic-button green" 
          onClick={()=>{
            if (gitUrl !== "") {
              window.open(gitUrl, "_blank");
            }
          }}
        >
          Vers le projet 
          <img src={arrow} alt="Fleche vers l'avant" />
        </button>
      </div>
    </div>
  );
}
 
export default Card;
