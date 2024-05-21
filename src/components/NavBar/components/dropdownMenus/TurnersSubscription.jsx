import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

const pages = [
  {
    href: "https://www.turners.co.nz/car-subscription/",
    name: "Find out more",
  },
];

export default function TurnersSubscription() {
  return (
    <ul className={styles.menu}>
      {pages.map((page) => (
        <li className={styles.listItem}>
          <a href={page.href} className={styles.link}>
            {page.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
