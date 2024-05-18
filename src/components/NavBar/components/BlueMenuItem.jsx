import styles from "./BlueMenu.module.css";

// Icon imports
import downIcon from "../../../assets/down-arrow.svg";

export default function BlueMenuItem(props) {
  const toggleMenu = (e) => {
    console.log(e);
  };

  return (
    <li className={styles.menuItem} onClick={toggleMenu}>
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
