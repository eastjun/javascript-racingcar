import { getRandomNumber } from '../util.js';

const MOVE_FORWARD_THRESHOLD = 4;

const racingGame = {
  playRacing(gameCount, cars) {
    const results = [];
    for (let count = 0; count < gameCount; count += 1) {
      this.moveCars(cars);
      results.push(this.getRoundResult(cars));
    }
    return results;
  },

  shouldMove(randomValue) {
    return randomValue >= MOVE_FORWARD_THRESHOLD;
  },

  moveCars(cars) {
    cars.forEach((car) => {
      if (this.shouldMove(getRandomNumber())) {
        car.move();
      }
    });
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
