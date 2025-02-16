import ERROR from "../constants/Error.js";

const ValidationUtils = {
    isEmpty: string => string.trim().length === 0,
    isDuplicated: array => new Set(array).size !== array.length,
    isArrayLengthOver: (array, max) => array.length > max,
    isStringLengthOver: (string, max) => [...string].length > max,
    isRangeOver: (number, min, max) => number < min || number > max,
    isDecimal: number => number % 1 !== 0,
    isNotNumber: number => number === null || typeof number !== 'number' || Number.isNaN(number),
    isNotString: string => typeof string !== 'string',
}

const Validator = {
    validateInputNames: (arrayNames, maxLength) => {
        const validationRules = [
            { check: ValidationUtils.isEmpty, code: ERROR.CODE.IS_EMPTY },
            { check: (name) => ValidationUtils.isStringLengthOver(name, maxLength), code: ERROR.CODE.IS_STRING_LENGTH_OVER },
        ];

        const validationArrayRules = [
            { check: (arrayNames) => ValidationUtils.isDuplicated(arrayNames), code: ERROR.CODE.IS_DUPLICATE },
            { check: (arrayNames) => ValidationUtils.isArrayLengthOver(arrayNames, maxLength), code: ERROR.CODE.IS_ARRAY_LENGTH_OVER },
        ];

        return [
            ...arrayNames.flatMap((name) => 
                validationRules.filter(({ check }) => check(name)).map(({ code }) => code)
            ),
            ...validationArrayRules.filter(({ check }) => check(arrayNames)).map(({ code }) => code),
        ];
    },
}

export default Validator;