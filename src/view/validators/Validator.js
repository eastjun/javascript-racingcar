import { ERROR_MESSAGE, MAX_LIMIT_LENGTH } from '../../Const.js';

const validateLimitLength = (input) => {
  if (input.length > MAX_LIMIT_LENGTH) {
    throw new Error(ERROR_MESSAGE.belowLimit);
  }
};

const validatePositiveLength = (input) => {
  if (input.length <= 0) {
    throw new Error(ERROR_MESSAGE.positiveLength);
  }
};

const validatePositiveNumber = (input) => {
  if (input <= 0) {
    throw new Error(ERROR_MESSAGE.positiveNumber);
  }
};

const validateNumeric = (input) => {
  if (Number.isNaN(input)) {
    throw new Error(ERROR_MESSAGE.numeric);
  }
};

const validateInteger = (input) => {
  if (!Number.isInteger(input)) {
    throw new Error(ERROR_MESSAGE.integer);
  }
};

const validateDuplicateInput = (inputList) => {
  if (inputList.length !== new Set(inputList).size) {
    throw new Error(ERROR_MESSAGE.duplicateNames);
  }
};

const validateEndWithDelimiter = (inputList) => {
  if (inputList[inputList.length - 1] === '') {
    throw new Error(ERROR_MESSAGE.endWithDelimiter);
  }
};

export {
  validateLimitLength,
  validatePositiveLength,
  validatePositiveNumber,
  validateNumeric,
  validateInteger,
  validateDuplicateInput,
  validateEndWithDelimiter,
};
