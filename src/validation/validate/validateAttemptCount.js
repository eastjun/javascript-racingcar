import runValidators from '../../utils/runValidators.js';
import throwError from '../../utils/throwError.js';
import { ATTEMPT_ERROR_MESSAGES } from '../../constants/Constants.js';
import { AttemptCountValidator } from '../isValid/AttemptCountValidator.js';

const validateInteger = (attemptCount) => {
  if (!AttemptCountValidator.isInteger(attemptCount)) {
    throwError(ATTEMPT_ERROR_MESSAGES.NOT_INTEGER);
  }
};

const validatePlus = (attemptCount) => {
  if (!AttemptCountValidator.isPlus(attemptCount)) {
    throwError(ATTEMPT_ERROR_MESSAGES.MINUS);
  }
};

const validateAttemptCount = (attempt) =>
  runValidators([validateInteger, validatePlus], attempt);

export default validateAttemptCount;
