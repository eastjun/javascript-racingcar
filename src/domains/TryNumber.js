import { ERROR_PREFIX } from "../constants/message.js";

export default class TryNumber {
  static TRY_NUMBER_SETTING = {
    minTryNumber: 1,
    maxTryNumber: 100,
  };

  static ERROR_MESSAGE = {
    tryNumberRange: `${ERROR_PREFIX} 시도 횟수는 ${TryNumber.TRY_NUMBER_SETTING.minTryNumber}회 이상, ${TryNumber.TRY_NUMBER_SETTING.maxTryNumber}회 이하이어야 합니다.`,
    tryNumberNotPositiveInteger: `${ERROR_PREFIX} 시도 횟수는 양의 정수여야 합니다.`,
  };

  static validate(tryNumber) {
    this.#validateTryNumberSize(tryNumber);
    this.#validateTryNumberPositiveInteger(tryNumber);
  }

  static #validateTryNumberSize(tryNumber) {
    if (
      tryNumber < TryNumber.TRY_NUMBER_SETTING.minTryNumber ||
      tryNumber > TryNumber.TRY_NUMBER_SETTING.maxTryNumber
    ) {
      throw new Error(TryNumber.ERROR_MESSAGE.tryNumberRange);
    }
  }

  static #validateTryNumberPositiveInteger(tryNumber) {
    if (!Number.isInteger(tryNumber)) {
      throw new Error(TryNumber.ERROR_MESSAGE.tryNumberNotPositiveInteger);
    }
  }
}
