const CONSTANTS = require('../Constant/Constants');
const { RACE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');

class Validator {
  static validateNamesOfCars(names) {
    if (new Set(names).size !== names.length) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfNames);
    }

    if (names.length < CONSTANTS.minNumberOfNames) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfNames);
    }
  }

  static validateCarName(name) {
    if (name.length > CONSTANTS.maxNameLength) {
      throw new Error(RACE_ERROR_MESSAGE.lengthOfName);
    }

    if (
      /^[0-9]+$/.test(name) ||
      !/^[A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]*$/.test(name)
    ) {
      throw new Error(RACE_ERROR_MESSAGE.invalidInput);
    }

    if (['', CONSTANTS.undefinedType].includes(name)) {
      throw new Error(RACE_ERROR_MESSAGE.invalidInput);
    }
  }

  static validateTryCount(count) {
    if (count < 1) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }

    if (!/^[0-9]+$/.test(count)) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }
  }
}

module.exports = Validator;
