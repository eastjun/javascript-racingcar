import { systemSetting } from "../constants/systemSetting.js";

export const Validation = {
  isNameNotEmpty(parsedString) {
    return !parsedString.some((name) => name.length === 0);
  },
  isNameLengthValid(parsedString) {
    return !parsedString.some((name) => name.length > systemSetting.NAME_LIMIT);
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
