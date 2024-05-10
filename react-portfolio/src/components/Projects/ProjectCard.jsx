import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <div>
        <ul className={styles.links}>
        <li>
        <a href={demo} className={styles.link}>
          Demo
        </a>

        </li>
        <li>
        <a href={source} className={styles.link}>
          Repository
        </a>

        </li>
      </ul>
       
        
      </div>

      
    </div>
  );
};

export default ProjectCard;