import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

export default function TurnersSubscription() {
  return (
    <ul className={styles.menu}>
      <ListItem
        href="https://www.turners.co.nz/car-subscription/"
        name="Find out more"
      />
    </ul>
  );
}
