import readLineAsync from './View/input.js';
import {
  validateCarNameNoSpaces,
  validateCarNameForm,
  validateDuplicatedCarName,
  validateCarsNameLength,
} from './Validation/carName.js';
import {
  validateGameCountRange,
  validateGameCountType,
} from './Validation/gameCount.js';

import Car from './Model/Car.js';
import racingGame from './Model/game.js';
import outputView from './View/output.js';

class App {
  async getCarNames() {
    const input = await readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
    );
    try {
      validateCarNameNoSpaces(input);
      validateCarsNameLength(input);
      validateCarNameForm(input);
      validateDuplicatedCarName(input);
      return input;
    } catch (err) {
      console.log(err.message);
      return this.getCarNames();
    }
  }

  async getGameCount() {
    const input = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    try {
      validateGameCountType(input);
      validateGameCountRange(input);
      return input;
    } catch (err) {
      console.log(err.message);
      return this.getGameCount();
    }
  }

  async run() {
    const carNames = await this.getCarNames();
    const cars = carNames.split(',').map((carName) => new Car(carName));
    const gameCount = Number(await this.getGameCount());

    const results = racingGame.playRacing(gameCount, cars);
    outputView.printGameResult(results);

    const winners = racingGame.determineWinners(cars);
    outputView.printWinners(winners);
  }
}

export default App;
