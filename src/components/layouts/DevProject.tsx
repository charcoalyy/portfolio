import styles from "./styles.module.scss";

const DevProject = () => {
  return (
    <div className={styles.devContainer}>
      <div className={styles.devCover}>
        <p>BACK</p>
        <div>
          <h1>Title</h1>
          <button>Live</button>
          <button>Code</button>
          <div className={styles.devInfo}>
            this is where info would go, map it out in molecules
          </div>
        </div>
      </div>
      <div className={styles.devText}>
        <div>this is where info would go, map it out in molecules</div>
      </div>
    </div>
  );
};

export default DevProject;
