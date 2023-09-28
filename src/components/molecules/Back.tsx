import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.backButton} onClick={() => navigate(-1)}>
      <img src="/back.svg"></img>
    </div>
  );
};

export default Back;
