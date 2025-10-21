import React from 'react';
import arrow from "../../img/arrow_forward.svg";

interface CardProps {
  gitUrl: string;
  imageSrc: string | null;
  title: string;
  description: string;
  id: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ gitUrl, imageSrc, title, description, id, index }) => {
  // Couleurs de fond qui s'harmonisent avec votre palette
  const bgColors = [
    '#1a4d3f', // Vert foncé plus clair
    '#2d5248', // Vert grisé
    '#3a4f4a', // Vert-gris foncé
    '#264238', // Vert profond
    '#1e3d35', // Vert sombre
  ];
  
  // Couleurs de texte correspondantes
  const textColors = [
    '#dbff9a', // accentuation-color
    '#f0c8d2', // secondary-accentuation-color
    '#f5f5f5', // font-color-white
    '#a8e6cf', // Vert pastel
    '#ffd7a8', // Orange pastel
  ];

  // Sélection basée sur l'index pour la cohérence
  const colorIndex = index % bgColors.length;
  const bgColor = bgColors[colorIndex];
  const textColor = textColors[colorIndex];

  const renderImage = () => {
    if (imageSrc) {
      return <img src={imageSrc} alt={title} />;
    }
    
    // SVG avec titre si pas d'image
    return (
      <div 
        className="project-image-placeholder"
        style={{
          width: '100%',
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bgColor,
          borderRadius: '10px',
          flexShrink: 0
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 300 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill={textColor}
            fontSize="24"
            fontFamily="var(--classic-font)"
            fontWeight="600"
            style={{ userSelect: 'none' }}
          >
            {title.split(' ').map((word, i) => (
              <tspan
                key={i}
                x="50%"
                dy={i === 0 ? 0 : '1.4em'}
              >
                {word}
              </tspan>
            ))}
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="project-container" key={index} id={id}>
      <div className="project-card-style">
        <div className="project">
          {renderImage()}
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