import { Link, NavLink } from "react-router-dom";
import styles from "./DropdownMenu.module.css";

const pages = [
  {
    href: "https://www.turners.co.nz/Cars/finance-insurance/",
    name: "Finance Information",
  },
  {
    href: "https://www.turners.co.nz/Cars/finance-insurance/car--personal-finance-application/",
    name: "Apply Online for Finance",
  },
  {
    href: "https://www.turners.co.nz/Cars/finance-insurance/Business-Finance-Application/",
    name: "Apply Online for Business Finance",
  },
  {
    href: "http://localhost:5173/Cars/finance-insurance/car-insurance/",
    name: "Car Insurance",
  },
  {
    href: "http://localhost:5173/Cars/finance-insurance/car-insurance/autodetect",
    name: "AutoDetect",
  },
];

export default function FinanceAndInsurance() {
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
