import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

const pages = [
  {
    href: "https://www.turners.co.nz/moneyback-guarantee/",
    name: "5 Day Moneyback Guarantee",
  },
  {
    href: "https://www.turners.co.nz/Company/About-Us/Overview/",
    name: "Turners Group Overview",
  },
  {
    href: "https://www.turners.co.nz/Company/Terms-and-Conditions/terms-conditions/",
    name: "Terms & Conditions",
  },
  {
    href: "https://www.turners.co.nz/Cars/how-to-buy/Buyer-and-Seller-Fees/",
    name: "Buyers & sellers fees",
  },
  {
    href: "https://www.turners.co.nz/Cars/how-to-buy/Shipping-Costs/",
    name: "Shipping costs",
  },
  {
    href: "https://www.turners.co.nz/Company/Careers/turners-careers/",
    name: "Careers",
  },
  {
    href: "https://www.turners.co.nz/Consumer-Law-Information/",
    name: "Consumer Guarantees Act",
  },
  {
    href: "https://www.turners.co.nz/the-good-oil/",
    name: "The Good Oil Blog",
  },
  {
    href: "https://www.turners.co.nz/Company/email-alerts/email-alerts/",
    name: "Email Alerts",
  },
  {
    href: "https://www.turners.co.nz/Company/email-alerts/email-newsletters/",
    name: "Email Newsletters",
  },
  { href: "https://www.turners.co.nz/liam-lawson/", name: "Sponsorship" },
  {
    href: "https://www.turners.co.nz/change-of-ownership-application/",
    name: "Change of Ownership",
  },
  {
    href: "https://www.turners.co.nz/Cars/Dealers/car-dealers-auckland/lease-vehicles/",
    name: "Returning Lease Cars",
  },
  {
    href: "https://www.turners.co.nz/Cars/Sale/car-subscription_2/",
    name: "Turners Subscription",
  },
];

export default function ServicesAndInfo() {
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
