// import style
import styles from "./InputSelect.module.scss";

const InputSelect = () => {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} name="options" id="options">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
  );
};

export default InputSelect;
