import React, { useState } from "react";
import styles from "./NewsCard.module.css";
import avatar from "../../../assets/avatar.png";
import dayjs from "dayjs";
import NewsModal from "../news-modal";

export const NewsCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div onClick={() => setModalOpen(true)} className={styles.card}>
        <NewsModal data={props} modalOpen={modalOpen} closeModal={(e) => {e.stopPropagation(); setModalOpen(false)}} />
      <div
        style={{ backgroundImage: `url(${props.imageUri})` }}
        className={styles.cardHeader}
      ></div>
      <div className={styles.cardFooter}>
        <span>
          <b>{props.name}</b>
        </span>
        <span>{props.text}</span>
        <div className={styles.newsInfo}>
          <img src={avatar} alt="" />
          <span className={styles.authorName}>{props.createdBy}</span>
          <span className={styles.newsDate}>
            {dayjs(props.createdDate).format("DD.MM.YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};
