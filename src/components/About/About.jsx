import React,{useEffect,Suspense} from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

import Aos from 'aos';
import 'aos/dist/aos.css';

import {Canvas} from '@react-three/fiber';
import {OrbitControls, Environment} from '@react-three/drei';
import Scene from '../../../public/Scene';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  
  useEffect(()=>{
      Aos.init();
  },[]);
  
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <Canvas>
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
              <Scene />

          </Suspense>
          <Environment preset='sunset' />
        </Canvas>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem} data-aos="fade-left" data-aos-duration="1000">
            <FontAwesomeIcon icon={faDesktop} className={styles.aboutIcon} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Crafting pixel-perfect interfaces with cutting-edge tech for immersive user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem} data-aos="fade-right" data-aos-duration="1000">
            <FontAwesomeIcon icon={faServer} className={styles.aboutIcon} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Architecting scalable systems for seamless data flow and robust functionality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem} data-aos="fade-left" data-aos-duration="1000">
            <FontAwesomeIcon icon={faPalette} className={styles.aboutIcon} />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Fusing creativity with usability to design visually stunning interfaces for intuitive interactions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
