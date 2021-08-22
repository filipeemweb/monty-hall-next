import styles from "../styles/InputNumber.module.css";

interface InputNumberProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export const InputNumber = (props: InputNumberProps) => {
  const dec = () => props.value > 0 && props.onChange(props.value - 1)
  const inc = () => props.onChange(props.value + 1)

  return (
    <div className={styles.inputNumber}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={dec}>-</button>
        <button className={styles.btn} onClick={inc}>+</button>
      </div>
    </div>
  );
};
