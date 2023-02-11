const Car = require("../model/Car");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const { RANDOM } = require("../utils/Constant");

class RacingGame {
  #cars;
  #winners;
  #maxPosition;

  constructor() {
    this.#cars = [];
    this.#winners = [];
    this.#maxPosition = 0;
  }

  start() {
    this.inputName();
  }

  inputName(){
    InputView.readCarName((answer) => {
      const nameOfCars = answer.split(",");

      this.setCar(nameOfCars);
    });
  }

  setCar(carName) {
    for (let len = 0; len < carName.length; len++) {
      let car = new Car();
      car.inputName(carName[len]);
      this.#cars.push(car);
    }

    this.inputNumber();
  }

  inputNumber() {
    InputView.readNumber((answer) => {
      let tryNumber = Number(answer);
      this.makeCarMove(tryNumber);
    });
  }

  makeCarMove(tryNumber) {
    for (let num = 0; num < tryNumber; num++) {
      this.moveCar();
      OutputView.printCarMove(this.#cars);
    }
    this.whoIsWinners(this.#cars);
    OutputView.printWinners(this.#winners);
  }

  moveCar() {
    for (let car of this.#cars) {
      car.decideGoAndStop(this.getRandomNumber());
    }
  }

  getRandomNumber() {
    return Math.floor(
      Math.random() * (RANDOM.MAXNUMBER - RANDOM.MINNUMBER) + RANDOM.MINNUMBER
    );
  }

  whoIsWinners(cars) {
    for (let car of cars) {
      this.comparedCars(car);
    }
  }

  comparedCars(car) {
    if (this.#maxPosition === car.getPosition())
      this.#winners.push(car.getName());

    if (this.#maxPosition < car.getPosition()) {
      this.#maxPosition = car.getPosition();
      this.#winners = [];
      this.#winners.push(car.getName());
    }
  }

  getWinner() {
    return this.#winners;
  }
}

module.exports = RacingGame;
