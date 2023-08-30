"use client";

import { sp } from "@/utils/replaceNumber";
import styles from "./AdminCard.module.css";
import { Toaster, toast } from "react-hot-toast";

import { useRouter } from "next/navigation";

const AdminCard = ({ data: { _id, title, description, location, price } }) => {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "PATCH",
    });
    const result = await res.json();

    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishHandler}>انتشار</button>
      <Toaster />
    </div>
  );
};

export default AdminCard;
