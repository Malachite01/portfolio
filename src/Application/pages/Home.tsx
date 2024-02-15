import React from "react";

import selfPortrait from "../../img/self-portrait.png";

const Home = () => {

  return (
    <div className="component home" data-testid='home-component'>
      <div className="first-container-home">
        <div className="home-container-left">
          <img src={selfPortrait} className="self-portrait self-portrait-back" transition-style="in:wipe:right" alt="selfie" />
          <img src={selfPortrait} className="self-portrait" transition-style="in:wipe:right" alt="selfie" />
          <div className="home-text-container">
            <h1 className="name">Mathieu <span>Antunes</span></h1>
            <h2 className="job" transition-style="in:wipe:bottom">Étudiant en Informatique</h2>
            <p transition-style="in:wipe:right">Actuellement en 3° année de BUT Informatique en spécialité déploiement d'applications communicantes et sécurisées</p>
          </div>
        </div>

        <div className="home-design-right">
          {/*// TODO */}
          {/* <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  strokeWidth='1' stroke='hsla(81, 100%, 80%, .6)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg> */}
          <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  strokeWidth='1' stroke='#f0c8d2' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
        </div>
        <div className="home-design-right"></div>
      </div>
    </div>
  );
}
 
export default Home;