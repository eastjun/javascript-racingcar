import { RACE, NEW_LINE, EMPTY_LINE } from './Constants/message.js';

const outputView = {
  printRaceResult(raceResult) {
    console.log(`${NEW_LINE}${RACE.RESULT_INSTRUCTION}`);
    raceResult.forEach((round) => {
      round.forEach(({ name, position }) => {
        console.log(`${name} : ${RACE.MOVEMENT.repeat(position)}`);
      });
      console.log(EMPTY_LINE);
    });
  },
  printWinners(winners) {
    console.log(
      `${RACE.WINNER_INSTRUCTION} ${winners.join(RACE.WINNER_DELIMITER)}`,
    );
  },
};

export default outputView;
