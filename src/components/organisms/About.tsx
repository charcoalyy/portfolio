import { about } from "../constants/about"
import styles from "./styles.module.scss"
import { socials } from "../constants/external"

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h1>alina</h1>
        <h2>颖思</h2>
      </div>
      <p>{about.bio}</p>
      <p>{about.current}</p>
      <div className={styles.socials}>
        {socials.map((link) => (
          <a
            key={link.label}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>
  )
}

export default About
