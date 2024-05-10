import React from 'react'
import blogs from '../../data/blog.json'
import { BlogCard } from "./BlogCard";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section className={styles.container} id="blog">
    <h2 className={styles.title}>Blog</h2>
    <div className={styles.projects}>
      {blogs.map((blog, id) => {
        return <BlogCard key={id} blog={blog} />;
      })}
    </div>
  </section>
  )
}
