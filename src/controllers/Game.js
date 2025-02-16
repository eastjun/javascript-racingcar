import { createRandom } from '../utils/Random.js';
import Car from '../domain/models/Car.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import DEFINITION from '../constants/Definition.js';

export default class Game {
  #carList;

  constructor() {
    this.#carList = [];
  }

  createCarList(names) {
    names.forEach(name => {
      this.#carList.push(new Car(name));
    });
  }

  judgeWinner() {
    const winnerNames = [];
    let maxPosition = 0;
    this.#carList.forEach(car => {
      if (car.position > maxPosition) {
        maxPosition = car.position;
      }
    });

    this.#carList.forEach(car => {
      if (car.position === maxPosition) {
        winnerNames.push(car.name);
      }
    });
    return winnerNames;
  }

  async start() {
    const inputName = await InputView.inputName();
    const inputTryNumber = await InputView.inputTryNumber();
    this.createCarList(inputName);
    for (let i = 0; i < inputTryNumber; i++) {
      this.#carList.forEach(car => {
        const randomValue = createRandom();
        if (randomValue < DEFINITION.ADVANCE_CONDITION) car.moveForward(randomValue);
        OutputView.roundResult(car.name, car.position);
      });
      OutputView.break();
    }
    const winnerNames = this.judgeWinner();
    OutputView.gameResult(winnerNames);
  }
}
