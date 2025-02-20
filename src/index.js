import { getValidCarNames, getValidAttempt } from "./domain/validate.js";
import { createCars, moveCars, getWinners } from "./domain/CarRacing.js";
import { displayResultTitle, displayRaceResult, displayWinner } from "./ui/OutputHandler.js";

async function run() {
  const carNames = await getValidCarNames();
  const cars = createCars(carNames);
  const attempt = await getValidAttempt();
  displayResultTitle();
  for (let i = 0; i < attempt; i++) {
    moveCars(cars);
    displayRaceResult(cars);
  }
  const winners = getWinners(cars);
  displayWinner(winners);
}

run();
