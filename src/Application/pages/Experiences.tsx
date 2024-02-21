import React from "react";

const Experiences = () => {
  return (
    <div className="component experiences" data-testid='experiences-component'>
      <h1 className="title" id="experiences">Experiences</h1>
      <ul className="experiences-list">
        <li>
          <h2>Alternance : Intégration dans une équipe DevSecOps</h2>
          <h3><b>2023 - 2024</b> CTI Toulouse (DataCenters de l'Assurance Maladie)</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam non esse voluptatum ipsum labore. Numquam voluptatum molestiae libero. Quidem asperiores fugit, ipsa sint suscipit velit quam consectetur? Nemo, voluptatem qui!</p>
        </li>

        <li>
          <h2>Stage : Développement d'un plugin 'Grafana'</h2>
          <h3><b>2022 - 2023</b> CTI Toulouse (DataCenters de l'Assurance Maladie)</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium suscipit aliquam corporis labore perferendis, exercitationem voluptatem ex inventore ipsam alias et. Unde, consequatur ipsam. Itaque, corporis eaque? Tempore, ullam nostrum?</p>
        </li>
      </ul>
    </div>
  );
}
 
export default Experiences;