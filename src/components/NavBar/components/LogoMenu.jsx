import styles from "./LogoMenu.module.css";

import turnersCarLogo from "/turnerscars-logo.png";
import personIcon from "../../../assets/person.svg";
import phoneIcon from "../../../assets/phone.svg";
import locationIcon from "../../../assets/location.svg";
import searchIcon from "../../../assets/search.svg";
import hamburgerIcon from "../../../assets/hamburger.svg";

export default function LogoMenu() {
  return (
    <div className={styles.logoMenuBar}>
      <div className={styles.logoMenuBarChildren}>
        <a href="https://www.turners.co.nz/Cars/" className={styles.homeLink}>
          <img
            src={turnersCarLogo}
            alt="Turners Cars Logo"
            className={styles.logo}
          />
        </a>

        {/* Menu items on right hand side of screen */}
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a
              href="https://www.turners.co.nz/Login/"
              className={`${styles.loginLink} ${styles.menuLink}`}
            >
              <img src={personIcon} alt="Person Icon" className={styles.icon} />
              <span className={styles.buttonText}>
                LOGIN <span className={styles.or}>OR </span>REGISTER
              </span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href="tel:0800887637" className={styles.menuLink}>
              <img src={phoneIcon} alt="Phone icon" className={styles.icon} />
              <span className={styles.buttonText}>0800 887 637</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a
              href="https://www.turners.co.nz/Company/Branches/"
              className={styles.menuLink}
            >
              <img src={searchIcon} alt="Search icon" className={styles.icon} />
            </a>
          </li>

          <li className={styles.menuItem}>
            <a className={styles.menuLink}>
              <img
                src={hamburgerIcon}
                alt="Menu icon"
                className={styles.icon}
              />
            </a>
          </li>

          <li className={styles.menuItem}>
            <a
              href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/"
              className={styles.menuLink}
            >
              <img
                src={locationIcon}
                alt="Location icon"
                className={styles.icon}
              />
              <span className={styles.buttonText}>Find Us</span>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a
              href="https://www.turners.co.nz/Cars/Special-Events-Cars/chinese-speaking-contacts/"
              className={`${styles.chineseLink} ${styles.menuLink}`}
            >
              <span className={styles.buttonText}>中文</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
