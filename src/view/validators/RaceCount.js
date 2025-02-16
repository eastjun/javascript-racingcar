import {
  validateInteger,
  validateNumeric,
  validatePositiveNumber,
} from './validator';

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
