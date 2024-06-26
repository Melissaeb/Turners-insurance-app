import styles from "./TopMenu.module.css";
import { useParams } from "react-router-dom";

const pages = [
  { href: "https://www.turners.co.nz/Cars/", name: "Cars" },
  {
    href: "https://www.turners.co.nz/car-subscription/",
    name: "Turners Subscription",
  },
  {
    href: "https://www.turners.co.nz/Trucks-Machinery/",
    name: "Trucks & Machinery",
  },
  {
    href: "https://www.turners.co.nz/Damaged-Vehicles/",
    name: "Damaged & End of Life",
  },
  {
    href: "https://www.turners.co.nz/motorcycles-scooters/",
    name: "Motorcycles",
  },
  { href: "https://www.turners.co.nz/General-Goods/", name: "General Goods" },
  {
    href: "https://www.turners.co.nz/buses-caravans/",
    name: "Buses, Caravans & Motorhomes",
  },
];

export default function TopMenu() {
  const params = useParams();
  return (
    <ul className={styles.headerTopMenu}>
      {pages.map((page, index) => (
        <li
          key={index}
          className={`${styles.listItemTopMenu} ${
            params.section === page.name ? styles.activeListItem : ""
          }`}
        >
          <a href={page.href} className={styles.topMenuAnchor}>
            {page.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
