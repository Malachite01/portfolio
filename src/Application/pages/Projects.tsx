import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import electronApp from "../../img/projects/electron-app.webp";
import ftp from "../../img/projects/ftp.webp";
import deezerLogo from "../../img/projects/deezer-logo.webp";
import polyrythm from "../../img/projects/polyrythm.webp";
import game from "../../img/projects/jeu.webp";
import noise from "../../img/projects/noise.webp";
import tri from "../../img/projects/tri-21.webp";
import demi from "../../img/projects/demi.webp";
import topo from "../../img/projects/topo.webp";
import Card from "../components/Card";

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
    slidesToScroll: 1,
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

  const projectList = [
    { 
        gitUrl: "https://github.com/Malachite01", 
        imageSrc: game, 
        title: 'Jeu vidéo d\'aventure', 
        description: "Un jeu vidéo d'aventure en cours de développement avec Unity C#. Ce projet est très ambitieux et chronophage, le dépôt reste privé pour le moment." , 
        id: "jeu"
    },
    { 
        gitUrl: "https://tahinraw.fr", 
        imageSrc: "https://tahinraw.fr/og-image.png",
        title: 'Tahin.raw Portfolio', 
        description: "Portfolio de photographie entièrement développé en ReactJS, HTML et CSS, axé sur la création d'un site web réactif et performant pour ordinateur et mobile. Optimisation SEO, méta-tags et configuration DNS personnalisée." , 
        id: "tahinraw"
    },
    { 
        gitUrl: "https://github.com/Malachite01/appTransfertMobile", 
        imageSrc: electronApp, 
        title: 'Application Electron/Node.js', 
        description: "Application conçue pour transférer automatiquement toutes les photos d'un téléphone Android vers un ordinateur. Son objectif est de simplifier le processus de création de sauvegardes locales régulières." , 
        id: "transfertAndroid"
    },
    { 
        gitUrl: "https://github.com/Malachite01/proxy-ftp", 
        imageSrc: ftp, 
        title: 'Proxy FTP', 
        description: "Proxy FTP développé en C, compatible avec les commandes pwd, cd, ls, get, etc. Il est compatible avec les modes actif et passif." , 
        id: "proxy"
    },
    { 
        gitUrl: "https://github.com/Malachite01/tsock-Insa", 
        imageSrc: null,
        title: 'Communication client-serveur', 
        description: "Projet simple de communication client-serveur en C, implémentant un modèle client-serveur de base utilisant TCP et UDP (pour montrer la perte de données). Comprend la création de sockets, la construction de messages et la gestion des erreurs." , 
        id: "tsock"
    },
    { 
        gitUrl: "https://github.com/Malachite01/mic-tcp-insa", 
        imageSrc: null,
        title: 'Implémentation TCP simplifiée', 
        description: "Implémentation TCP simplifiée en C, conçue pour simuler les mécanismes TCP de base tels que les numéros de séquence, les acquittements et la gestion de connexion. Gère également la perte de paquets." , 
        id: "micTcp"
    },
    { 
        gitUrl: "https://github.com/Malachite01/Image_processing_project", 
        imageSrc: noise, 
        title: "Traitement d'images", 
        description: "Projet de traitement d'images pour débruiter ou ajouter du bruit, avec différents types de traitements, sur des images en niveaux de gris." , 
        id: "noise"
    },
    { 
        gitUrl: "https://malachite01.github.io/prog_web/", 
        imageSrc: demi,
        title: 'Démineur web', 
        description: "Premier projet à l'INSA Toulouse. L'objectif était de développer un jeu de puzzle en JavaScript vanilla, HTML et CSS." , 
        id: "minesweeper"
    },
    { 
        gitUrl: "https://github.com/Malachite01/deezer_to_mp3", 
        imageSrc: deezerLogo, 
        title: 'Deezer to MP3', 
        description: "Script Python pour faire une sauvegarde locale de vos playlists Deezer. Utilise l'API Deezer et un scraper YouTube pour télécharger." , 
        id: "deezer"
    },
    { 
        gitUrl: "https://github.com/Malachite01/polyrhythm_visualizer", 
        imageSrc: polyrythm, 
        title: 'Visualiseur polyrythmique', 
        description: "Visualiseur développé avec une approche mathématique en Unity C#, affichant les relations entre sons et images à travers des motifs rythmiques complexes." , 
        id: "polyrythm"
    },
    { 
        gitUrl: "https://github.com/Malachite01/SAE-Trisomie21-HG", 
        imageSrc: tri, 
        title: 'Application Trisomie 21 HG', 
        description: "Application web d'économie de jetons créée pour l'association 'Trisomie 21 Haute-Garonne' afin d'aider les enfants autistes et trisomiques." , 
        id: "triso21"
    },
    { 
        gitUrl: "", 
        imageSrc: topo, 
        title: "Infrastructure réseau complexe", 
        description: "Création d'une infrastructure complexe avec des serveurs, clients, routeurs, switchs, firewalls, VLANs et différents services (DHCP, Web, monitoring, etc.). Utilisant des technologies comme Docker et ESXi." , 
        id: "infra"
    }
  ];

  let sliderRef = useRef<Slider>(null);

  return (
    <div className="component projects" data-testid='projects-component'>
      <div className="title-container">
        <h1 className="title" id="projects">Projets</h1>
        <div className="title-separator"></div>
      </div>

      <div className="slider-container" transition-style="in:wipe:top-right">
        <Slider {...settings} ref={sliderRef}>
          {projectList.map((project, index) => (
            <Card 
              gitUrl={project.gitUrl}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              index={index}
              id={project.id}
              key={index}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
 
export default Projects;