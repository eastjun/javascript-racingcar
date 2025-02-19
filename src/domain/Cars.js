import { NUMBER } from "../constants/Number.js";

class Cars {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((name) => ({
      name: name,
      position: NUMBER.INIT_POSITION,
    }));
  }

  getWinners() {
    const maxPosition = this.getMaxPosition();
    return this.#cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  getMaxPosition() {
    return this.#cars.reduce(
      (maxPosition, car) => Math.max(car.position, maxPosition),
      -1,
    );
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
      car.position += NUMBER.MOVE_POSITION;
    }
  }

  getCars() {
    return [...this.#cars];
  }
}

export default Cars;
