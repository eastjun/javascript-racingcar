import Car from "../domain/Car.js";
import { determineWinners, moveCars, moveCondition } from "../domain/race.js";
import { validateCars } from "../utils/validate.js";
import { getAttempt, getCarNames } from "../view/inputHandler.js";
import {
  displayRaceResult,
  displayResultTitle,
  displayWinners,
} from "../view/outputHandler.js";

export const raceStart = async () => {
  const cars = await getCars();
  const attempt = await getAttempt();

  displayResultTitle();
  for (let i = 0; i < attempt; i++) {
    moveCars(cars, moveCondition);
    displayRaceResult(cars);
  }

  const winners = determineWinners(cars);
  displayWinners(winners);
};

const getCars = async () => {
  while (true) {
    try {
      const carNames = (await getCarNames())
        .split(",")
        .map((name) => name.trim());
      let cars = carNames.map((name) => new Car(name));
      validateCars(cars, carNames);
      return cars;
    } catch (error) {
      console.log(error.message);
    }
  }
};
