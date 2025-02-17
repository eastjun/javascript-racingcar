import { CAR_NAME_LIST_ERROR_MESSAGES } from '../../constants/Constants.js';
import runValidators from '../../utils/runValidators.js';
import throwError from '../../utils/throwError.js';
import { CarNameListValidator } from '../isValid/CarNameListValidator.js';

const validateCarCount = (carNameList) => {
  if (CarNameListValidator.isTooSmall(carNameList)) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.COUNT);
  }
};

const validateDuplicate = (carNameList) => {
  if (CarNameListValidator.isDuplicated(carNameList)) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.DUPLICATE_CAR_NAME);
  }
};

const validateCarNameList = (carNameList) =>
  runValidators([validateCarCount, validateDuplicate], carNameList);

export default validateCarNameList;
