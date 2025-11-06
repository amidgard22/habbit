import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import "reset-css";
import "material-symbols";

export const AppLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <div className={`${styles.logoImg} material-symbols-outlined`}>
          check_circle
        </div>
        <h1 className={styles.logoName}>HabitFlow</h1>
      </div>
      <div className={styles.formWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
