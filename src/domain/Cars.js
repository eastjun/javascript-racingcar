import { NUMBER } from "../constants/Number.js";
import Car from "./Car.js";

class Cars {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  getWinners() {
    const maxPosition = this.getMaxPosition();
    return this.#cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }

  getMaxPosition() {
    return this.#cars.reduce((maxPosition, car) => {
      return car.comparePosition(maxPosition);
    }, -1);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  moveCars() {
    this.#cars.forEach((car) => {
      this.#checkMoveCondition(car);
    });
  }

  #checkMoveCondition(car) {
    if (this.getRandomNumber() >= NUMBER.MIN_NUMBER_TO_MOVE) {
      car.move();
    }
  }

  getCars() {
    return [...this.#cars];
  }
}

export default Cars;
