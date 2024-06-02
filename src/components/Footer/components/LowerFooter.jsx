import styles from "./LowerFooter.module.css";
import homeIcon from "/homeIcon.svg";
import facebookIcon from "/facebookIcon.svg";
import letterIcon from "/letterIcon.svg";
import instagramIcon from "/instagramIcon.svg";

const socialDetails = [
  {
    icon: homeIcon,
    text: "Branch Details",
    href: "https://www.turners.co.nz/Company/Branches/",
  },
  {
    icon: facebookIcon,
    text: "Facebook",
    href: "http://www.facebook.com/turnersNZ",
  },
  {
    icon: letterIcon,
    text: "Newsletter",
    href: "https://www.turners.co.nz/Company/email-alerts/email-newsletters/",
  },
  {
    icon: letterIcon,
    text: "Email Alerts",
    href: "https://www.turners.co.nz/Company/email-alerts/email-alerts/",
  },
  {
    icon: instagramIcon,
    text: "Instagram",
    href: "https://www.instagram.com/turners_cars",
  },
];

export default function LowerFooter() {
  return (
    <div className={styles.lowerFooter}>
      <div className={styles.sections}>
        <div className={styles.copyRight}>
          <p>© 2022 Turners</p>
        </div>

        <ul className={styles.socialDetails}>
          {socialDetails.map((socialDetail) => (
            <li key={socialDetail.text} className={styles.socialListItem}>
              <a className={styles.socialLink} href={socialDetail.href}>
                <img src={socialDetail.icon} className={styles.icon} />
                <span className={styles.socialText}>{socialDetail.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
