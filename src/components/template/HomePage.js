import CategoryCard from "@/module/CategoryCard";
import styles from "./HomePage.module.css";
import { FiCircle } from "react-icons/fi";

import { FaCity } from "react-icons/fa";
import { categories, cities, services } from "@/constants/strings";

const HomePage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.categories}>
        {Object.keys(categories).map((i) => (
          // eslint-disable-next-line react/jsx-key
          <CategoryCard title={categories[i]} name={i} />
        ))}
      </div>

      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
