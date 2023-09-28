import { ProjectType } from "../constants/dev";
import styles from "./styles.module.scss";
import Slider from "@organisms/Slider";
import Wrapper from "./Wrapper";
import Back from "@molecules/Back";

interface DevProjectProps {
  project: ProjectType;
}

const DevProject = ({ project }: DevProjectProps) => {
  return (
    <Wrapper bgImg={project.bg}>
      <div className={styles.devContainer}>
        <div className={styles.devCover}>
          <Slider dir={`dev/${project.imgDir}`} images={project.imgs} />
        </div>

        <div className={styles.devText}>
          <Back />

          <div>
            <h1>{project.title}</h1>
            <div className={styles.devLinks}>
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>{link.label}</button>
                </a>
              ))}
            </div>
            <div className={styles.devInfo}>
              {Object.entries(project.stats).map(([label, value]) => (
                <div className={styles.devStat}>
                  <h1>{label}</h1>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
          {Object.entries(project.desc).map(([key, value]) => (
            <div className={styles.devDesc}>
              <h1>{key}</h1>
              {Array.isArray(value) ? (
                <ul>
                  {value.map((bullet) => (
                    <li>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DevProject;
