import { INPUT } from './Constants/query.js';
import { NEW_LINE } from './Constants/message.js';
import { readLineAsync } from './utils.js';

export const getCarsName = async () => {
  return readLineAsync(`${INPUT.CARS_NAME}${NEW_LINE}`);
};

export const getGameCount = async () => {
  return readLineAsync(`${INPUT.GAME_COUNT}${NEW_LINE}`);
};
