import styles from "./TopMenu.module.css";

export default function TopMenu() {
  return (
    <ul className={styles.headerTopMenu}>
      <li className={`${styles.listItemTopMenu} ${styles.topMenuAnchorActive}`}>
        {/* Active styling could be added to each item depending on URL */}
        <a
          name="Cars"
          href="https://www.turners.co.nz/Cars/"
          className={styles.topMenuAnchor}
        >
          Cars
        </a>
      </li>
      <li className={styles.listItemTopMenu}>
        <a
          name="Turners Subscription"
          href="https://www.turners.co.nz/car-subscription/"
          className={styles.topMenuAnchor}
        >
          Turners Subscription
        </a>
      </li>
      <li className={styles.listItemTopMenu}>
        <a
          name="Trucks & Machinery"
          href="https://www.turners.co.nz/Trucks-Machinery/"
          className={styles.topMenuAnchor}
        >
          Trucks & Machinery
        </a>
      </li>
      <li className={styles.listItemTopMenu}>
        <a
          name="Damaged & End of Life"
          href="https://www.turners.co.nz/Damaged-Vehicles/"
          className={styles.topMenuAnchor}
        >
          Damaged & End of Life
        </a>
      </li>
      <li className={styles.listItemTopMenu}>
        <a
          name="Motorcycles"
          href="https://www.turners.co.nz/motorcycles-scooters/"
          className={styles.topMenuAnchor}
        >
          Motorcycles
        </a>
      </li>
      <li className={styles.listItemTopMenu}>
        <a
          name="General Goods"
          href="https://www.turners.co.nz/General-Goods/"
          className={styles.topMenuAnchor}
        >
          General Goods
        </a>
      </li>
      <li className={styles.listItemTopMenu}>
        <a
          name="Buses, Caravans & Motorhomes"
          href="https://www.turners.co.nz/buses-caravans/"
          className={styles.topMenuAnchor}
        >
          Buses, Caravans & Motorhomes
        </a>
      </li>
    </ul>
  );
}
