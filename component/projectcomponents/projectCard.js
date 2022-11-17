import styles from "../../styles/project.module.css";

export default function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <div className={styles.tophovershow}></div>

      <div className={styles.buttons}>
        <button>Git Hub</button>
        <button>Visit Live</button>
      </div>
      <img src="https://ik.imagekit.io/ylyzsq6uc/7_WJjjbkkNW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666823644395" />

      <div className={styles.bottomhovershow}></div>
    </div>
  );
}
