import retryUntilValid from "../utils/retryUntilValid.js";
import validateCarNames from "../utils/validateCarNames.js";
import { validateMoveCount } from "../utils/validateMoveCount.js";
import { PROMPT } from "../constants/messages.js";

export const getCarNames = async () => {
  return retryUntilValid(PROMPT.GET_CAR_NAMES, validateCarNames);
};

export const getMoveCount = async () => {
  return retryUntilValid(PROMPT.GET_MOVE_COUNT, validateMoveCount);
};
