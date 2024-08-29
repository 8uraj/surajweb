import React, { useState, useEffect  } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

import Aos from 'aos';
import 'aos/dist/aos.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

   const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    Aos.init();
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);



  return (
  <>
    <nav className={styles.navbar} data-aos="zoom-in-right" data-aos-duration="2000">
      
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
      <div className={styles.back_to_top}>
        {isVisible && 
          <button onClick={scrollToTop} className={styles.back_to_top_button}>
            &#8593;
          </button>}
      </div>

    </>
  );
};
