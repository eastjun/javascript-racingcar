import CarManager from '../CarManager.js';
import readLineAsync from '../views/InputView.js';
import { INPUT } from '../constants/messages.js';
import OutputView from '../views/OutputView.js';
import CarNameValidator from '../validator/CarNameValidator.js';
import splitStringToArray from '../utils/utils.js';
import { CONFIG } from '../constants/config.js';

class Controller {
  constructor() {
    this.carManager = new CarManager();
  }

  async process() {
    const carNames = await this.readCarNames();
    this.carManager.createCars(carNames);
    const attempts = await this.readAttempts();
    this.carManager.race(attempts);
    const winners = this.carManager.determineWinners();
    OutputView.printWinners(winners);
  }

  async readCarNames() {
    const input = await readLineAsync(INPUT.CAR_NAMES);
    const carNames = splitStringToArray(input, CONFIG.COMMA);

    CarNameValidator.checkDuplicatedCarName(carNames);
    return carNames;
  }

  async readAttempts() {
    const attempts = await readLineAsync(INPUT.ATTEMPTS);
    /** @todo 시도할 횟수 유효성검증 추가 */
    return attempts;
  }
}

export default Controller;
