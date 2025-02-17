import Car from "./Car.js";
import { generateRandomNumber } from "../utils/utils.js";

export default class Race {
  createCars(names) {
    return names.map(Car.of);
  }

  race(cars) {
    cars.forEach((car) => {
      const isCanMove = this.#isCanMove();
      car.move(isCanMove);
    });
  }

  #isCanMove() {
    return generateRandomNumber() >= Car.MOVE_CONDITION;
  }

  getWinner(cars) {
    const positions = cars.map((car) => car.position);
    const maxPosition = Math.max(...positions);
    const winnerCars = cars.filter((car) => car.position === maxPosition);
    const winnerNames = winnerCars.map((car) => car.name);
    return winnerNames;
  }
}
