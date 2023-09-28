import { useState } from "react";
import styles from "./styles.module.scss";
import SliderNav from "@molecules/SliderNav";

interface SliderProps {
  dir: string;
  images: string[];
}

const Slider = ({ dir, images }: SliderProps) => {
  const [current, setCurrent] = useState(0);

  const handleSlide = (slide: number) => {
    setCurrent(slide);
  };

  console.log(current);

  // TODO: set so that you can slide around visually to current
  // TODO: style

  return (
    <div className={styles.sliderContainer}>
      <img src={`/${dir}/${images[current]}.png`}></img>
      {/* <img src={`/dev/thinkrf/home.png`}></img> */}
      <div className={styles.sliderNavContainer}>
        <SliderNav
          count={images.length}
          current={current}
          setSlide={handleSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
