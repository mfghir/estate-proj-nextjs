import styles from "./DetailsPage.module.css";
import { GiOfficeChair } from "react-icons/gi";
import { BiCalendarCheck } from "react-icons/bi";

import { BiStore } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

import { HiLocationMarker } from "react-icons/hi";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";

const DetailsPage = () => {
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiLocationMarker />
          {data.location}
        </span>
        <Title>توضیحات</Title>
        <p>{data.description}</p>

        <Title>امکانات رفاهی</Title>
        <ItemList data={data.amenities} />

        <Title>قوانین</Title>
        <ItemList data={data.rules} />
      </div>
      <div className={styles.sidebar}></div>
    </div>
  );
};

export default DetailsPage;
