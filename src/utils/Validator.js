import DEFINITION from '../constants/Definition.js';

const ValidationUtils = {
  isEmpty: string => string.trim().length === 0,
  isDuplicated: array => new Set(array).size !== array.length,
  isArrayLengthOver: (array, max) => array.length > max,
  isStringLengthOver: (string, max) => [...string].length > max,
  isArrayLengthRangeOver: (array, min, max) => array.length > max || array.length < min,
  isRangeOver: (number, min, max) => number < min || number > max,
  isDecimal: number => number % 1 !== 0,
  isNotNumber: number => number === null || typeof number !== 'number' || Number.isNaN(number),
  isNotString: string => typeof string !== 'string',
};

const Validator = {
  validateInputNames: arrayNames => {
    const result = {
      IS_ARRAY_LENGTH_RANGE_OVER: ValidationUtils.isArrayLengthRangeOver(arrayNames, DEFINITION.MIN_CAR_RACERS, DEFINITION.MAX_CAR_RACERS),
      IS_DUPLICATED: ValidationUtils.isDuplicated(arrayNames),
      IS_EMPTY: false,
      IS_STRING_LENGTH_OVER: false,
      IS_NOT_STRING: false,
    };

    arrayNames.forEach(name => {
      if (ValidationUtils.isEmpty(name)) result.IS_EMPTY = true;
      if (ValidationUtils.isStringLengthOver(name, DEFINITION.MAX_NAME_LENGTH)) result.IS_STRING_LENGTH_OVER = true;
      if (ValidationUtils.isNotString(name)) result.IS_NOT_STRING = true;
    });
    return result;
  },
  validateInputTryNumber: number => {
    const result = {
      IS_RANGE_OVER: ValidationUtils.isRangeOver(number, DEFINITION.MIN_GAME, DEFINITION.MAX_GAME),
      IS_DECIMAL: ValidationUtils.isDecimal(number),
      IS_NOT_NUMBER: ValidationUtils.isNotNumber(number),
    };
    return result;
  },
  validateCarName: string => {
    const result = {
      IS_STRING_LENGTH_OVER: ValidationUtils.isStringLengthOver(string),
      IS_STRING: ValidationUtils.isNotString(string),
    };
    return result;
  },
};

export default Validator;
