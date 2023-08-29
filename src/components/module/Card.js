import Link from "next/link";
import styles from "./Card.module.css";
import { GiOfficeChair } from "react-icons/gi";

import { BiStore } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";

const Card = ({ data: { _id, category, title, location, price } }) => {
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
};

export default Card;
