import styles from "../Footer.module.css";

const pages = [
  { href: "https://www.turners.co.nz/Finance/", name: "Finance Homepage" },
  {
    href: "https://www.turners.co.nz/Finance/car--personal-finance/",
    name: "Car & Personal Finance",
  },
  { href: "https://www.turners.co.nz/Finance/", name: "Loan Calculator" },
  {
    href: "https://www.turners.co.nz/Finance/motor-vehicle-insurance/",
    name: "Car Insurance",
  },
  {
    href: "https://www.turners.co.nz/Finance/mechanical-breakdown-insurance/",
    name: "Mechanical Breakdown Insurance",
  },
  {
    href: "https://www.turners.co.nz/Finance/General-Insurance/",
    name: "General Insurances",
  },
  {
    href: "https://www.turners.co.nz/Trucks-Machinery/Finance/",
    name: "Trucks Finance",
  },
  {
    href: "https://www.turners.co.nz/Finance/legal-information/",
    name: "Financial Information",
  },
];

export default function FinanceAndInsurance() {
  return (
    <div className={styles.list}>
      <h3 className={styles.heading}>FINANCE & INSURANCE</h3>
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
