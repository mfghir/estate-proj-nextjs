import DashboardCard from "@/module/DashboardCard";
import styles from "./MyProfilesPage.module.css";

const MyProfilesPage = ({ profiles }) => {
  console.log(profiles);
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}

      {profiles.map((i) => (
        <DashboardCard key={i._id} data={i} />
      ))}
    </div>
  );
};

export default MyProfilesPage;
