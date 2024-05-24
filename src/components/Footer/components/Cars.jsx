import styles from "../Footer.module.css";
const pages = [
  {
    href: "https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-old/",
    name: "How to Buy",
  },
  {
    href: "https://www.turners.co.nz/Cars/sell-your-car/",
    name: "Sell Your Car",
  },
  { href: "https://www.turners.co.nz/Finance/", name: "Finance & Insurance" },
  {
    href: "https://www.turners.co.nz/Cars/Auctions/",
    name: "Auctions & Events",
  },
  {
    href: "https://www.turners.co.nz/Cars/how-to-buy/Buyer-and-Seller-Fees/",
    name: "Buyer & Seller Fees",
  },
  {
    href: "https://www.turners.co.nz/Vehicle-Sale-Price-History/",
    name: "Vehicle Sale Price History Tool",
  },
  {
    href: "https://www.turners.co.nz/Cars/how-to-buy/Shipping-Costs/",
    name: "Shipping Costs",
  },
];

export default function Cars() {
  return (
    <div className={styles.list}>
      <h3 className={styles.heading}>CARS</h3>
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
