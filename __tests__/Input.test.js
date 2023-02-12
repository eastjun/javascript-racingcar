/* eslint-disable no-undef */
const App = require('../src/index.js');
const IO = require('../src/utils/IO.js');
const {
  validateCarNames,
  validateTryCount,
} = require('../src/utils/InputValidator.js');
const { ERROR_MESSAGE } = require('../src/data/constants.js');

describe('Input Test', () => {
  const app = new App();

  test('Car name length validation test', () => {
    expect(() => {
      validateCarNames(['pobisss', 'crongsss', 'honuxss']);
    }).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR);
  });

  test('Try count validation test', () => {
    expect(() => {
      validateTryCount('가');
    }).toThrow(ERROR_MESSAGE.TRY_COUNT_TYPE_ERROR);
  });
});
