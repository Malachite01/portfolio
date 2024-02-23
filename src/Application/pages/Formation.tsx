import React from "react";

import iut from "../../img/formation/iut.webp";
import lycee from "../../img/formation/lycee.webp";
import dashed from "../../img/dashed.svg";

const Formation = () => {
  const formationsList = [
    { url: "https://iut.univ-tlse3.fr/bachelor-specialite-informatique", imageSrc: iut, annee: "IUT Informatique Paul Sabatier - 2024", diplome: "Bachelor Universitaire de Technologie (BUT)", description : "Spécialité développement d'applications communicantes et sécurisées", mention: "En cours d'obtention"},
    { url: "https://www.insee.fr/fr/metadonnees/definition/c2151", imageSrc: iut, annee: "IUT Informatique Paul Sabatier - 2023", diplome: "Diplôme Universitaire de Technologie (DUT)", description : "Spécialité développement d'applications communicantes et sécurisées", mention: "Mention 'Bien'"},
    { url: "#", imageSrc: lycee, annee: "Lycée Général Vincent Auriol - 2021", diplome: "Baccalauréat Général", description : "Spécialités Mathématiques et Physique-Chimie, options Mathématiques expertes et Classe européenne.", mention: "Mention 'Bien'"},
  ];

  return (
    <div className="component formations" data-testid='formations-component'>
      <h1 className="title" id="formations">Formation</h1>
      <div className="formations-container">
        {formationsList.map((formation, index) => (
          <>
            <a href={formation.url} className="formation" key={index} target="_blank" rel="noreferrer">
              <img src={formation.imageSrc} alt={formation.url}/>
              <div>
                <h2>{formation.annee}</h2>
                <p className="diplome">{formation.diplome}</p>
                <p>{formation.description}</p>
                <p>{formation.mention}</p>
              </div>
            </a>
            <img className="dashed" src={dashed} alt="dashed arrow svg" />
          </>
        ))}
      </div>
    </div>
  );
}
 
export default Formation;