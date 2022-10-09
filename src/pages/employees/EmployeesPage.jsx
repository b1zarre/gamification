import React from "react";
import EmployeeCard from "./employee-card";
import styles from "./EmployeesPage.module.css";
export const EmployeesPage = () => {
  return (
    <div style={{height: 'calc(100vh - 104px)'}}>
      <h2>Сотрудники</h2>
      <div className={styles.wrapper}>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
};
