import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import electronApp from "../../img/projects/electron-app.png";
import deezerLogo from "../../img/projects/deezer-logo.jpg";
import polyrythm from "../../img/projects/polyrythm.png";
import game from "../../img/projects/jeu.png";
import noise from "../../img/projects/noise.png";
import tri from "../../img/projects/tri-21.png";

const Projects = () => {
  function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div className={className + " custom-arrows"} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" stroke="black" viewBox="0 -960 960 960"><path d="m 539 -4 l -200 -280 l 200 -280 h -98 l -200 280 l 200 280 h 98 Z m -238 0 l -200 -280 l 200 -280 h -98 l -200 280 l 200 280 h 98 Z"/></svg>
      </div>
    );
  }
  function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div className={className + " custom-arrows"} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" stroke="black" viewBox="0 -960 960 960"><path d="m 2 -5 l 200 -280 l -200 -280 h 98 l 200 280 l -200 280 h -98 Z m 238 0 l 200 -280 l -200 -280 h 98 l 200 280 l -200 280 h -98 Z"/></svg>
      </div>
    );
  }
  
  var settings = {
    className: "inner-slider",
    centerMode: true,
    dots: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const getImageFileName = (imageSrc: string) => {
    return imageSrc.split('/').pop();
  };

  const projectList = [
    { gitUrl: "https://github.com/Malachite01/appTransfertMobile", imageSrc: electronApp, title: '📲 Application electron/nodeJS', description: "Conçue pour transférer automatiquement toutes les photos et fichiers d'un téléphone Android vers un ordinateur en un clic. Son objectif est de simplifier le processus de création de sauvegardes locales régulières." },
    { gitUrl: "https://github.com/Malachite01/deezer_to_mp3", imageSrc: deezerLogo, title: '🎵 Deezer to MP3', description: 'Un Script Python permettant de sauvegarder localement votre playlist Deezer.' },
    { gitUrl: "https://github.com/Malachite01/polyrhythm_visualizer", imageSrc: polyrythm, title: '🎼 Visualiseur polyrythmique', description: "Un outil affichant simultanément plusieurs motifs rythmiques complexes pour visualiser les relations entre sons et image. Développé avec une approche mathématique à l'esprit, avec Unity C#." },
    { gitUrl: "https://github.com/Malachite01/Trisomie21-HG", imageSrc: tri, title: '🪙 Application Trisomie 21', description: "Une application web d'économie de jetons créée pour l'association 'Trisomie 21 Haute-Garonne' afin d'aider les enfants autistes et trisomiques." },
    { gitUrl: "https://github.com/Malachite01/Image_processing_project", imageSrc: noise, title: "🖼️ Traitement d'images", description: "Un projet de traitement d'images permettant de réduire le bruit ou d'ajouter du bruit à des images en niveaux de gris en utilisant différents types de traitements mathématiques." },
    { gitUrl: "https://github.com/Malachite01", imageSrc: game, title: '🎮 Jeu video', description: "Un jeu vidéo en cours de développement en autodidacte, développé avec Unity C#." },
  ];

  return (
    <div id="projects" className="component projects" data-testid='projects-component'>
      <h1 className="title">Projets</h1>
      <div className="slider-container" transition-style="in:wipe:top-right">
        <Slider {...settings}>
          {projectList.map((project, index) => (
            <div className="project-container" key={index}>
              <div className="project">
                <img src={project.imageSrc} alt={getImageFileName(project.imageSrc)} />
                <div className="project-text">
                  <h1><a href={project.gitUrl} target="_blank" rel="noreferrer">{project.title}</a></h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
 
export default Projects;