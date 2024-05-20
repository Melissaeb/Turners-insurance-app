import styles from "./Footer.module.css";
import AboutUs from "./components/AboutUs";
import Cars from "./components/Cars";
import FinanceAndInsurance from "./components/FinanceAndInsurance";
import SearchFor from "./components/SearchFor";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.upperFooter}>
        <div className={styles.lists}>
          <Cars />
          <FinanceAndInsurance />
          <SearchFor />
          <AboutUs />
        </div>
      </div>
    </div>
  );
}
