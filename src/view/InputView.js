import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";
import { NUMBER } from "../constants/Number.js";
import readLineAsync from "../utils/readLineAsync.js";
class InputView {
  async getCarNames(message) {
    const inputCarNames = await readLineAsync(message);
    const carNames = inputCarNames.split(",").map((carName) => carName.trim());
    this.validateCarNames(carNames);
    return carNames;
  }

  async getTryCount(message) {
    const inputTryCount = await readLineAsync(message);
    const tryCount = Number(inputTryCount);
    this.tryCountValidator(tryCount);
    return tryCount;
  }

  tryCountValidator(tryCount) {
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

  validateCarNames(carNames) {
    carNames.forEach((name) => this.#validateEachCarName(name));

    this.#validateDuplicateName(carNames);
    this.#validateCarNamesLength(carNames);
  }

  #validateEachCarName(carName) {
    this.#valiateCarNameLength(carName);
    this.#validateSpecialSymbol(carName);
  }

  #valiateCarNameLength(carName) {
    if (
      carName.length < NUMBER.MIN_CAR_NAME_LENGTH ||
      carName.length > NUMBER.MAX_CAR_NAME_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    }
  }

  #validateSpecialSymbol(carName) {
    const regExp = /^[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]$/g;

    if (regExp.test(carName)) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME);
    }
  }

  #validateCarNamesLength(carNames) {
    if (
      carNames.length < NUMBER.MIN_CAR_LIST_LENGTH ||
      carNames.length > NUMBER.MAX_CAR_LIST_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_CARS_LENGTH);
    }
  }

  #validateDuplicateName(carNames) {
    const nameSet = new Set();
    carNames.forEach((name) => {
      this.#checkDuplicate(name, nameSet);
    });
  }

  #checkDuplicate(carName, nameSet) {
    if (nameSet.has(carName)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_NAME);
    }

    nameSet.add(carName);
  }
}

export default InputView;
