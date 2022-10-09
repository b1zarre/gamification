import React from "react";
import avatar from "../../../assets/avatar.png";
import styles from "./UserProfile.module.css";
import { RightOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
export const UserProfile = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <Avatar src={avatar} size={78} />
      <span><b>{data.name}</b></span>
      <span style={{color: '#828282'}}>{data.division}</span>
      <div className={styles.balanceBlock}>Ваш баланс: <b>{data.balance} плюсов</b></div>
      <span className={styles.action}>Плюсы в рубли <RightOutlined /></span>
      <span className={styles.action}>Начисление Плюсов <RightOutlined /></span>
      <span className={styles.action}>Редактирование балансов <RightOutlined /></span>
      <span className={styles.action}>История транзакций <RightOutlined /></span>
    </div>
  );
};
