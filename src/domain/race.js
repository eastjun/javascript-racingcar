import {
  MAX_RANDOM_VALUE,
  MIN_RANDOM_VALUE,
  MOVE_THRESHOLD,
} from "../config/constants.js";

export const moveCars = (cars, condition) => {
  cars.forEach((car) => car.move(condition));
};

export const moveCondition = () => getRandomNumber() >= MOVE_THRESHOLD;

export const getRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1));
};

export const determineWinners = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
  return winners;
};
