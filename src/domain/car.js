import { RACE_MOVE } from "../constants/race.js";
import { getRandomNumber } from "../utils/random.js";

export const createCars = (carNames) => {
  return carNames.map((carName) => ({ name: carName, position: 0 }));
};

export const getNextCarPosition = (position) => {
  const randomNumber = getRandomNumber();
  if (randomNumber >= RACE_MOVE.THRESHOLD) {
    return position + 1;
  }
  return position;
};

export const updateCarPosition = (car, moveResult) => ({
  ...car,
  position: moveResult,
});

export const moveCarForward = (car) => {
  const newPosition = getNextCarPosition(car.position);
  return updateCarPosition(car, newPosition);
};
