/* eslint-disable */

import { validateRaceCarNames } from '../src/view/validators/RaceCarNameValidator';

test.each([
  ['', false],
  ['a', true],
  ['abcde', true],
  ['abcdef', false],
])('자동차 이름 유효성 검사를 통과하는지 확인한다', (raceCarName, result) => {
  if (result) {
    expect(() => validateRaceCarNames(raceCarName)).not.toThrow();
  } else {
    expect(() => validateRaceCarNames(raceCarName)).toThrow();
  }
});
