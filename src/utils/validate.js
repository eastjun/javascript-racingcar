import {
  CAR_MAX_COUNT,
  MAX_ATTEMPT,
  MIN_ATTEMPT,
} from "../config/constants.js";
import { ERROR_MESSAGE } from "../config/errorConstants.js";
import AtteptError from "./error/AttemptError.js";
import CarError from "./error/CarError.js";

export const validateCars = (cars, carNames) => {
  if (cars.length > CAR_MAX_COUNT)
    throw new CarError(ERROR_MESSAGE.CAR_MAX_COUNT);
  if (carNames.length !== new Set(carNames).size)
    throw new CarError(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
};

export const validateAttempt = (attempt) => {
  if (Number.isNaN(attempt))
    throw new AtteptError(ERROR_MESSAGE.INVALID_ATTEMPT_NUMBER);
  if (attempt < MIN_ATTEMPT)
    throw new AtteptError(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
  if (attempt > MAX_ATTEMPT)
    throw new AtteptError(ERROR_MESSAGE.ATTEMPT_TOO_HIGH);
};
