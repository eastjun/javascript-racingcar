import {
  validateInteger,
  validateNumeric,
  validatePositiveNumber,
} from './validator.js';

const raceCountVaildators = [
  validateNumeric,
  validatePositiveNumber,
  validateInteger,
];

const validateRaceCount = (number) => {
  raceCountVaildators.forEach((raceCountVaildator) => {
    raceCountVaildator(number);
  });
};

export { validateRaceCount };
