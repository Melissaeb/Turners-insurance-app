import styles from "../Footer.module.css";

export default function ListItem(props) {
  return (
    <li className={styles.listItem}>
      <a href={props.href} className={styles.anchorLink}>
        {props.name}
      </a>
    </li>
  );
}
