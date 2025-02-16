import { MAX_CAR_NAME_LENGTH, MIN_CAR_NAME_LENGTH, MIN_CAR_QUANTITY } from '../constants/MAGIC_NUMBER.js';
import { splitString } from '../utils/separator.js';

export function checkIsEmpty(input) {
  if (input.trim().length === 0) throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
}

export function checkCarNameLength(carNames) {
  carNames.forEach((carName) => {
    if (carName.length < MIN_CAR_NAME_LENGTH || carName.length > MAX_CAR_NAME_LENGTH)
      throw new Error(`[ERROR] 자동차 이름은 ${MIN_CAR_NAME_LENGTH}에서 ${MAX_CAR_NAME_LENGTH}자 사이여야 합니다.`);
  });
}

export function checkCarNameDuplicate(carNames) {
  const carNameSet = new Set(carNames);

  if (carNameSet.size !== carNames.length) throw new Error('[ERROR] 자동차 이름은 중복되면 안됩니다.');
}

export function checkCarCount(carNames) {
  if (carNames.length < MIN_CAR_QUANTITY) throw new Error(`[ERROR] 자동차는 ${MIN_CAR_QUANTITY} 대 이상이여야 합니다.`);
}

export function checkCarName(carNamesInput) {
  checkIsEmpty(carNamesInput);
  const carNames = splitString(carNamesInput);
  checkCarNameLength(carNames);
  checkCarCount(carNames);
  checkCarNameDuplicate(carNames);
  return carNames;
}
