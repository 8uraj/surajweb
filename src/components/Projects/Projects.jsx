import React,{useEffect} from "react";
import Slider from "react-slick";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

import Aos from 'aos';
import 'aos/dist/aos.css';

export const Projects = () => {

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay:true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(()=>{
      Aos.init();
  },[]);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects} data-aos="zoom-in-up" data-aos-duration="1400">

      <Slider {...settings} className={styles.slick_slide}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </Slider>


      </div>
    </section>
  );
};
