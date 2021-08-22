import DoorModel from "../model/DoorModel";
import { Gift } from "../components/Gift";
import styles from "../styles/Door.module.css";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door = ({ value: door, onChange }: DoorProps) => {
  const selected = door.selected && !door.open ? styles.selected : "";

  const handleSelected = () => onChange(door.changeSelected());
  const handleOpen = (e) => {
    e.stopPropagation();
    onChange(door.openDoor());
  };

  const renderDoor = () => (
    <div className={styles.door}>
      <div className={styles.number}>{door.number}</div>
      <div className={styles.knob} onClick={handleOpen}></div>
    </div>
  );

  return (
    <div className={styles.area} onClick={handleSelected}>
      <div className={`${styles.frame} ${selected}`}>
        {door.closed ? renderDoor() : door.hasGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
