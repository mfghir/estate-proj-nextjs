import Link from "next/link";
import styles from "./Sidebar.module.css";
import { HiFilter } from "react-icons/hi";

import { categories } from "@/constants/strings";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      {Object.keys(categories).map((i) => (
        // eslint-disable-next-line react/jsx-key
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}

      <Link href="/buy-residential">همه</Link>
    </div>
  );
};

export default Sidebar;
