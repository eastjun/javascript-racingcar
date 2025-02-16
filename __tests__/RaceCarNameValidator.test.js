/* eslint-disable */

import {
  vaildateSeperatedRaceCarName,
  validateRaceCarNames,
} from '../src/view/validators/RaceCarNameValidator';

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

test.each([[['a', 'b', 'a']], [['a', 'b', '']]])(
  '자동차 이름 배열에 대한 유효성 검사를 통과하는지 확인한다.',
  (names) => {
    console.log(names);
    expect(() => vaildateSeperatedRaceCarName(names)).toThrow();
  }
);
