import LogoMenu from "./LogoMenu";
import styles from "./NavBar.module.css";
import TopMenu from "./TopMenu";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <TopMenu />
      <LogoMenu />
    </div>
  );
}
