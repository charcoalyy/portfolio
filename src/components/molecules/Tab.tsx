import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface TabProps {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  path: string;
}

const Tab = ({ title, desc, image, path }: TabProps) => {
  return (
    <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.tab}>
        <img src={`/${image}.png`}></img>
        <div className={styles.tabText}>
          <h1>{title}</h1>
          <h2>{desc}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Tab;
