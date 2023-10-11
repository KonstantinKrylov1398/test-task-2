import React, { useEffect, useState } from "react";
import { getAll } from "src/api/getAll";
import styles from "./listofconferences.css";
export function ListOfConferences() {
  const [list, setEditList] = useState([]);

  useEffect(() => {
    getAll().then((list) => setEditList(list));
  }, [setEditList]);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {list.map((item: any) => {
          return (
            <li className={styles.list__item} key={item.name}>
              <h4>{item.date_range}</h4>
              <img className={styles.list__img} src={item.logo} alt="" />
              <p className={styles.list__name}>{item.name}</p>
              <p className={styles.list__brief}>{item.brief}</p>
              <p className={styles.list__location}>{item.location}</p>
              <a href={item.uri} className={styles.list__uri}>
                {item.uri}
              </a>
              <div className={styles.list__block}>
                <button className={styles.list__button}>
                  <a href=""> Купить билет </a>
                </button>
                <a className={styles.list__link} href="#">
                  Подробнее
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
