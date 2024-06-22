import { useMemo, useState } from "react"
import styles from "./styles.module.scss"

export interface InfoboxProps {
  title: string
  type: string
  tag: string
  points: {
    [key: string]: string
  }
}

const rectangle = "/dev/rectangle.svg"
const rectangleHover = "/dev/rectangle_hover.svg"
const ellipse = "/dev/ellipse.svg"
const ellipseHover = "/dev/ellipse_hover.svg"

const Infobox = ({ title, type, tag, points }: InfoboxProps) => {
  const [hover, setHover] = useState(false)

  const renderShape = useMemo(() => {
    switch (type) {
      case "project":
        return hover ? ellipseHover : ellipse
      case "internship":
      default:
        return hover ? rectangleHover : rectangle
    }
  }, [hover, type])

  return (
    <div
      className={styles.infoboxContainer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={renderShape} className={styles.solidBox}></img>

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
