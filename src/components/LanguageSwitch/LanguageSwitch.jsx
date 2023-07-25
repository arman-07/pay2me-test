import React, { useState } from "react";
import cn from "classnames";

import { ReactComponent as RuIcon } from "./images/ru.svg";
import { ReactComponent as EnIcon } from "./images/en.svg";

import styles from "./LanguageSwitch.module.scss";

const LanguageSwitch = () => {
  const [popperOpen, setPopperOpen] = useState(false);

  const togglePopper = () => {
    setPopperOpen(!popperOpen);
  };

  return (
    <div className={styles.root}>
      <div className={styles.selected} onClick={togglePopper}>
        <RuIcon className={styles.icon} /> RU
      </div>
      {popperOpen && (
        <div className={styles.wrapper}>
          <div className={cn(styles.lang, styles.active)} onClick={() => {}}>
            <span className={cn(styles.iconWrapper)}>
              <RuIcon className={styles.icon} /> RU
            </span>
            Русский
          </div>
          <div className={cn(styles.lang)} onClick={() => {}}>
            <span className={cn(styles.iconWrapper)}>
              <EnIcon className={styles.icon} />
              EN
            </span>
            Английский
          </div>
        </div>
      )}
    </div>
  );
};

export { LanguageSwitch };
