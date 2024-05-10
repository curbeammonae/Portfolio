import React from 'react'
import styles from "./BlogCard.module.css";
import { getImageUrl } from "../../utils";



export const BlogCard = ({
  blog: { title, imageSrc, description, read },
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
    <div className={styles.links}>
        <a href={read} className={styles.link}>
          Read
        </a>
        
      </div>

  </div>
  )
}

export default BlogCard;