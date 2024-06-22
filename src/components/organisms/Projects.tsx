import Infobox from "@molecules/Infobox"
import { projects } from "../constants/projects"

const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <Infobox
          title={project.title}
          tag={project.tag}
          points={project.points}
        />
      ))}
    </div>
  )
}

export default Projects
