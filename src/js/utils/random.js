import { GAME_NUMBERS } from './constants.js';

export const generateRandomNumber = () =>
  Math.floor(Math.random() * GAME_NUMBERS.MAX_RANDOM_NUMBER);
