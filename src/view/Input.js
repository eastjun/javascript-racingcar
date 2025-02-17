import { DELIMITER, INPUT_MESSAGE } from '../Const.js';
import { printLine } from './Output.js';
import readLineAsync from './ReadLineAsync.js';
import { validateRaceCarNames } from './validators/RaceCarNameValidator.js';
import { validateRaceCount } from './validators/RaceCount.js';
import { validateDuplicateInput } from './validators/validator.js';

const getSeparatedCarNames = async () => {
  const raceCarName = await readLineAsync(INPUT_MESSAGE.raceCarNames + '\n');
  return raceCarName.split(DELIMITER);
};

const getNumericRaceCount = async () => {
  return Number(await readLineAsync(INPUT_MESSAGE.raceCount + '\n'));
};

const retryOnError = async (condition) => {
  try {
    return await condition();
  } catch (e) {
    printLine(e.message);
    return await retryOnError(condition);
  }
};

const getValidRaceCarNames = async () => {
  return await retryOnError(async () => {
    const raceCarNames = await getSeparatedCarNames();

    validateDuplicateInput(raceCarNames);
    raceCarNames.forEach((raceCarName) => {
      validateRaceCarNames(raceCarName);
    });

    return raceCarNames;
  });
};

const getValidRaceCount = async () => {
  return await retryOnError(async () => {
    const raceCount = await getNumericRaceCount();
    validateRaceCount(raceCount);

    return raceCount;
  });
};

export { getValidRaceCarNames, getValidRaceCount };
