import DoorModel from "../model/DoorModel";

export const createDoors = (num: number, prize: number): DoorModel[] => {
  return Array.from({ length: num }, (_, i) => {
    const number = i + 1;
    const hasGift = number === prize;
    return new DoorModel(number, hasGift);
  });
};


export const updateDoors = (doors: DoorModel[], updatedDoor: DoorModel): DoorModel[] => {
  return doors.map(currentDoor => {
    const sameAsModified = currentDoor.number === updatedDoor.number;
    
    if (sameAsModified) {
      return updatedDoor
    } else {
      return updatedDoor.open ? currentDoor : currentDoor.clearSelected()
    }
  })
}
