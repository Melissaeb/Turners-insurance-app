import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

export default function FinanceAndInsurance() {
  return (
    <ul className={styles.menu}>
      <ListItem
        href="https://www.turners.co.nz/Cars/finance-insurance/"
        name="Finance Information"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/finance-insurance/car--personal-finance-application/"
        name="Apply Online for Finance"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/finance-insurance/Business-Finance-Application/"
        name="Apply Online for Business Finance"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/finance-insurance/car-insurance/"
        name="Car Insurance"
      />
    </ul>
  );
}
