import { getRandomNumber } from "../utils/getRandomNumber.js";
import OutputView from "../view/OutputView.js";

export default class Race {
  constructor(cars, tryCount) {
    this.outputView = new OutputView();
    this.cars = cars;
    this.tryCount = tryCount;
  }

  runRace() {
    this.outputView.printResultText();
    for (let i = 0; i < this.tryCount; i++) {
      this.runRound();
    }
  }

  runRound() {
    this.cars.forEach((car) => {
      car.move(getRandomNumber(10));
      this.outputView.printProgressResult(car.name, car.position);
    });
    this.outputView.printNewLine();
  }
}
