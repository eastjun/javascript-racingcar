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
  raceCountVaildators.map((raceCountVaildator) => {
    raceCountVaildator(number);
  });
};

export { validateRaceCount };
