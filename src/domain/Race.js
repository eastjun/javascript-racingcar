import OutputView from "../view/OutputView.js";

export default class Race {
  constructor() {
    this.outputView = new OutputView();
  }

  runRace(cars, tryCount) {
    this.outputView.printResultText();
    for (let i = 0; i < tryCount; i++) {
      this.runRound(cars);
    }
  }

  runRound(cars) {
    cars.forEach((car) => {
      car.move();
      this.outputView.printProgressResult(car.getName(), car.getPosition());
    });
    this.outputView.printNewLine();
  }
}
