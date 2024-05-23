import styles from "./DropdownMenu.module.css";

const pages = [
  {
    href: "https://www.turners.co.nz/car-subscription/",
    name: "Find out more",
  },
];

export default function TurnersSubscription() {
  return (
    <ul className={styles.menu}>
      {pages.map((page, index) => (
        <li key={index} className={styles.listItem}>
          <a href={page.href} className={styles.link}>
            {page.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
