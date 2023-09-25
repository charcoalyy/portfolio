import Tabs from "@organisms/Tabs";
import { socials } from "../constants/external";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.halfContainer}>
        <div className={styles.halfImage}>
          <img src="/monke.png"></img>
        </div>
        <div className={styles.halfText}>
          <h1>alina</h1>
          <h2>颖思</h2>
          {socials.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div>
        <Tabs />
      </div>
    </div>
  );
};

export default Home;
