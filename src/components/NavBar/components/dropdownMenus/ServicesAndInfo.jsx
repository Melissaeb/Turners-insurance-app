import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

export default function ServicesAndInfo() {
  return (
    <ul className={styles.menu}>
      <ListItem
        href="https://www.turners.co.nz/moneyback-guarantee/"
        name="5 Day Moneyback Guarantee"
      />
      <ListItem
        href="https://www.turners.co.nz/Company/About-Us/Overview/"
        name="Turners Group Overview"
      />
      <ListItem
        href="https://www.turners.co.nz/Company/Terms-and-Conditions/terms-conditions/"
        name="Terms & Conditions"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/how-to-buy/Buyer-and-Seller-Fees/"
        name="Buyers & sellers fees"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/how-to-buy/Shipping-Costs/"
        name="Shipping costs"
      />
      <ListItem
        href="https://www.turners.co.nz/Company/Careers/turners-careers/"
        name="Careers"
      />
      <ListItem
        href="https://www.turners.co.nz/Consumer-Law-Information/"
        name="Consumer Guarantees Act"
      />
      <ListItem
        href="https://www.turners.co.nz/the-good-oil/"
        name="The Good Oil Blog"
      />
      <ListItem
        href="https://www.turners.co.nz/Company/email-alerts/email-alerts/"
        name="Email Alerts"
      />
      <ListItem
        href="https://www.turners.co.nz/Company/email-alerts/email-newsletters/"
        name="Email Newsletters"
      />
      <ListItem
        href="https://www.turners.co.nz/liam-lawson/"
        name="Sponsorship"
      />
      <ListItem
        href="https://www.turners.co.nz/change-of-ownership-application/"
        name="Change of Ownership"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/Dealers/car-dealers-auckland/lease-vehicles/"
        name="Returning Lease Cars"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/Sale/car-subscription_2/"
        name="Turners Subscription"
      />
    </ul>
  );
}
