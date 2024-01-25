import Image from "next/image";
import styles from "./page.module.css";
import { Alert } from "@metrostar/comet-uswds";
import "./styles.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="usa-alert usa-alert--info">
        <div className="usa-alert__body">
          <h4 className="usa-alert__heading">Informative status</h4>
          <p className="usa-alert__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
    </main>
  );
}
