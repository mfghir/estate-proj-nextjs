import AdminCard from "@/module/AdminCard";
import styles from "./AdminPage.module.css";

const AdminPage = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>آگهی در انتظار تاییدی وجود ندارد</p>
      )}

      {profiles.map((i) => (
        <AdminCard key={i._id} data={i} />
      ))}
    </div>
  );
};

export default AdminPage;
