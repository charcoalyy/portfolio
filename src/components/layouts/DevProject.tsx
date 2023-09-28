import { useNavigate } from "react-router-dom";
import { ProjectType } from "../constants/dev";
import styles from "./styles.module.scss";
import Slider from "@organisms/Slider";

interface DevProjectProps {
  project: ProjectType;
}

const DevProject = ({ project }: DevProjectProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.devContainer}>
      <div className={styles.devCover}>
        <Slider dir="dev/thinkrf" images={["home", "filter", "login"]} />
        {/* <div className={styles.devLinks}>
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
        </div> */}
      </div>
      <div className={styles.devText}>
        <p onClick={() => navigate(-1)}>BACK</p>
        <div>
          <h1>{project.title}</h1>
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
  );
};

export default DevProject;
