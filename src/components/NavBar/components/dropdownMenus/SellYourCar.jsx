import styles from "./DropdownMenu.module.css";
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
