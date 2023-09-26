import Tab from "@molecules/Tab";
import { thumbnails as devThumbnails } from "../constants/dev";
import { tabs } from "../constants/external";
import styles from "./styles.module.scss";
import { useMemo, useState } from "react";
import { about } from "../constants/about";
import Chips from "@molecules/Chips";

const Tabs = () => {
  const [active, setActive] = useState("DEVELOPMENT");

  const content = useMemo(() => {
    switch (active) {
      case "ABOUT":
        return (
          <div className={styles.aboutContainer}>
            <div className={styles.aboutText}>
              <p>{about.para1}</p>
              <p>{about.para2}</p>
              <Chips chips={about.professional} label="Professionally" />
              <Chips chips={about.community} label="Community" />
              <Chips chips={about.leisurely} label="Leisurely" />
            </div>
            <img src="/monke.png"></img>
          </div>
        );
      case "DEVELOPMENT":
        return devThumbnails.map((thumb) => (
          <Tab
            title={thumb.title}
            desc={thumb.desc}
            image={thumb.image}
            tags={thumb.tags}
            path={thumb.path}
          />
        ));

      case "DESIGN":
      default:
        return <p>Coming soon.</p>;
    }
  }, [active]);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            className={tab.label === active ? styles.tab__active : styles.tab}
            onClick={() => setActive(tab.label)}
          >
            <p>{tab.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.panel}>{content}</div>
    </div>
  );
};

export default Tabs;
