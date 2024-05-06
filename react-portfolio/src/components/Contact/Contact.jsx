import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Available now for freelance or full-time hire. Let's connect!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          
          <a href="https://github.com/curbeammonae"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://github.com/curbeammonae"><img src={getImageUrl("contact/linkedinIcon.png")} alt="Github icon" /></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://github.com/curbeammonae"><img src={getImageUrl("contact/emailIcon.png")} alt="Github icon" /></a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;