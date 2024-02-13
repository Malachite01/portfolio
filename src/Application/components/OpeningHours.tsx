import React from "react";
import schedule from "../../img/schedule.svg";

const OpeningHours = () => {
  return (
    <div id="horaires">
      <table className="horaires">
        <caption>
          <div>
            <img src={schedule} alt="schedule icon" />
            <p>Horaires : </p>
          </div>
        </caption>
        <thead>
          <tr>
            <th>Jour</th>
            <th>Ouverture</th>
            <th>Fermeture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>Fermé</td>
            <td>Fermé</td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td>9h30-12h30</td>
            <td>15h-19h</td>
          </tr>
          <tr>
            <td>Mercredi</td>
            <td>9h30-12h30</td>
            <td>15h-19h</td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td>9h30-12h30</td>
            <td>15h-19h</td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td>9h30-12h30</td>
            <td>15h-19h</td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td>9h30-12h30</td>
            <td>15h-17h</td>
          </tr>
          <tr>
            <td>Dimanche</td>
            <td>Fermé</td>
            <td>Fermé</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OpeningHours;
