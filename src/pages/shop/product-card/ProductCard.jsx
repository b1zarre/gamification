import React, { useState } from "react";
import { Button, Tooltip } from "antd";
import styles from "./ProductCard.module.css";
import {ReactComponent as PlusSign} from "../../../assets/plus.svg";
import info from "../../../assets/info.svg"
import { buyItem } from "../../../storage/localStorage";

export const ProductCard = ({ image, name, description, price }) => {
  const [isProcessing, setIsProcessing] = useState(false);
    const buy = (price) => {
        setIsProcessing(() => true)
        if (price <= JSON.parse(localStorage.getItem('userData')).balance) {
            buyItem(price);
        }
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        
    }
  const buyBtn = (
    <Button
      className={styles.buyBtn}
      onClick={() => buy(price)}
      type="primary"
    >
      <b>Купить</b> {<PlusSign className={styles.plusSign} />}{" "}
      {price}
    </Button>
  );
  const processingBtn = (
    <Button className={styles.processingBtn} type="primary" disabled>
      <b>В обработке</b>
    </Button>
  );

  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <span>
        <b>{name}</b>
      </span>
      <span style={{color: '#828282'}}>{description}</span>
      {!isProcessing ? buyBtn : (
        <div className={styles.processing}>
            {processingBtn}
            <Tooltip title="Письмо с деталями заказа отправлено на вашу корпоративную почту"><button className={styles.infoBtn}> <img src={info} alt="" /></button></Tooltip>
        </div>
      )}
    </div>
  );
};
