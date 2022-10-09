import React from "react";
import styles from "./EmployeeCard.module.css";
import avatar from "../../../assets/avatar.png";

export const EmployeeCard = () => {
  return (
    <div className={styles.card}>
      <img src={avatar} alt="" />
      <span><b>Константин Константинов</b></span>
      <span style={{color: '#828282'}}>Аналитик</span>
      <span style={{color: '#bdbdbd'}}>ДАКиПР, СМБ, Спецпродукты</span>
    </div>
  );
};
