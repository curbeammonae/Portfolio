import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, <br></br>I'm Monae Curbeam</h1>
        <p className={styles.description}>
         Full-Stack Developer
        </p>
        <a href="mailto:curbeammonae@gmail.com" className={styles.contactBtn}>
          Contact Me
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
}
