import styles from "./styles.module.scss";

interface ChipsProps {
  label: string;
  chips: string[];
}

const Chips = ({ label, chips }: ChipsProps) => {
  return (
    <div className={styles.chipsContainer}>
      <label className={styles.chipsLabel}>{label}</label>
      <div className={styles.chips}>
        {chips.map((chip) => (
          <div className={styles.chip}>{chip}</div>
        ))}
      </div>
    </div>
  );
};

export default Chips;
