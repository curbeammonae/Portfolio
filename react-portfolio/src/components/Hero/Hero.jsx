import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export default function Hero() {
  const openResume = () => {
    // Replace 'path_to_your_resume.pdf' with the actual path to your resume PDF file
    // window.open('https://docs.google.com/document/d/1dpoQpB__2xrtnYy7xDINVpwfBdC3TRHf/edit?usp=sharing&ouid=102243122793471169853&rtpof=true&sd=true', '_blank');
    console.log('hey')
  };
  return (
    <section className={styles.container} id="hero">
     
      <div>
      <img
        src={getImageUrl("hero/moe.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      </div>
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
        
        <button className={styles.contactBtn} onClick={openResume}>Resume</button>
        {/* <button className={styles.contactBtn} > <a href="https://github.com/curbeammonae"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a></button>
        <button className={styles.contactBtn}><a href="https://github.com/curbeammonae"><img src={getImageUrl("contact/linkedinIcon.png")} alt="Github icon" /></a>
</button> */}
          
          
      </div>
      
    </section>
  );
}
