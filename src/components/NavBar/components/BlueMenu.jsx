import styles from "./BlueMenu.module.css";

// Icon imports
import searchIcon from "../../../assets/search.svg";

// Component imports
import HowToBuy from "./dropdownMenus/HowToBuy";
import SellYourCar from "./dropdownMenus/SellYourCar";
import FinanceAndInsurance from "./dropdownMenus/FinanceAndInsurance";
import TurnersSubscription from "./dropdownMenus/TurnersSubscription";
import Auctions from "./dropdownMenus/Auctions";
import ServicesAndInfo from "./dropdownMenus/ServicesAndInfo";
import BlueMenuItem from "./BlueMenuItem";

export default function BlueMenu() {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <img
            src={searchIcon}
            alt="Magnifying glass icon"
            className={styles.searchIcon}
          />
          <a
            href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/"
            className={styles.findCarLink}
          >
            Find a Car
          </a>
        </li>

        <BlueMenuItem name="How to Buy">
          <HowToBuy />
        </BlueMenuItem>

        <BlueMenuItem name="Sell your Car">
          <SellYourCar />
        </BlueMenuItem>

        <BlueMenuItem name="Finance & Insurance">
          <FinanceAndInsurance />
        </BlueMenuItem>

        <BlueMenuItem name="Turners Subscription">
          <TurnersSubscription />
        </BlueMenuItem>

        <BlueMenuItem name="Auctions">
          <Auctions />
        </BlueMenuItem>

        <BlueMenuItem name="Services & Info">
          <ServicesAndInfo />
        </BlueMenuItem>
      </ul>
    </div>
  );
}
