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

  // TODO: set so that you can slide around visually to current
  // TODO: style

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderNavContainer}>
        <SliderNav count={images.length} setSlide={handleSlide} />
      </div>
      {images.map((image, i) => (
        <div key={i} className={styles.imageContainer}>
          <img src={`/${dir}/${image}.png`}></img>
        </div>
      ))}
    </div>
  );
};

export default Slider;
