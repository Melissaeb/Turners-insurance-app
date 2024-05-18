import styles from "./DropdownMenu.module.css";
import ListItem from "./ListItem";

export default function Auctions() {
  return (
    <ul className={styles.menu}>
      <ListItem
        href="https://www.turners.co.nz/Cars/Auctions/"
        name="All car auctions"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/whangarei/"
        name="Whangarei"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/otahuhu/"
        name="Auckland"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/hamilton/"
        name="Hamilton"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/tauranga/"
        name="Tauranga"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/napier/"
        name="Napier"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/new-plymouth/"
        name="New Plymouth"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/palmerston-north/"
        name="Palmerston North"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/porirua-cars/"
        name="Porirua (Wellington)"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/nelson/"
        name="Nelson Cars"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/christchurch-cars/"
        name="Christchurch"
      />
      <ListItem
        href="https://www.turners.co.nz/auctions/dunedin/"
        name="Dunedin"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/?isdiscounted=true"
        name="Discounted Cars"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/Special-Events-Cars/classic-cars/"
        name="Classic Cars"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/?sortorder=7&pagesize=24&pageno=1&iscertified=true"
        name="Turners Certified Vehicles"
      />
      <ListItem
        href="https://www.turners.co.nz/Cars/Special-Events-Cars/ex-lease/"
        name="Ex-lease Cars"
      />
    </ul>
  );
}
