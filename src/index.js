import { getValidCarNames, getValidAttempt } from "./ui/InputHandler.js";
import { createCars, moveCars } from "./domain/CarRacing.js";
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
  displayWinner(cars);
}

run();
