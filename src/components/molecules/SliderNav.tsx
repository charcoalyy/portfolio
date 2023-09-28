import styles from "./styles.module.scss";

interface SliderNavProps {
  count: number;
  current: number;
  setSlide: (slide: number) => void;
}

const SliderNav = ({ count, current, setSlide }: SliderNavProps) => {
  return (
    <div className={styles.sliderNav}>
      {[...Array(count).keys()].map((i) => (
        <div
          className={current === i ? styles.slide__active : styles.slide}
          onClick={() => {
            setSlide(i);
            console.log("set slide");
          }}
        ></div>
      ))}
    </div>
  );
};

export default SliderNav;
