/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import styles from "./Login.module.scss";

import RightSideImage from "./images/right-side.png";
import { Button } from "../../components/Button/Button";

import { ReactComponent as ArrowLeft } from "./images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "./images/arrow-right.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
import { Input } from "../../components/Input/Input";
import { InputPassword } from "../../components/InputPassword/InputPassword";
import { Footer } from "../../components/Footer/Footer";
import { hidePhoneNumber } from "./tools/hidePhoneNumber";
import cn from "classnames";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [passwordForm, setPasswordForm] = useState(false);
  const [errorForm, setErrorForm] = useState(false);

  useEffect(() => {
    const isEmail = /\S+@\S+\.\S+/.test(login);
    const isPhone = /^\+[0-9]{1,3}\s?[0-9]{1,14}$/.test(login);

    setIsPhoneNumber(isPhone);
    setIsValid(isEmail || isPhone);
  }, [login]);

  return (
    <div className={styles.root}>
      <div className={styles.leftSide}>
        <header>
          <Button
            className={styles.back}
            variant="secondary"
            icon={<ArrowLeft />}
            onClick={() => {
              if (errorForm) {
                setErrorForm(false);
                setPasswordForm(true);
                return;
              }

              if (passwordForm) {
                setPasswordForm(false);
              }
            }}
          >
            Назад
          </Button>
          <Logo
            style={{ marginTop: errorForm ? "120px" : "150px" }}
            className={cn(styles.logo, { [styles.errorFormLogo]: errorForm })}
          />
        </header>
        <div className={styles.main}>
          <form>
            {!passwordForm && (
              <>
                <h2 className={styles.title}>Войти в личный кабинет</h2>
                <p className={styles.subtitle}>
                  Войдите, чтобы начать использовать платёжные решения PAY2ME.
                </p>
                <div className={styles.wrapper}>
                  <Input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Введите номер телефона или электронную почту"
                  />
                  <Button
                    icon={<ArrowRight />}
                    disabled={!isValid}
                    onClick={() => setPasswordForm(true)}
                  >
                    Далее
                  </Button>
                </div>
              </>
            )}

            {passwordForm && !errorForm && (
              <>
                <h2 className={styles.title}>Здравствуйте, Вадим!</h2>
                {isPhoneNumber ? (
                  <p className={styles.subtitle}>
                    Введите пароль для номера {hidePhoneNumber(login)}
                  </p>
                ) : (
                  <p className={styles.subtitle}>
                    Введите пароль для почты {login}
                  </p>
                )}
                <div className={styles.wrapper}>
                  <InputPassword
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль"
                  />
                  <Button
                    icon={<ArrowRight />}
                    disabled={!isValid}
                    onClick={() => setErrorForm(true)}
                  >
                    Далее
                  </Button>
                </div>
              </>
            )}

            {errorForm && (
              <>
                <h2 className={styles.title}>Здравствуйте, Вадим!</h2>
                {isPhoneNumber ? (
                  <p className={styles.subtitle}>
                    Введите пароль для номера {hidePhoneNumber(login)}
                  </p>
                ) : (
                  <p className={styles.subtitle}>
                    Введите пароль для почты {login}
                  </p>
                )}
                <div className={styles.errorWrapper}>
                  <Input
                    wrapperClassName={styles.errorInput}
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    errorText={
                      "Возможно, электронная почта введена некорректно. Попробуйте ещё раз."
                    }
                    placeholder="Введите номер телефона или электронную почту"
                  />
                  <InputPassword
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    errorText={
                      "Возможно, пароль введён некорректно. Попробуйте ещё раз."
                    }
                    placeholder="Введите номер телефона или электронную почту"
                  />
                  <Button
                    className={styles.errorBtn}
                    disabled
                    onClick={() => {}}
                  >
                    Далее
                  </Button>
                </div>
              </>
            )}
          </form>

          <div className={styles.links}>
            <div className={styles.linksItem}>
              У вас ещё нет аккаунта?
              <a href="#" className={styles.link}>
                Зарегистрироваться
              </a>
            </div>
            <div className={styles.linksItem}>
              <span className={styles.linksItemMobile}>Возникли</span>{" "}
              <span className={styles.linksItemDesk}>проблемы со входом?</span>
              <a href="#" className={styles.link}>
                Восстановить доступ
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className={styles.rightSide}>
        <img className={styles.image} src={RightSideImage} alt="right side" />
      </div>
    </div>
  );
};

export { Login };
