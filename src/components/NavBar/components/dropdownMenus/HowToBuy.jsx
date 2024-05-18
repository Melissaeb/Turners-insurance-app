import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

export default function HowToBuy() {
  return (
    <ul className={styles.menu}>
      <ListItem
        href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/"
        name="View our cars"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-old/"
        name="Ways to Buy"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/how-to-buy/book-a-test-drive/"
        name="Book a test drive"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/information/how-to-pay/"
        name="How to Pay"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-faqs/"
        name="FAQs about Buying"
      />
      <ListItem
        href="https://www.turners.co.nz/Turners-Live/"
        name="Turners Live"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/information/turners-tools/"
        name="Website Tools"
      />
    </ul>
  );
}
