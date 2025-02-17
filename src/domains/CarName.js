import { ERROR_PREFIX } from "../constants/message.js";

export default class CarName {
  static CAR_SETTING = {
    maxCarName: 5,
    minCarName: 1,
  };

  static ERROR_MESSAGE = {
    carNameLength: `${ERROR_PREFIX} 자동차 이름은 ${CarName.CAR_SETTING.maxCarName}글자 이하, ${CarName.CAR_SETTING.minCarName}이상이어야 합니다.`,
    carCount: `${ERROR_PREFIX} 자동차 갯수는 ${CarName.CAR_SETTING.minCarCount}개 이상, ${CarName.CAR_SETTING.maxCarCount}개 이하이어야 합니다.`,
    duplicateCarName: `${ERROR_PREFIX} 중복된 자동차 이름은 입력할 수 없습니다.`,
  };

  static validateCarNameLength(name) {
    if (
      name.length < CarName.CAR_SETTING.minCarName ||
      name.length > CarName.CAR_SETTING.maxCarName
    ) {
      throw new Error(CarName.ERROR_MESSAGE.carNameLength);
    }
  }

  static validateDuplicateCarName(names) {
    if (new Set(names).size !== names.length) {
      throw new Error(CarName.ERROR_MESSAGE.duplicateCarName);
    }
  }
}
