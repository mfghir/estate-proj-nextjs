"use client";

import Link from "next/link";
import styles from "@/layout/Header.module.css";
import { FiLogIn } from "react-icons/fi";

import { FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  console.log(data);

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

      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
