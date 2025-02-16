import { validateLimitLength, validatePositiveLength } from './validator';

const raceCarNameValidators = [validateLimitLength, validatePositiveLength];

const validateRaceCarNames = (name) => {
  raceCarNameValidators.forEach((raceCarNameValidator) => {
    raceCarNameValidator(name);
  });
};

export { validateRaceCarNames };
