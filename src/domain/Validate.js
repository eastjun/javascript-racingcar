import { ERROR_MESSAGE, MAX_NAME_LENGTH } from './constants.js';
class Validate {
    isEmpty(input) {
        if (!input.trim())
            throw new Error(ERROR_MESSAGE.IS_EMPTY);
    }

    carNameLength(input) {
        if (input.trim().length > MAX_NAME_LENGTH)
            throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
    }

    isNumber(input) {
        if (Number.isNaN(input)) {
            throw new Error(ERROR_MESSAGE.IS_NUMBER);
        }
    }

    isPositiveNumber(input) {
        if (input < 1) {
            throw new Error(ERROR_MESSAGE.IS_POSITIVE_NUMBER);
        }
    }

    isInteger(input) {
        if (!Number.isInteger(input)) {
            throw new Error(ERROR_MESSAGE.IS_INTEGER);
        }
    }

    carCount(input) {
        if (input.length < 2) {
            throw new Error(ERROR_MESSAGE.CAR_COUNT);
        }
    }
}
export default Validate;
