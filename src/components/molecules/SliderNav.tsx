import styles from "./styles.module.scss";

interface SliderNavProps {
  count: number;
  setSlide: (slide: number) => void;
}

const SliderNav = ({ count, setSlide }: SliderNavProps) => {
  // TODO: style
  return (
    <div className={styles.sliderNav}>
      {[...Array(count).keys()].map((i) => (
        <div className={styles.slide} onClick={() => setSlide(i)}></div>
      ))}
    </div>
  );
};

export default SliderNav;
