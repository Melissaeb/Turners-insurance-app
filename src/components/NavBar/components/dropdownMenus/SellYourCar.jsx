import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

export default function SellYourCar() {
  return (
    <ul className={styles.menu}>
      <ListItem
        href="https://www.turners.co.nz/Cars/sell-your-car/"
        name="Ways to sell"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/cash-now/"
        name="Book an appraisal"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/sell-your-car/selling-your-car-faqs/"
        name="FAQ's about Selling"
      />
    </ul>
  );
}
