import Image from "next/image";
import styles from "./page.module.css";
import { serverPath } from "../constant/constant";
import NavHeader from "../components/common/navigation.component";
import Page from "@/components/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <NavHeader /> */}
        <Page />
      </main>
    </div>
  );
}
