import runValidators from '../../utils/runValidators.js';
import throwError from '../../utils/throwError.js';
import { RANDOM_ERROR_MESSAGES } from '../../constants/Constants.js';
import { RandomNumberValidator } from '../isValid/RandomNumberValidator.js';

const validateInteger = (value) => {
  if (!RandomNumberValidator.isInteger(value)) {
    throwError(RANDOM_ERROR_MESSAGES.NOT_INTEGER);
  }
};

const validateMaxGreaterThanMin = (value) => {
if (!RandomNumberValidator.isMaxGreaterThanMin(value)) {
    throwError(RANDOM_ERROR_MESSAGES.MIN_GREATER_THAN_MAX);
  }
};

const validateRandomNumberArrange = (value) =>
  runValidators([validateInteger, validateMaxGreaterThanMin], value);

export default validateRandomNumberArrange;
