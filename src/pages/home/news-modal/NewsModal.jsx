import React from "react";
import { Modal } from "antd";
import styles from "./NewsModal.module.css";
export const NewsModal = ({ modalOpen, closeModal, data }) => {
  console.log("render");
  return (
    <Modal
      bodyStyle={{ padding: "0" }}
      open={modalOpen}
      keyboard
      centered
      onCancel={closeModal}
      footer={null}
    >
      <img style={{ width: "100%" }} src={data.imageUri} alt="" />
      <div className={styles.wrapper}>
        <h1>
          <b>{data.name}</b>
        </h1>
        <p>{data.text}</p>
      </div>
    </Modal>
  );
};
