import styles from "./AdminPage.module.css";

const AdminPage = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>آگهی در انتظار تاییدی وجود ندارد</p>
      )}

      {profiles.map((i) => (
        <p>{i.title}</p>
      ))}
    </div>
  );
};

export default AdminPage;
