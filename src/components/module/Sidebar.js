import Link from "next/link";
import styles from "./Sidebar.module.css";
import { HiFilter } from "react-icons/hi";
const Sidebar = () => {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];

  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      {queries.map((query) => (
        // eslint-disable-next-line react/jsx-key
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(query) },
          }}
        >
          {Object.values(query)}
        </Link>
      ))}

      <Link href="/buy-residential">همه</Link>
    </div>
  );
};

export default Sidebar;
