import OutputView from '../view/OutputView.js';
import { getRandomNumber } from '../utils/randomNumber.js';

class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  canMove() {
    const randomNumber = getRandomNumber();

    return randomNumber >= 4;
  }

  tryMove(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        car.updateHistory(this.canMove());
      });
    }
  }

  outputResult(cars, tryCount) {
    OutputView.printMessage('\n실행 결과');
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        OutputView.printEachResult(car.name, car.history[i]);
      });
      OutputView.printMessage('');
    }
  }

  getWinner(cars) {
    const finalPosition = cars.map((car) => car.position);
    const maxPosition = Math.max(...finalPosition);

    const winner = cars.filter((car) => car.position === maxPosition).map((car) => car.name);

    return winner;
  }

  outputWinner(winners) {
    OutputView.printWinner(winners);
  }
}

export default Race;
