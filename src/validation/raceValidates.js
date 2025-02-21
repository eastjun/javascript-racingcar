import { getRandomNumber } from '../utils/randomNumber.js';
import { CAR_MOVE_STANDARD } from '../constants/MAGIC_NUMBER.js';

export function canMove() {
  return getRandomNumber() >= CAR_MOVE_STANDARD;
}
