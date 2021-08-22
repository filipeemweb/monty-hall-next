import styles from "../styles/Card.module.css";

interface CardProps {
  bgColor?: string;
  children?: any;
}

export const Card = (props: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.bgColor ?? "white" }}
    >
      {props.children}
    </div>
  );
};
