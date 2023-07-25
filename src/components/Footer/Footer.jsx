/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";

import styles from "./Footer.module.scss";

import { ReactComponent as HelpIcon } from "./images/help.svg";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.help}>
        Нужна помощь?
        <div className={styles.icon}>
          <HelpIcon className={styles.helpIcon} />
        </div>
      </div>
      <div className={styles.contacts}>
        <p className={styles.copyright}>© PAY2ME 2023</p>
        <p className={styles.adress}>
          ООО «Куарми» ИНН 7743364603
          <br />
          Юридический адрес 125445, Г. Москва, Ул. Беломорская, Д. 11, К. 1/290
        </p>
        <div className={styles.wrapper}>
          <div className={styles.linkWrapper}>
            <a href="#" className={styles.link}>
              Политика конфиденциальности
            </a>
            <a href="#" className={styles.link}>
              Пользовательское соглашение
            </a>
          </div>
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
};

export { Footer };
