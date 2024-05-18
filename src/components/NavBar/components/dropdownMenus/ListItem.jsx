import styles from "./DropdownMenu.module.css";

export default function ListItem(props) {
  return (
    <li className={styles.listItem}>
      <a href={props.href} className={styles.link}>
        {props.name}
      </a>
    </li>
  );
}
