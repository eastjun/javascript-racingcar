import { createRandom } from '../utils/Random.js';
import Car from '../domain/models/Car.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import WinnerManager from '../domain/models/WinnerManager.js';

export default class Game {
  #carList;

  constructor() {
    this.#carList = [];
  }

  createCarList(names) {
    this.#carList = names.map(name => new Car(name));
  }

  async start() {
    const inputName = await InputView.inputName();
    const inputTryNumber = await InputView.inputTryNumber();

    this.createCarList(inputName);
    this.#raceGame(inputTryNumber);

    const winnerManager = new WinnerManager(this.#carList);
    OutputView.gameResult(winnerManager.getWinners());
  }

  #raceRound() {
    this.#carList.forEach(car => {
      const randomValue = createRandom();
      car.moveForward(randomValue);
      OutputView.roundResult(car.name, car.position);
    });
  }

  #raceGame(inputTryNumber) {
    for (let i = 0; i < inputTryNumber; i++) {
      this.#raceRound();
      OutputView.break();
    }
  }
}
