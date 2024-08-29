import React, { useEffect } from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

import Aos from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {

  useEffect(()=>{
      Aos.init();
  },[]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="zoom-in" data-aos-duration="1000">Hi, I'm Suraj</h1>
        <p className={styles.description} data-aos="fade-up" data-aos-duration="2000">
        Motivated and detail-oriented individual pursuing a Bachelor's degree in Computer Science and Engineering. Proven track record of completing internships in software development and possessing a strong foundation in cloud computing technologies. Eager to leverage problem-solving skills and adaptability to contribute to Cloud's innovative projects.
        </p>
        <a href="https://github.com/8uraj/resume/blob/main/SurajYelpaleResume.pdf" className={styles.contactBtn} target="_blank">
          Resume
        </a>
      </div>

        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
