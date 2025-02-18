import {
  validateLimitLength,
  validatePositiveLength,
  validatePositiveNumber,
  validateNumeric,
  validateInteger,
  validateDuplicateInput,
} from '../src/view/validators/validator.js';

describe('validate 테스트', () => {
  test.each([
    ['aaaa', true],
    ['aaaaa', true],
    ['aaaaaa', false],
    ['aaaaaaaaaa', false],
  ])('차 이름의 길이가 5자 이하인지 확인한다.', (raceCarName, result) => {
    if (result) {
      expect(() => validateLimitLength(raceCarName)).not.toThrow();
    } else {
      expect(() => validateLimitLength(raceCarName)).toThrow();
    }
  });

  test('차 이름이 빈값이 아닌지 확인한다', () => {
    expect(() => validatePositiveLength('')).toThrow();
    expect(() => validatePositiveLength('aa')).not.toThrow();
  });

  test('실행횟수가 양수인지 확인한다', () => {
    expect(() => validatePositiveNumber(-1)).toThrow();
    expect(() => validatePositiveNumber(1)).not.toThrow();
  });

  test('실행횟수가 숫자인지 확인한다', () => {
    expect(() => validateNumeric(2)).not.toThrow();
    expect(() => validateNumeric(NaN)).toThrow();
  });

  test('실행횟수가 정수수인지 확인한다', () => {
    expect(() => validateInteger(1.1)).toThrow();
    expect(() => validateInteger(2)).not.toThrow();
  });
});

test.each([
  [['a', 'b', 'c'], false],
  [['a', 'a', 'c'], true],
  [['a', 'a', 'a'], true],
])('자동차 이름이 중복되지 않는지 확인한다.', (carNameList, result) => {
  if (result) {
    expect(() => validateDuplicateInput(carNameList)).toThrow();
  } else {
    expect(() => validateDuplicateInput(carNameList)).not.toThrow();
  }
});

test('사용자로부터 입력받은 자동차 list의 마지막이 컴마로 종료되지 않는지 확인한다', () => {
  const RACE_CAR_NAMES = ['aa', 'b', ''];
  expect(() => validateEndWithDelimiter(RACE_CAR_NAMES)).toThrow();
});
