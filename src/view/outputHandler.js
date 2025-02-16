import { CAR_MOVE_SYMBOL } from "../config/constants.js";
import { OUTPUT_MESSAGE } from "../config/ioconstans.js";

export const displayResultTitle = () => {
  console.log(OUTPUT_MESSAGE.RACE_RESULT_TITLE);
};

export const displayRaceResult = (cars) => {
  console.log(
    cars
      .map((car) => `${car.name} : ${CAR_MOVE_SYMBOL.repeat(car.position)}`)
      .join("\n") + "\n"
  );
};

export const displayWinners = (winners) => {
  console.log(`${OUTPUT_MESSAGE.WINNER_TITLE}${winners.join(", ")}`);
};
