import { CAR_NAME_BOUNDARY_LENGTH } from "../constant/constant.js";

const Validator = {
  isEmpty(str) {
    return str === "";
  },
  isOverLength(str) {
    return str.length > CAR_NAME_BOUNDARY_LENGTH;
  },
  isDuplicated(arr) {
    return new Set(arr).size !== arr.length;
  },
  isNotNumber(value) {
    return Number.isNaN(value);
  },
  isNotInteger(value) {
    return !Number.isInteger(value);
  },
  isNotPositive(value) {
    return value <= 0;
  },
};

export default Validator;
