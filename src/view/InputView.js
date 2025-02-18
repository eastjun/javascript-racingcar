import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";
import { NUMBER } from "../constants/Number.js";
import readLineAsync from "../utils/readLineAsync.js";
class InputView {
  async getCarNames(message) {
    return await readLineAsync(message);
  }

  async getTryCount(message) {
    const inputTryCount = await readLineAsync(message);
    const tryCount = Number(inputTryCount);
    this.#tryCountValidator(tryCount);
    return tryCount;
  }

  #tryCountValidator(tryCount) {
    if (isNaN(tryCount)) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_NUMBERIC);
    }

    if (Number(tryCount) > NUMBER.MAX_TRY_COUNT) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_UPPER_THEN_100);
    }

    if (Number(tryCount) < NUMBER.MIN_TRY_COUNT) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_POSITIVE);
    }
  }
}

export default InputView;
