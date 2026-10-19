import React from "react";
import logoAssurance from "../../img/assurance-maladie.webp";
import location from "../../img/location.svg";
import security from "../../img/security.png";

const Experiences = () => {
  const experiences = [
    {
      color: "#5A1D81",
      id: "security",
      image: security,
      title: "Stage : Expert Sécurité et Technologie , Support Sécurité et Projets",
      url: "https://www.bpce-si.fr/",
      date: "janv. 2026 - juill. 2026",
      location: "BPCE Solutions Informatiques",
      locationUrl: "https://maps.app.goo.gl/6ELFb9Zg149D9WYo6",
      description: "Intégré au Centre d’Expertise Sécurité Métier, je mène des travaux d'architecture, de sécurité, de spécification et d'implémentation : rédaction d’exigences et de livrables, modélisation de scénarios d’attaques, analyses de risques, participation au cadrage de tests d’intrusion, participation à la mise en place d’un référentiel de sécurité pour les systèmes d’IA, développement de scripts Python, automatisation du processus de connexion à la banque a distance, réexposition d’APIs pour les partenaires."
    },
    {
      color: "#285baa",
      id: "devSecOps",
      image: logoAssurance,
      title: "Alternance : Apprenti TechLead DevSecOps",
      url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjJtPmHr8GEAxUgVqQEHYc1BAoQFnoECBsQAw&url=https%3A%2F%2Fwww.oracle.com%2Ffr%2Fsecurity%2Fdefinition-approche-dev-sec-ops%2F%23%3A~%3Atext%3DL%2527approche%2520DevSecOps%2520(Development%2520%252D%2Ccondition%2520pr%25C3%25A9alable%2520avant%2520de%2520commencer.&usg=AOvVaw06oM_CxPoA-oqC9wSSh0DV&opi=89978449",
      date: "sept. 2023 - juin 2024",
      location: "CTI Toulouse (DataCenters de l'Assurance Maladie)",
      locationUrl: "https://maps.app.goo.gl/byei18GYNjjKh5i7A",
      description: "Contribution à la mise en place du processus DevSecOps et ses exigences de sécurité sur les environnements de la plateforme PaaS de l'Assurance Maladie (AmeliPro, Covid-19, etc...). Travail sur la sécurité des pipelines OpenShift de l'équipe PaaS CI/CD sous les aspects IAST (Interactive Application Security Testing), DAST (Dynamic Application Security Testing) et SAST (Static Application Security Testing) : \n- Scan d'images Trivy (scan de librairies)\n- Admission control Kyverno (définition de politiques d'accès)"
    },
    {
      color: "#285baa",
      id: "grafana",
      image: logoAssurance,
      title: "Stage : Développement d'un plugin 'Grafana'",
      url: "https://fr.wikipedia.org/wiki/Grafana",
      date: "avr. 2023 - juin 2023",
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
          <li className="experiences-card" key={index} id={experience.id}>
            <div className="experiences-deco" style={{backgroundColor: experience.color}}></div>
            <a className="experience-image-link" href={experience.url} target="_blank" rel="noreferrer">
              <img src={experience.image} alt={experience.title} className="experience-image" />
            </a>
            <div className="experience-content">
              <b>{experience.date}</b>
              <h2>{experience.title}</h2>
              <h3>
                <img src={location} alt="" className="experience-location-icon" />
                <a href={experience.locationUrl} target="_blank" rel="noreferrer">{experience.location}</a>
              </h3>
              <div className="separator"></div>
              <p>{experience.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default Experiences;
