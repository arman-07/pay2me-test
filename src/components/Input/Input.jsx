import React from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  const { className, wrapperClassName, errorText, rightElement, ...rest } =
    props;

  return (
    <div className={cn(styles.root, className)}>
      <div
        className={cn(styles.inputWrapper, wrapperClassName, {
          [styles.inputWrapperError]: !!errorText,
        })}
      >
        <input
          {...rest}
          className={cn(styles.input, rest.className, {
            [styles.error]: errorText,
          })}
          ref={ref}
        />
        {rightElement &&
          !errorText &&
          React.cloneElement(rightElement, {
            ...rightElement.props,
            className: cn(styles.rightElement, rightElement.props.className),
          })}
      </div>

      {errorText && (
        <div
          className={cn(styles.helper, {
            [styles.error]: errorText,
          })}
        >
          {errorText}
        </div>
      )}
    </div>
  );
});

export { Input };
