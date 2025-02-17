import { SystemConstants } from "../../../javascript-lotto-test/src/constants/SystemConstants.js";

export const Validation = {
  isNameNotEmpty(parsedString) {
    return !parsedString.some((name) => name.length === 0);
  },
  isNameLengthValid(parsedString) {
    return !parsedString.some(
      (name) => name.length > SystemConstants.NAME_LIMIT
    );
  },
  isNameNotDuplicate(parsedString) {
    return parsedString.length === new Set(parsedString).size;
  },

  isInteger(input) {
    return Number.isInteger(Number(input));
  },

  isPositive(input) {
    return Number(input) > 0;
  },
};
