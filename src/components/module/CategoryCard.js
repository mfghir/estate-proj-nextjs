import Link from "next/link";
import styles from "./CategoryCard.module.css";
import Image from "next/image";

const CategoryCard = ({ name, title }) => {
  return (
    <div className={styles.card}>
      <Link href="/">
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
      </Link>
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;
