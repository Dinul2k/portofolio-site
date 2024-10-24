import Image from "next/image";
import styles from "./page.module.css";
import Home from "./pages/Home";
import Header from "./components/Header";

export default function Page() {
  return (
    <div className={styles.page}>
     <Header/>
     <Home />
    </div>
  );
}
