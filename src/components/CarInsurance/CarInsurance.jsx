import { useOutlet } from "react-router-dom";
import styles from "./CarInsurance.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import NavButtons from "./components/NavButtons";

export default function CarInsurance() {
  const outlet = useOutlet();
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>{outlet || <NavButtons />}</div>
      <Footer />
    </div>
  );
}
