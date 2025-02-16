import { getRandomNumber } from '../util.js';

const racingGame = {
  playRacing(gameCount, cars) {
    const results = [];
    for (let count = 0; count < gameCount; count += 1) {
      this.moveCars(cars);
      results.push(this.getRoundResult(cars));
    }
    return results;
  },

  moveCars(cars) {
    cars.forEach((car) => car.move(getRandomNumber()));
  },

  getRoundResult(cars) {
    return cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));
  },

  determineWinners(cars) {
    const winnerPosition = Math.max(...cars.map((car) => car.getPosition()));
    return cars
      .filter((car) => car.getPosition() === winnerPosition)
      .map((car) => car.getName());
  },
};

export default racingGame;
