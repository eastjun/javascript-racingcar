import { RACE } from '../constants/race.js';
import getRandomNumber from '../utils/getRandomNumber.js';

class MoveStrategy {
  static randomMove() {
    return getRandomNumber() >= RACE.FOWARD_THRESHOLD;
  }
}

export default MoveStrategy;
