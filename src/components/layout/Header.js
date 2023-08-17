import Link from "next/link";
import styles from "./Header.module.css";
import { fiLogin } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه ااصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>

      <div className={styles.login}>
        <Link href="/signin">
          <fiLogin />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
