import { ERROR_TRY_COUNT_MESSAGE } from "../constants/constants.js";
import Validator from "../utils/validator.js";

const validateTryCount = (input) => {
  const tryCount = Number(input);

  if (Validator.isNotNumber(tryCount)) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVALID_NUMBER);
  if (Validator.isNotInteger(tryCount)) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVAILD_INTEGER);
  if (Validator.isNotPositive(tryCount)) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE);

  return tryCount;
};

export default validateTryCount;
