import styles from "../style.module.css";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <Image
          src="/logo.png"
          className={styles.logo}
          width={40}
          height={50}
          alt="logo"
        />
        <ul className={styles.navbarList}>
          <li className={styles.navbarListItems}>
            <Link className={styles.navbarLink} href="/">
              Home
            </Link>
            <div className={styles.underline}></div>
          </li>
          <li className={styles.navbarListItems}>
            <Link className={styles.navbarLink} href="/">
              Rules & Guidelines
            </Link>
          </li>
          <li className={styles.navbarListItems}>
            <Link className={styles.navbarLink} href="/">
              Submission
            </Link>
          </li>
          <li className={styles.navbarListItems}>
            <Link className={styles.navbarLink} href="/">
              Judging Panel
            </Link>
          </li>
          <li className={styles.navbarListItems}>
            <Link className={styles.navbarLink} href="/">
              Gallery
            </Link>
          </li>
          <li className={styles.navbarListItems}>
            <Link className={styles.navbarLink} href="/">
              Winners
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
