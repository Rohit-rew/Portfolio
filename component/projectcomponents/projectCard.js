import styles from "../../styles/project.module.css";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.tophovershow}></div>

      <div className={styles.buttons}>
          <a href={project.githuburl} target="_blank">
            <p >Git Hub</p>
          </a>

        <a href={project.livelink} target="_blank">
          <p>Live Link</p>
        </a>
      </div>
      <img src={project.mainimage} />

      <div className={styles.bottomhovershow}></div>
    </div>
  );
}
