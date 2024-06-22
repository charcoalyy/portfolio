import styles from "./styles.module.scss"
import About from "@organisms/About"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.halfSection}>
          <About />
        </section>
        <section className={styles.halfSection}>{/* <Tabs /> */}</section>
      </div>
    </div>
  )
}

export default Home
