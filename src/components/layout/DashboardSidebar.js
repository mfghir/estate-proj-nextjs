import { getServerSession } from "next-auth";
import styles from "./DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

const DashboardSidebar = async ({ children }) => {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>{session?.user.email}</p>
        <span></span>

        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/شیی">ثبت آگهی</Link>
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSidebar;
