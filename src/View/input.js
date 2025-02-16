import { INPUT } from './Constants/query.js';
import { readLineAsync } from './utils.js';

export const getCarsName = async () => {
  return readLineAsync(`${INPUT.CARS_NAME}\n`);
};

export const getGameCount = async () => {
  return readLineAsync(`${INPUT.GAME_COUNT}\n`);
};
