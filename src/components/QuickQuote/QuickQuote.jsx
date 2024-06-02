import styles from "./QuickQuote.module.css";

export default function QuickQuote() {
  return (
    <div className={styles.container}>
      <ul className={styles.breadcrumbs}>
        <li className={styles.breadcrumbsItem}>
          <a className={styles.breadcrumbLink} href="/">
            Home
          </a>
          &raquo;
        </li>
        <li className={styles.breadcrumbsItem}>
          <a
            className={styles.breadcrumbLink}
            href="/Cars/finance-insurance/car-insurance/"
          >
            Car Insurance
          </a>
          &raquo;
        </li>
        <li className={styles.breadcrumbsItem}>
          <a
            className={styles.breadcrumbLink}
            href="/Cars/finance-insurance/car-insurance/quick-quote/"
          >
            Quick Quote
          </a>
        </li>
      </ul>
      QuickQuote
    </div>
  );
}
