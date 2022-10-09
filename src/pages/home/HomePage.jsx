import React from "react";
import NewsCard from "./news-card";
import styles from "./HomePage.module.css";
import { EmployeesPage } from "../employees/EmployeesPage";
import { news } from "./newsItems";
import EmployeeCard from "../employees/employee-card";

export const HomePage = () => {
  //   const [news, setNews] = useState([]);
  //   useEffect(() => {
  //     fetchNews().then((res) => {
  //       res.json().then((data) => {
  //         setNews(() => data.content);
  //       });
  //     });
  //   }, []);
  return (
    <>
      <h2>Новости от наших HR</h2>
      <div className={styles.itemsWrapper}>
        {news.map((item, i) => (
          <NewsCard
            key={item.name + i}
            name={item.name}
            text={item.text}
            imageUri={item.imageUri}
            createdBy={item.createdBy}
            createdDate={new Date()}
          />
        ))}
      </div>
      <h2>Сотрудники</h2>
      <div className={styles.itemsWrapper}>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </>
  );
};
