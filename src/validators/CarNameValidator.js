import { ERROR } from '../constants/message.js';
import { CAR } from '../constants/race.js';

class CarNameValidator {
  validateNames(carNames) {
    for (let carName of carNames) {
      this.#valdiateCarNameLength(carName);
      this.#validateSpecialSymbol(carName);
    }

    this.#validateDuplicateName(carNames);
    this.#validateCarNamesLength(carNames);
  }

  #valdiateCarNameLength(carName) {
    if (carName.length < CAR.MIN_NAME_LENGTH || carName.length > CAR.MAX_NAME_LENGTH) {
      throw new Error(ERROR.CAR_NAME.INVALID_LENGTH);
    }
  }

  #validateDuplicateName(carNames) {
    const nameSet = new Set();

    for (let carName of carNames) {
      this.#checkDuplicate(carName, nameSet);
    }
  }

  #checkDuplicate(carName, nameSet) {
    if (nameSet.has(carName)) {
      throw new Error(ERROR.CAR_NAME.DUPLICATE);
    }

    nameSet.add(carName);
  }

  #validateSpecialSymbol(carNames) {
    const specialSymbolRegExp = /^[{}[\]/?.,;:|)*~`!^_+<>@#$%&\\=('"-]$/g;

    if (specialSymbolRegExp.test(carNames)) {
      throw new Error(ERROR.CAR_NAME.SPECIAL_SYMBOL);
    }
  }

  #validateCarNamesLength(carNames) {
    if (carNames.length < CAR.MIN_CAR_COUNT || carNames.length > CAR.MAX_CAR_COUNT) {
      throw new Error(ERROR.CAR.INVALID_COUNT);
    }
  }
}

export default CarNameValidator;
