import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                I'm a dedicated full stack developer driven by a passion for
                crafting accessible web applications that not only excites users
                but also has the power to transform lives. My ultimate goal is
                to leverage my expertise and experience to make a meaningful and
                positive difference.
              </p>
            </div>
          </li>
          
         
        </ul>
      </div>
    </section>
  );
}
