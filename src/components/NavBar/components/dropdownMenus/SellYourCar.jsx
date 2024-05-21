import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

const pages = [
  {
    href: "https://www.turners.co.nz/Cars/sell-your-car/",
    name: "Ways to sell",
  },
  {
    href: "https://www.turners.co.nz/Cars/cash-now/",
    name: "Book an appraisal",
  },
  {
    href: "https://www.turners.co.nz/Cars/sell-your-car/selling-your-car-faqs/",
    name: "FAQ's about Selling",
  },
];

export default function SellYourCar() {
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
