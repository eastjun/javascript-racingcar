import { CAR_NAME_LIST_ERROR_MESSAGES } from '../../constants/Constants.js';
import runValidators from '../../utils/runValidators.js';
import throwError from '../../utils/throwError.js';
import { CarNameValidator } from '../isValid/carNameValidator.js';

const validateLengthMin = (carName) => {
  if (CarNameValidator.isTooShort(carName)) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.NAME_LENGTH_MIN);
  }
};

const validateLengthMax = (carName) => {
  if (CarNameValidator.isTooLong(carName)) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.NAME_LENGTH_MAX);
  }
};

const validateCarName = (carName) =>
  runValidators([validateLengthMin, validateLengthMax], carName);

export default validateCarName;
