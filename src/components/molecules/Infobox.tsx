import { useMemo, useState } from "react"
import styles from "./styles.module.scss"

export interface InfoboxProps {
  title: string
  type: string
  tag: string
  points: {
    [key: string]: string
  }
  link?: string
}

const rectangle = "/dev/rectangle.svg"
const rectangleHover = "/dev/rectangle_hover.svg"
const ellipse = "/dev/ellipse.svg"
const ellipseHover = "/dev/ellipse_hover.svg"

const Infobox = ({ title, type, tag, points, link }: InfoboxProps) => {
  const [hover, setHover] = useState(false)

  const handleClick = () => {
    console.log("handling click....")
    console.log(link)
    if (link) {
      console.log("there's a link!")
      window.open(link, "_blank", "noopener,noreferrer")
    }
  }

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
      onClick={handleClick}
    >
      <img src={renderShape} className={styles.solidBox}></img>

      <div className={hover ? styles.boxLabel__hover : styles.boxLabel}>
        <h1>{title}</h1>
        <h2>{tag}</h2>
      </div>

      <div className={hover ? styles.boxContent__hover : styles.boxContent}>
        {Object.entries(points).map(([key, value]) => {
          return (
            <div className={styles.bullet} key={key}>
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
