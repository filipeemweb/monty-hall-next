import { useState } from "react";
import Link from "next/link";
import { Card } from "../components/Card";
import { InputNumber } from "../components/InputNumber";
import styles from "../styles/Form.module.css";

export default function Form() {
  const [qtdDoors, setQtdDoors] = useState(0);
  const [prizeDoor, setPrizeDoor] = useState(0);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber
            text="Quantas portas?"
            value={qtdDoors}
            onChange={(newNumber) => setQtdDoors(newNumber)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumber
            text="Porta com presente?"
            value={prizeDoor}
            onChange={(newPrizeDoor) => setPrizeDoor(newPrizeDoor)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${qtdDoors}/${prizeDoor}`} passHref>
            <h1 className={styles.link}>Iniciar</h1>
          </Link>
        </Card>
      </div>
    </div>
  );
}
