import {
  hasDuplicateNames,
  hasEmptyString,
  isLengthLongerThanFive,
} from "./validators.js";
import { ERROR } from "../constants/messages.js";

export const validateCarNames = (carNamesArr) => {
  if (hasEmptyString(carNamesArr)) {
    throw new Error(ERROR.CAR_NAME.EMPTY);
  }

  if (isLengthLongerThanFive(carNamesArr)) {
    throw new Error(ERROR.CAR_NAME.EXCEEDS_MAX_LENGTH);
  }

  if (hasDuplicateNames(carNamesArr)) {
    throw new Error(ERROR.CAR_NAME.DUPLICATE);
  }
};
