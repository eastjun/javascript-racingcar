/* eslint-disable */

import { validateRaceCount } from '../src/view/validators/RaceCount';

test.each([
  [-1, false],
  [NaN, false],
  [1.1, false],
  [30, true],
])(
  '자동차 경주 진행 횟수 유효성 검사를 통과하는지 확인한다',
  (raceCount, result) => {
    if (result) {
      expect(() => validateRaceCount(raceCount)).not.toThrow();
    } else {
      expect(() => validateRaceCount(raceCount)).toThrow();
    }
  }
);
