import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

const pages = [
  {
    href: "https://www.turners.co.nz/Cars/Used-Cars-for-Sale/",
    name: "View our cars",
  },
  {
    href: "https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-old/",
    name: "Ways to Buy",
  },
  {
    href: "https://www.turners.co.nz/Cars/how-to-buy/book-a-test-drive/",
    name: "Book a test drive",
  },
  {
    href: "https://www.turners.co.nz/Cars/information/how-to-pay/",
    name: "How to Pay",
  },
  {
    href: "https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-faqs/",
    name: "FAQs about Buying",
  },
  { href: "https://www.turners.co.nz/Turners-Live/", name: "Turners Live" },
  {
    href: "https://www.turners.co.nz/Cars/information/turners-tools/",
    name: "Website Tools",
  },
];

export default function HowToBuy() {
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
