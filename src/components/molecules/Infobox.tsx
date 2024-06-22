import { useState } from "react"
import styles from "./styles.module.scss"

interface InfoboxProps {
  title: string
  tag: string
  points: {
    [key: string]: string
  }
}

const Infobox = ({ title, tag, points }: InfoboxProps) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={styles.infoboxContainer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={
          hover ? "public/dev/rectangle_hover.svg" : "public/dev/rectangle.svg"
        }
        className={styles.solidBox}
      ></img>

      <div className={hover ? styles.boxLabel__hover : styles.boxLabel}>
        <h1>{title}</h1>
        <h2>{tag}</h2>
      </div>

      <div className={hover ? styles.boxContent__hover : styles.boxContent}>
        {Object.entries(points).map(([key, value]) => {
          return (
            <div className={styles.bullet}>
              <div className={styles.bulletKey}>{key}</div>
              <div className={styles.bulletValue}>{value}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Infobox
