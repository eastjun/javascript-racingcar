import { RANDOM_RANGE } from '../constants/MAGIC_NUMBER';

export function getRandomNumber() {
  return Math.floor(Math.random() * RANDOM_RANGE);
}
