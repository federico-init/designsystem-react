// import React hooks
import { useState } from "react";

// import style
import styles from "./InputCheckbox.module.scss";

// import assets
import { FaCheck } from "react-icons/fa6";

const InputCheckbox = (props) => {
  const { name, label, checked } = props || null;

  // definisco lo state che gestisce lo stato del checkbox
  const [isChecked, setIsChecked] = useState(checked);

  // definisco la funzione per la gestione del cambio state al click sul checkbox
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
        type="checkbox"
        className={styles.input}
        defaultChecked={isChecked}
        onClick={toggleCheck}
      />
      <span
        className={`${styles.checked} ${isChecked ? styles.activeChecked : ""}`}
        onClick={toggleCheck}
      >
        <FaCheck />
      </span>
    </div>
  );
};

export default InputCheckbox;
