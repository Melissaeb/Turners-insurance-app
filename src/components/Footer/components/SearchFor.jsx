import styles from "../Footer.module.css";
import ListItem from "./ListItem";

const pages = [
  { href: "https://www.turners.co.nz/Cars/Used-Cars-for-Sale/", name: "Cars" },
  {
    href: "https://www.turners.co.nz/Trucks-Machinery/Used-Trucks-and-Machinery-for-Sale/",
    name: "Trucks & Machinery",
  },
  {
    href: "https://www.turners.co.nz/Damaged-Vehicles/Damaged-Cars-for-Sale/",
    name: "Damaged & End of Life Cars",
  },
  {
    href: "https://www.turners.co.nz/boats-marine/Used-Boats-for-Sale/",
    name: "Boats & Marine",
  },
  {
    href: "https://www.turners.co.nz/motorcycles-scooters/Used-Motorbikes-for-Sale/",
    name: "Motorcycles & Scooters",
  },
  {
    href: "https://www.turners.co.nz/General-Goods/Search/",
    name: "General Goods",
  },
  {
    href: "https://www.turners.co.nz/buses-caravans/Used-Caravans-and-Motorhomes-for-Sale/",
    name: "Buses, Caravans & Motorhomes",
  },
  {
    href: "https://www.turners.co.nz/Company/Auction-Schedule/",
    name: "Turners Auction Schedule",
  },
];

export default function SearchFor() {
  return (
    <div className={styles.list}>
      <h3 className={styles.heading}>SEARCH FOR</h3>
      {pages.map((page, index) => (
        <li key={index} className={styles.listItem}>
          <a href={page.href} className={styles.anchorLink}>
            {page.name}
          </a>
        </li>
      ))}
    </div>
  );
}
