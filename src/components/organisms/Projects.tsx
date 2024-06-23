import Infobox from "@molecules/Infobox"
import { internships, projects } from "../constants/projects"
import styles from "./styles.module.scss"

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.title}>
        <h1>I'm developed for...</h1>
      </div>
      <div className={styles.scroll}>
        <div className={styles.projects}>
          {internships.map((project) => (
            <Infobox
              key={project.title}
              title={project.title}
              type="internship"
              tag={project.tag}
              points={project.points}
            />
          ))}
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <Infobox
              key={project.title}
              title={project.title}
              type="project"
              tag={project.tag}
              points={project.points}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
