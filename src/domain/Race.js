import { RANDOM_RANGE } from "../constants/domain.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import OutputView from "../view/OutputView.js";

export default class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  runRace() {
    OutputView.printResultText();
    for (let i = 0; i < this.tryCount; i++) {
      this.runRound();
    }
  }

  runRound() {
    this.cars.forEach((car) => {
      car.move(getRandomNumber(RANDOM_RANGE));
      OutputView.printProgressResult(car.name, car.position);
    });
    OutputView.printNewLine();
  }
}
