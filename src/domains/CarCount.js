import { ERROR_PREFIX } from "../constants/message.js";

export default class CarCount {
  static CAR_SETTING = {
    minCarCount: 2,
    maxCarCount: 100,
  };

  static ERROR_MESSAGE = {
    carCount: `${ERROR_PREFIX} 자동차 갯수는 ${CarCount.CAR_SETTING.minCarCount}개 이상, ${CarCount.CAR_SETTING.maxCarCount}개 이하이어야 합니다.`,
  };

  static validate(names) {
    if (
      names.length < CarCount.CAR_SETTING.minCarCount ||
      names.length > CarCount.CAR_SETTING.maxCarCount
    ) {
      throw new Error(CarCount.ERROR_MESSAGE.carCount);
    }
  }
}
