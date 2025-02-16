import { ERROR_MESSAGE, MAX_CAR_LENGTH } from '../../Const';

const validateLimitLength = (name) => {
  if (name.length > MAX_CAR_LENGTH) {
    throw new Error(ERROR_MESSAGE.belowLimit);
  }
};

const validatePositiveLength = (name) => {
  if (name.length <= 0) {
    throw new Error(ERROR_MESSAGE.positiveLength);
  }
};

const validatePositiveNumber = (number) => {
  if (number <= 0) {
    throw new Error(ERROR_MESSAGE.positiveNumber);
  }
};

const validateNumeric = (number) => {
  if (Number.isNaN(number)) {
    throw new Error(ERROR_MESSAGE.numeric);
  }
};

const validateInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error(ERROR_MESSAGE.integer);
  }
};

export {
  validateLimitLength,
  validatePositiveLength,
  validatePositiveNumber,
  validateNumeric,
  validateInteger,
};
