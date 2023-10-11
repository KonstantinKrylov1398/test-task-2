import React from "react";
import styles from "./footerpage.css";
import Year from "../../../assets/2022.svg";
export function FooterPage() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__blockone}>
          <div className={styles.blockone}>
            <div className={styles.blockone__header}>
              По любым вопросам обращайтесь:
            </div>
            <p>
              Бухгалтерия и вопросы оплаты: support@ontico.ru +7(495) 646-07-68,
              @ontico_support
            </p>
            <div className={styles.blockone__header}>
              Программный комитет <p>: speakers@ontico.ru</p>
            </div>

            <div className={styles.blockone__header}>
              Организационный комитет <pre></pre>
              <p> : organization@ontico.ru</p>
            </div>

            <p>
              125040, Москва, Нижняя ул., д. 14, стр. 7, подъезд 1, оф. 16 ООО
              «Конференции Олега Бунина»
            </p>
          </div>
          <Year className={styles.footer__img} />
        </div>
        <div className={styles.footer__blocktwo}>
          <div className={styles.blocktwo__year}>2022:</div>
          <div>
            <ul>
              <li>январь</li>
              <li>февраль</li>
              <li>март</li>
              <li>апрель</li>
              <li>май</li>
              <li>июнь</li>
              <li>июль</li>
              <li>август</li>
              <li>сентябрь</li>
              <li>октябрь</li>
              <li>ноябрь</li>
              <li>декабрь</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
