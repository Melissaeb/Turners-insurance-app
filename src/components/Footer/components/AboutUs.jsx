import styles from "../Footer.module.css";
import ListItem from "./ListItem";

const pages = [
  {
    href: "https://www.turners.co.nz/Company/About-Us/Overview/",
    name: "Overview",
  },
  {
    href: "https://www.turners.co.nz/Company/Careers/turners-careers/",
    name: "Turners Careers",
  },
  {
    href: "https://www.turners.co.nz/Company/Terms-and-Conditions/terms-conditions/",
    name: "Terms and Conditions",
  },
  {
    href: "https://www.turners.co.nz/Company/Terms-and-Conditions/Privacy-Policy/",
    name: "Privacy Policy",
  },
  { href: "https://www.turners.co.nz/Turners-Live/", name: "Turners Live" },
  {
    href: "https://www.turners.co.nz/the-good-oil/",
    name: "The Good Oil Blog",
  },
  {
    href: "https://www.turners.co.nz/Company/email-alerts/email-alerts/",
    name: "Email Alerts",
  },
  {
    href: "https://www.turners.co.nz/Company/Contact-Us/",
    name: "Contact Us",
  },
];

export default function AboutUs() {
  return (
    <div className={styles.list}>
      <h3 className={styles.heading}>ABOUT US</h3>
      {pages.map((page, index) => (
        <ListItem key={index} href={page.href} name={page.name} />
      ))}
    </div>
  );
}
