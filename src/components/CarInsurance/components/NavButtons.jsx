import styles from "./NavButtons.module.css";

const buttons = [
  {
    name: "AutoDetect",
    link: "/Cars/finance-insurance/car-insurance/autodetect",
    text: "Upload a photo of a vehicle, and our cutting-edge technology will analyse it for you. Receive personalized insurance quotes based on similar vehicles in our database.",
    icon: "/src/assets/search.svg",
    alt: "search icon",
  },
  {
    name: "Quick Quote",
    link: "/Cars/finance-insurance/car-insurance/quick-quote",
    text: "Get instant insurance quotes tailored to your car details and crash history. Quick Quote simplifies the process, delivering competitive rates in seconds.",
    icon: "/src/assets/dollar.svg",
    alt: "dollar icon",
  },
];

export default function NavButtons() {
  return (
    <div className={styles.cards}>
      <ul className={styles.breadcrumbs}>
        <li className={styles.breadcrumbsItem}>
          <a className={styles.breadcrumbLink} href="/">
            Home
          </a>
          &raquo;
        </li>
        <li className={styles.breadcrumbsItem}>
          <a className={styles.breadcrumbLink} href="/">
            Car Insurance
          </a>
        </li>
      </ul>

      {buttons.map((button) => (
        <div className={styles.card}>
          <img className={styles.icon} src={button.icon} alt={button.alt} />
          <h3 className={styles.name}>{button.name}</h3>
          <p className={styles.text}>{button.text}</p>
          <a className={styles.callToAction} href={button.link}>
            CHECK IT OUT
          </a>
        </div>
      ))}
    </div>
  );
}
