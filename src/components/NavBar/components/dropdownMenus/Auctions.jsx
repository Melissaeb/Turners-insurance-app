import styles from "./DropdownMenu.module.css";

const pages = [
  {
    href: "https://www.turners.co.nz/Cars/Auctions/",
    name: "All car auctions",
  },
  {
    href: "https://www.turners.co.nz/auctions/whangarei/",
    name: "Whangarei",
  },
  {
    href: "https://www.turners.co.nz/auctions/otahuhu/",
    name: "Auckland",
  },
  {
    href: "https://www.turners.co.nz/auctions/hamilton/",
    name: "Hamilton",
  },
  {
    href: "https://www.turners.co.nz/auctions/tauranga/",
    name: "Tauranga",
  },
  {
    href: "https://www.turners.co.nz/auctions/napier/",
    name: "Napier",
  },
  {
    href: "https://www.turners.co.nz/auctions/new-plymouth/",
    name: "New Plymouth",
  },
  {
    href: "https://www.turners.co.nz/auctions/palmerston-north/",
    name: "Palmerston North",
  },
  {
    href: "https://www.turners.co.nz/auctions/porirua-cars/",
    name: "Porirua (Wellington)",
  },
  {
    href: "https://www.turners.co.nz/auctions/nelson/",
    name: "Nelson Cars",
  },
  {
    href: "https://www.turners.co.nz/auctions/christchurch-cars/",
    name: "Christchurch",
  },
  {
    href: "https://www.turners.co.nz/auctions/dunedin/",
    name: "Dunedin",
  },
  {
    href: "https://www.turners.co.nz/Cars/Used-Cars-for-Sale/?isdiscounted=true",
    name: "Discounted Cars",
  },
  {
    href: "https://www.turners.co.nz/Cars/Special-Events-Cars/classic-cars/",
    name: "Classic Cars",
  },
  {
    href: "https://www.turners.co.nz/Cars/Used-Cars-for-Sale/?sortorder=7&pagesize=24&pageno=1&iscertified=true",
    name: "Turners Certified Vehicles",
  },
  {
    href: "https://www.turners.co.nz/Cars/Special-Events-Cars/ex-lease/",
    name: "Ex-lease Cars",
  },
];
export default function Auctions() {
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
