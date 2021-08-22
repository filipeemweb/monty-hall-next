import { useEffect, useState } from "react";
import Link from "next/link";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import styles from "../../../styles/Game.module.css";
import { useRouter } from "next/dist/client/router";

export default function Game() {
  const router = useRouter();

  const [valid, setValid] = useState(true);
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const prize = +router.query.prize;
    const qtdValidDoors = doors >= 3 && doors <= 100;
    const hasPrize = prize >= 1 && prize <= doors;

    setPortas(createDoors(doors, prize));
    setValid(qtdValidDoors && hasPrize);
  }, [router?.query]);

  const renderDoors = () => {
    return (
      valid &&
      portas.map((porta) => (
        <Door
          key={porta.number}
          value={porta}
          onChange={(newDoor) => setPortas(updateDoors(portas, newDoor))}
        />
      ))
    );
  };

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoors() : <h1>Valores informados inválidos</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/" passHref>
          <button>Reinicia Jogo</button>
        </Link>
      </div>
    </div>
  );
}
