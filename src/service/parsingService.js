import { withTryCatch } from '../util/errorHandler.js';
import { Validation } from '../validation/Validation.js';
import { ERROR_MESSAGE } from '../settings/ErrorMessage.js';

export const tryParse = (parser) => withTryCatch(parser);

export const parseNames = (input) => {
  const nameList = input.split(',');

  if (!Validation.isNameNotEmpty(nameList)) {
    throw new Error(ERROR_MESSAGE.EMPTY_NAME);
  }
  if (!Validation.isNameTooLong(nameList)) {
    throw new Error(ERROR_MESSAGE.NAME_TOO_LONG);
  }
  if (!Validation.isNameDuplicate(nameList)) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
  }

  return nameList;
};

export const parseRound = (input) => {
  if (!Validation.isInteger(input)) {
    throw new Error(ERROR_MESSAGE.NOT_INTEGER);
  }
  if (!Validation.isPositive(input)) {
    throw new Error(ERROR_MESSAGE.NOT_POSITIVE);
  }

  return Number(input);
};

export const parseInput = async (getInput, parser) => {
  const safeParser = tryParse(parser);
  while (true) {
    const input = await getInput();
    const result = safeParser(input);

    if (result) return result;
  }
};
