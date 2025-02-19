import Car from "./Car.js";
import { getRandomNumber } from "./util/random.js";

export const createCars = (carNames) => {
  return carNames.map((name) => new Car(name));
};

export const moveCars = (cars) => {
  for (const c of cars) {
    const n = getRandomNumber();
    c.move(getRandomNumber(), 1);
  }
};

export const getWinners = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
  return winners;
};
