import { INFO_MESSAGE, CAR, DELIMITERS } from "../constants.js";

export const displayResultTitle = () => {
  console.log(INFO_MESSAGE.RACE_RESULT_TITLE);
};

export const displayRaceResult = (cars) => {
  for (const c of cars) {
    const result = CAR.PROGRESS_MARK.repeat(c.position);
    console.log(`${c.name} : ${result}`);
  }
  console.log();
};

export const displayWinner = (winners) => {
  console.log(`${INFO_MESSAGE.WINNER_TITLE}${winners.join(DELIMITERS.WINNER)}`);
};
