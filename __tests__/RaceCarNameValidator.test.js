/* eslint-disable */

import { validateRaceCarNames } from '../src/view/validators/RaceCarNameValidator';
import { validateDuplicateName } from '../src/view/validators/validator';

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

test.each([
  [['a', 'b', 'c'], false],
  [['a', 'a', 'c'], true],
  [['a', 'a', 'a'], true],
])('자동차 이름이 중복되지 않는지 확인한다.', (carNameList, result) => {
  if (result) {
    expect(() => validateDuplicateName(carNameList)).toThrow();
  } else {
    expect(() => validateDuplicateName(carNameList)).not.toThrow();
  }
});
