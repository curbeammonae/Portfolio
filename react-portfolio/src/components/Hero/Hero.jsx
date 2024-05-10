import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, <br></br>I'm Monae Curbeam</h1>
    
        <p>
        <p className={styles.description}>
                I'm a dedicated full-stack developer driven by a passion for<br></br>
                crafting accessible web applications that not only excite <br></br>users
                but also have the power to transform lives. <br></br>My ultimate goal is
                to leverage my expertise and experience <br></br>to make a meaningful and
                positive difference.
              </p>
        </p>
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
