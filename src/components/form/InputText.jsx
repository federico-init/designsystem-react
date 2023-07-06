// import style
import styles from "./Input.module.scss";

const InputText = (props) => {
  const { id, name, label, placeholder, state, errorMessage, handleChange } =
    props || null;

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
      <input
        type="text"
        className={`${styles.input} 
        ${state === "error" ? styles.error : ""} 
        ${state === "disabled" ? styles.disabled : ""}`}
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={state === "disabled" ? true : false}
        onChange={(e) => handleChange(e.target.value)}
      />
      {state === "error" && errorMessage && (
        <p className={styles.hint}>{errorMessage}</p>
      )}
    </div>
  );
};

export default InputText;
