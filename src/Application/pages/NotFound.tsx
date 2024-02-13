import React from "react";
import { Link } from "react-router-dom";
import EyeComponent from "../components/EyeComponent";

import home from "../../img/home.svg";

const NotFound = () => {
  return (
    <div className="not-found component" data-testid='not-found-component'>
      <h1>404</h1>
      <h2>La page que vous avez demandée, n'existe pas.</h2>
    
      <div style={{display: "flex"}}>
        <EyeComponent follow />
        <span>&ensp;</span>
        <EyeComponent follow />
      </div>

      <Link className="link" to="/">
        <button className="home-button">
          <img src={home} alt="home icon" />
          <p>Retournez à l'accueil</p>
        </button>
      </Link>
    </div>
  );
}
 
export default NotFound;