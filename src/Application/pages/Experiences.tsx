import React from "react";
import devSecOps from "../../img/devsecops.webp";
import grafana from "../../img/grafana.svg";
import location from "../../img/location.svg";

const Experiences = () => {
  const experiences = [
    {
      color: "#49b9c8",
      id: "devSecOps",
      image: devSecOps,
      title: "Alternance : Intégration dans une équipe DevSecOps",
      url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjJtPmHr8GEAxUgVqQEHYc1BAoQFnoECBsQAw&url=https%3A%2F%2Fwww.oracle.com%2Ffr%2Fsecurity%2Fdefinition-approche-dev-sec-ops%2F%23%3A~%3Atext%3DL%2527approche%2520DevSecOps%2520(Development%2520%252D%2Ccondition%2520pr%25C3%25A9alable%2520avant%2520de%2520commencer.&usg=AOvVaw06oM_CxPoA-oqC9wSSh0DV&opi=89978449",
      date: "2023 - 2024",
      location: "CTI Toulouse (DataCenters de l'Assurance Maladie)",
      locationUrl: "https://maps.app.goo.gl/byei18GYNjjKh5i7A",
      description: "Contribution à la mise en place du processus DevSecOps et ses exigences de sécurité sur les environnements de l'Assurance Maladie (AmeliPro, Covid-19. etc...)."
    },
    {
      color: "#f37d27",
      id: "grafana",
      image: grafana,
      title: "Stage : Développement d'un plugin 'Grafana'",
      url: "https://fr.wikipedia.org/wiki/Grafana",
      date: "2022 - 2023",
      location: "CTI Toulouse (DataCenters de l'Assurance Maladie)",
      locationUrl: "https://maps.app.goo.gl/byei18GYNjjKh5i7A",
      description: "Réalisation d'un plugin Grafana (Un outil de visualisation de données), afin de générer des rapports PDF issus des serveurs du CTI, et leur envoi planifié à une liste de destinataires (fonction de 'reporting/alerting')."
    }
  ]; 

  return (
    <div className="component experiences" data-testid='experiences-component'>
      <div className="title-container">
        <h1 className="title" id="experiences">Experiences</h1>
        <div className="title-separator"></div>
      </div>
      <ul className="experiences-list">
        {experiences.map((experience, index) => (
          <div className="experiences-card" key={index} id={experience.id}>
            <div className="experiences-deco" style={{backgroundColor: experience.color}}></div>
            <a href={experience.url} target="_blank" rel="noreferrer"><img src={experience.image} alt={experience.title} className="experience-image" /></a>
            <b>{experience.date}</b>
            <h2> {experience.title}</h2>
            <h3><img src={location} alt="location" width={20}/> <a href={experience.locationUrl} target="_blank" rel="noreferrer">{experience.location}</a></h3>
            <div className="separator"></div>
            <p>&ensp;{experience.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
 
export default Experiences;