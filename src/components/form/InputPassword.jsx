// import React hooks
import { useState } from "react";

// import style
import styles from "./Input.module.scss";

// import assets
import closeBtn from "../../assets/close.svg";
import hidePsw from "../../assets/hidePsw.svg";
import showPsw from "../../assets/showPsw.svg";

const InputPassword = (props) => {
  const {
    id,
    name,
    label,
    placeholder,
    state,
    errorMessage,
    handleChange,
    setInputPassword,
  } = props || null;

  // definisco uno stato e una funzione per mostrare/nascondere la password
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.inputForm}>
      {label && (
        <label
          htmlFor={id}
          className={`${styles.label} 
          ${state === "disabled" ? styles.disabled : ""}`}
        >
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          className={`${styles.inputPassword} 
          ${state === "error" ? styles.error : ""} 
        ${state === "disabled" ? styles.disabled : ""}`}
          placeholder={placeholder}
          id={id}
          name={name}
          disabled={state === "disabled" ? true : false}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <img
          src={closeBtn}
          className={styles.icon}
          onClick={() => {
            setInputPassword("");
          }}
        ></img>
        <img
          src={showPassword ? hidePsw : showPsw}
          className={styles.icon}
          onClick={togglePassword}
        ></img>
      </div>
      {state === "error" && errorMessage && (
        <p className={styles.hint}>{errorMessage}</p>
      )}
    </div>
  );
};

export default InputPassword;
