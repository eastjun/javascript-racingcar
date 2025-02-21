import { ERROR_MESSAGE, MAX_NAME_LENGTH } from './constants.js';

function isEmpty(input) {
    if (!input.trim()) {
        throw new Error(ERROR_MESSAGE.IS_EMPTY);
    }
}

function carNameLength(input) {
    if (input.trim().length > MAX_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
    }
}

function isNumber(input) {
    if (Number.isNaN(input)) {
        throw new Error(ERROR_MESSAGE.IS_NUMBER);
    }
}

function isPositiveNumber(input) {
    if (input < 1) {
        throw new Error(ERROR_MESSAGE.IS_POSITIVE_NUMBER);
    }
}

function isInteger(input) {
    if (!Number.isInteger(input)) {
        throw new Error(ERROR_MESSAGE.IS_INTEGER);
    }
}

function carCount(input) {
    if (input.length < 2) {
        throw new Error(ERROR_MESSAGE.CAR_COUNT);
    }
}

const Validate = {
    isEmpty,
    carNameLength,
    isNumber,
    isPositiveNumber,
    isInteger,
    carCount,
};

export default Validate;
