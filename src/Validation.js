class Validation {
  static validateCarNames(names) {
    if (!Validation.#isCarNumberValid(names)) {
      throw new Error(ERROR_MESSAGE.invalidCarNumber);
    }
  }

  static #isCarNumberValid(names) {
    return names.length >= 2;
  }
}
const ERROR_MESSAGE = {
  invalidCarNumber: `[ERROR] 2개 이상의 차이름을 입력하세요.`,
  invalidCarNameLength: `[ERROR] 1자 이상, 5자 이하의 이름을 입력하세요.`,
  duplicateCarName: `[ERROR] 중복되는 차 이름이 존재합니다.`,
  invalidGameRound: `[ERROR] 1 이상의 숫자를 입력하세요.`,
};

module.exports = Validation;
