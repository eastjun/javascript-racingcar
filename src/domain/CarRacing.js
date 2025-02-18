import Car from "./Car.js";
import { getRandomNumber } from "./util/random.js";

export const createCars = (carNames) => {
  return carNames.map((name) => new Car(name));
};

export const moveCars = (cars) => {
  for (const c of cars) {
    c.move(getRandomNumber(), 1);
  }
};