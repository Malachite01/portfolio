import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found component" data-testid='not-found-component'>
      <h1>404</h1>
      <h2>La page que vous avez demandée, n'existe pas.</h2>

      <Link className="link" to="/">
        <button className="home-button">
          <p>Retournez à l'accueil</p>
        </button>
      </Link>
    </div>
  );
}
 
export default NotFound;