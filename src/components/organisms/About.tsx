import Chips from "@molecules/Chips";
import { about } from "../constants/about";
import styles from "./styles.module.scss";
import { socials } from "../constants/external";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h1>alina</h1>
        <h2>颖思</h2>
      </div>
      <p>{about.bio}</p>
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
      <div className={styles.chips}>
        <Chips chips={about.professional} label="Professionally" />
        <Chips chips={about.community} label="Community" />
        <Chips chips={about.leisurely} label="Leisurely" />
      </div>
    </div>
  );
};

export default About;
