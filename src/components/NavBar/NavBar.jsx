import styles from "./NavBar.module.css";

// importing components
import TopMenu from "./components/TopMenu";
import LogoMenu from "./components/LogoMenu";
import BlueMenu from "./components/BlueMenu";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <TopMenu />
      <LogoMenu />
      <BlueMenu />
    </div>
  );
}
