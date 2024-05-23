import styles from "./BlueMenu.module.css";

// Icon imports
import searchIcon from "../../../assets/search.svg";
import downIcon from "../../../assets/down-arrow.svg";

// Component imports
import HowToBuy from "./dropdownMenus/HowToBuy";
import SellYourCar from "./dropdownMenus/SellYourCar";
import FinanceAndInsurance from "./dropdownMenus/FinanceAndInsurance";
import TurnersSubscription from "./dropdownMenus/TurnersSubscription";
import Auctions from "./dropdownMenus/Auctions";
import ServicesAndInfo from "./dropdownMenus/ServicesAndInfo";

const listItems = [
  { name: "How to Buy", component: HowToBuy },
  { name: "Sell your Car", component: SellYourCar },
  { name: "Finance & Insurance", component: FinanceAndInsurance },
  { name: "Turners Subscription", component: TurnersSubscription },
  { name: "Auctions", component: Auctions },
  { name: "Services & Info", component: ServicesAndInfo },
];

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

        {listItems.map((item, index) => (
          <li className={styles.menuItem} key={index}>
            {item.name}
            <img
              src={downIcon}
              alt="Downward arrow icon"
              className={styles.downIcon}
            />
            {<item.component />}
          </li>
        ))}
      </ul>
    </div>
  );
}
