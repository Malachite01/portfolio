import React, { useEffect, useRef } from "react";

import OpeningHours from "../components/OpeningHours";
import EyeChart from "../components/EyeChart";

import magasin from "../../img/home-magasin.jpg";
// home-magasin.jpg
import expand from "../../img/expand.svg";

const Home = () => {

  const reviewFrame = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const processIframeContent = async () => {
      const iframe = document.createElement("iframe");
      iframe.src = "https://9f8be0df00644100ae0c5a2d3ac3da03.elf.site";

      // Wait for the iframe to load
      await new Promise((resolve) => {
        iframe.onload = resolve;
      });

      // Clone the content of the iframe
      const clonedContent = iframe.contentDocument?.cloneNode(true);

      // Manipulate the cloned content as needed
      if (clonedContent) {
        // Example: Remove all anchor elements
        const clonedContent = iframe.contentDocument?.cloneNode(true) as Document;
        const anchors = clonedContent.querySelectorAll('a');
        anchors.forEach(anchor => {
          const href = anchor.getAttribute('href');
          const textContent = anchor.textContent?.trim();

          console.log('Anchor Element:', anchor);
          console.log('Text Content:', textContent);

          if (
            href === 'https://dash.elfsight.com/apps/google-reviews/pricing?claim=removeBranding&utm_source=websites&utm_medium=clients&utm_term=static.elfsight.com&utm_content=google-reviews&utm_campaign=free-widget' &&
            textContent === 'Free Google Reviews widget'
          ) {
            anchor.remove();
          }
        });

        // Append the manipulated content to the main document
        document.body.appendChild(clonedContent);
      }

      // Remove the temporary iframe
      document.body.removeChild(iframe);
    };

    // Call the function when the component mounts
    processIframeContent();
  }, []);

  return (
    <div className="component home" data-testid='home-component'>
      <div className="first-container-home">
        <div className="text-container" transition-style="in:wipe:bottom">
          <div className="text">
            <h1>Accueil</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna neque.</p>
            
            <button className="home-button" 
              onClick={() => {
                document.getElementById("horaires")?.scrollIntoView({behavior: "smooth"});
              }}
            >
              <img src={expand} alt="arrow icon" />
              <p>Voir les horaires</p>
            </button>

          </div>
        </div>

        <div className="image-container" transition-style="in:wipe:right">
          <img className="image" src={magasin} alt="Magasin" />
        </div>
      </div>

      {/* Informations utiles pour dire que c'est super */}
      
      <div className="reviewFrameContainer">
        <iframe ref={reviewFrame} id="reviewFrame" title="reviewFrame" src='https://9f8be0df00644100ae0c5a2d3ac3da03.elf.site' className="reviewFrame"></iframe>
      </div>
      
      {/* <iframe ref={reviewFrame} src='https://5d599547ffc3404989587d8ed1a1ee09.elf.site' width='100%' height='400' style={{border: 0}}></iframe> */}

      <div className="colored-container green home-two-elements" transition-style="in:wipe:bottom">
        <OpeningHours/>
        <EyeChart/>
      </div>
    </div>
  );
}
 
export default Home;