import React, { useState } from "react";

import { ReactComponent as HiddenPasswordIcon } from "./images/crossed-out-eye.svg";
import { ReactComponent as PasswordIcon } from "./images/eye.svg";
import { Input } from "../Input/Input";
import styles from "./InputPassword.module.scss";

const InputPassword = React.forwardRef(
  ({ rightElement, errorText, ...other }, ref) => {
    const [passwordType, setPasswordType] = useState("password");

    const handleIconClick = () => {
      if (passwordType === "password") {
        setPasswordType("text");
      } else setPasswordType("password");
    };

    const renderPasswordIcon = () => {
      if (passwordType === "password") {
        return (
          <PasswordIcon className={styles.icon} onClick={handleIconClick} />
        );
      }

      return (
        <HiddenPasswordIcon className={styles.icon} onClick={handleIconClick} />
      );
    };

    return (
      <div className={styles.root}>
        <Input
          ref={ref}
          {...other}
          errorText={errorText}
          rightElement={rightElement}
          type={passwordType}
          wrapperClassName={styles.input}
        />
        {renderPasswordIcon()}
      </div>
    );
  }
);

export { InputPassword };
