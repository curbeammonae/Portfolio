import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export default function About() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                I am a committed full-stack developer with a passion for
                creating accessible web applications that not only engage users
                but also have the potential to change lives. My goal is
                to utilize my skills and experience to make a significant and
                positive impact.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
