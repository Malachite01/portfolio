import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeHolder from "../../img/projects/placeholder.png";

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 580,
        settings: {
         fade: true,
         centerMode: false,
        }
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const getImageFileName = (imageSrc: string) => {
    return imageSrc.split('/').pop();
  };

  const projectList = [
    { imageSrc: placeHolder, title: 'Projet 1', description: 'Un projet de ouf' },
    { imageSrc: placeHolder, title: 'Projet 2', description: 'Un autre projet cool' },
  ];

  return (
    <div id="projects" className="component projects" data-testid='projects-component'>
      <div className="slider-container">
        <Slider {...settings}>
          {projectList.map((project, index) => (
            <div className="project-container" key={index}>
              <div className="project">
                <h1>{project.title}</h1>
                <img src={project.imageSrc} alt={getImageFileName(project.imageSrc)} />
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
 
export default Projects;