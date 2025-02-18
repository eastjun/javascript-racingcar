import { isNumberZero } from "./validators.js";
import { ERROR } from "../constants/messages.js";

export const validateCount = (number) => {
  if (isNumberZero(number)) {
    throw new Error(ERROR.TRY_COUNT.BELOW_MIN);
  }

  if (isNaN(number)) {
    throw new Error(ERROR.TRY_COUNT.NOT_NUMBER);
  }

  if (number === "") {
    throw new Error(ERROR.TRY_COUNT.EMPTY);
  }
};
