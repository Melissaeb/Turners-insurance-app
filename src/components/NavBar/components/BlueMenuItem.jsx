import styles from "./BlueMenu.module.css";

// Icon imports
import downIcon from "../../../assets/down-arrow.svg";

export default function BlueMenuItem(props) {

  return (
    <li className={styles.menuItem}>
      {props.name}
      <img
        src={downIcon}
        alt="Downward arrow icon"
        className={styles.downIcon}
      />
      {props.children}
    </li>
  );
}
