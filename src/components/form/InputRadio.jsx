// import React hooks
import { useState } from "react";

// import style
import styles from "./InputRadio.module.scss";

const InputCheckbox = (props) => {
  const { name, label, checked } = props || null;

  // definisco lo state che gestisce lo stato del radio
  const [isChecked, setIsChecked] = useState(checked);

  // definisco la funzione per la gestione del cambio state al click sul radio
  const toggleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={styles.inputForm}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type="radio"
        className={`${styles.input} ${isChecked ? styles.activeInput : ""}`}
        defaultChecked={isChecked}
        onClick={toggleCheck}
      />
    </div>
  );
};

export default InputCheckbox;
