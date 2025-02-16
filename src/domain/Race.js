import CarPositionHistory from '../storage/CarPositionHistory.js';
import { getRandomNumber } from '../utils/randomNumber.js';
import { CAR_MOVE_STANDARD } from '../constants/MAGIC_NUMBER.js';
class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
    this.carPositionHistory = new CarPositionHistory();
  }

  tryMove(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        car.move(getRandomNumber() >= CAR_MOVE_STANDARD);
        this.carPositionHistory.saveHistory(car);
      });
    }
  }

  getWinner(cars) {
    const finalPosition = cars.map((car) => car.position);
    const maxPosition = Math.max(...finalPosition);

    const winner = cars.filter((car) => car.position === maxPosition).map((car) => car.name);

    return winner;
  }
}

export default Race;
