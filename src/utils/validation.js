import { ERROR } from '../constants/messages.js';
import { MAX_CAR_NAME_LENGTH } from '../constants/race.js';

export const hasEmptyString = (arr) => {
  return arr.some((item) => item === '');
};

export const isLongerThanMaxLength = (arr, maxLength) => {
  return arr.every((item) => item.length < maxLength);
};

export const validateCarNames = (stringOfCarNames) => {
  const carNamesArr = stringOfCarNames.split(',');

  const carSet = new Set(carNamesArr);

  if (carSet.size !== carNamesArr.length) {
    throw new Error(ERROR.ARE_CAR_NAMES_DUPLICATED);
  }

  if (hasEmptyString(carNamesArr)) {
    throw new Error(ERROR.IS_CAR_NAME_EMPTY);
  }

  if (!isLongerThanMaxLength(carNamesArr, MAX_CAR_NAME_LENGTH)) {
    throw new Error(ERROR.IS_LENGTH_LONGER_THAN_FIVE);
  }
};

export const validateCount = (numberInput) => {
  const number = Number(numberInput);

  if (isNaN(number) || !Number.isInteger(number) || number <= 0) {
    throw new Error(ERROR.IS_NOT_NUMBER);
  }

  if (number === '') {
    throw new Error(ERROR.IS_TRY_COUNT_EMPTY);
  }
};
