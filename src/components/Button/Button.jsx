import React from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

export const Button = React.forwardRef((props, ref) => {
  const {
    children,
    icon,
    disabled,
    variant = "primary",
    nonfluid,
    className,
    ...other
  } = props;

  return (
    <button
      disabled={disabled}
      ref={ref}
      {...other}
      className={cn(
        styles.button,
        {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
        },
        className
      )}
    >
      {children} {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
});
