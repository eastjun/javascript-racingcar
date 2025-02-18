import { CAR_NAME, TRY_COUNT } from "../constants/race.js";

export const hasEmptyString = (arr) => {
  return arr.some((item) => item === "");
};

export const isLengthLongerThanFive = (arr) => {
  return arr.some((item) => item.length > CAR_NAME.MAX_LENGTH);
};

export const isNumberZero = (number) => {
  return Number(number) === TRY_COUNT.MIN_NUM;
};

export const hasDuplicateNames = (arr) => {
  return new Set(arr).size !== arr.length;
};
