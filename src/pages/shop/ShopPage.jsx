import React from "react";
import ProductCard from "./product-card";
import { partnersItems, subscriptionItems } from "./shopItems";
import styles from "./ShopPage.module.css";

export const ShopPage = () => {
  return (
    <div style={{height: 'calc(100vh - 104px)',}}>
      <h2>Магазин</h2>
      <h3>Абонементы</h3>
      <div className={styles.itemsWrapper}>
        {subscriptionItems.map((item, i)=> <ProductCard {...item} key={item.name + i} />)}
      </div>
      <h3>Курсы от партнеров</h3>
      <div className={styles.itemsWrapper}>
      {partnersItems.map((item, i)=> <ProductCard {...item} key={item.name + i} />)}
      </div>
    </div>
  );
};
