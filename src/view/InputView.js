import { InputValidator } from '../helpers/index.js';
import { INPUT_MESSAGES, SEPERATOR } from '../lib/constants.js';
import { readLineAsync, retryUntilSuccess } from '../lib/utils.js';
import OutputView from './OutputView.js';

export default class InputView {
  static async getCarNames() {
    return retryUntilSuccess(
      async () => {
        const rawCarNames = await readLineAsync(INPUT_MESSAGES.carName);
        const carNames = rawCarNames
          .split(SEPERATOR)
          .map(carName => carName.trim());
        InputValidator.validateCarNames(carNames);
        return carNames;
      },
      error => OutputView.printErrorMessage(error),
    );
  }

  static async getTryCount() {
    return retryUntilSuccess(
      async () => {
        const rawCount = await readLineAsync(INPUT_MESSAGES.tryCount);
        const tryCount = Number(rawCount);
        InputValidator.validateCount(tryCount);

        return tryCount;
      },
      error => OutputView.printErrorMessage(error),
    );
  }
}
