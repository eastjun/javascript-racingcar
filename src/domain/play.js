import { moveCarForward } from "./car.js";

export const playRounds = (cars) => {
  return cars.map((car) => moveCarForward(car));
};

export const playRacing = (initialCars, tryCount) => {
  return Array.from({ length: tryCount }).reduce((rounds) => {
    const newRound = playRounds(rounds.at(-1) || initialCars);
    return [...rounds, newRound];
  }, []);
};
