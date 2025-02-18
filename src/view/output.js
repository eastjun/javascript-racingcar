import { OUTPUT } from "../constants/messages.js";
import { RACE_MOVE } from "../constants/race.js";
export const print = (str) => {
  return console.log(str);
};

export const printProcess = (cars) => {
  cars.forEach((car) => {
    console.log(`${car.name} :  ${RACE_MOVE.FORWARD_STR.repeat(car.position)}`);
  });
  console.log("");
};

export const printWinners = (winners) => {
  console.log(
    `${OUTPUT.FINAL_WINNER} ${winners.map((winner) => winner.name).join(", ")}`,
  );
};
