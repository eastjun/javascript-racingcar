import { ERROR_CAR_NAMES_MESSAGE } from "../constant/constant.js";
import splitInput from "../utils/splitInput.js";
import Validator from "../utils/validator.js";

const validateCarNames = (input) => {
  const carNames = splitInput(input, ",");

  carNames.forEach((car) => {
    if (Validator.isEmpty(car)) throw new Error(ERROR_CAR_NAMES_MESSAGE.NOT_EXIST);
    if (Validator.isOverLength(car)) throw new Error(ERROR_CAR_NAMES_MESSAGE.OVER);
  });
  if (Validator.isDuplicated(carNames)) throw new Error(ERROR_CAR_NAMES_MESSAGE.DUPLICATE);

  return carNames;
};

export default validateCarNames;
