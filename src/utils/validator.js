import { ERROR, MAX_CAR_NAME_LENGTH } from './constants.js';

export const validateNameInput = (nameList) => {
  if (!nameList) {
    throw new Error(ERROR.EMPTY_INPUT);
  }
  nameList.forEach((name) => {
    if (name.length > MAX_CAR_NAME_LENGTH) {
      throw new Error(ERROR.LONG_LENGTH);
    }
    if (!name.trim()) {
      throw new Error(ERROR.EMPTY_INPUT);
    }
  });
  if (nameList.length !== new Set(nameList).size) {
    throw new Error(ERROR.DUPLICATE_NAME);
  }
};

export const validateCountInput = (count) => {
  if (count < 1) {
    throw new Error(ERROR.UNDER_MIN_NUMBER);
  }
  if (count !== Math.floor(count)) {
    throw new Error(ERROR.DECIMAL);
  }
};
