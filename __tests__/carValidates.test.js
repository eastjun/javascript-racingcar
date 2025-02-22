import { splitString } from '../src/utils/separator.js';
import { checkCarName, checkCarCount, checkCarNameDuplicate } from '../src/validation/carValidates.js';

describe('자동차 유효성 검증', () => {
  test.each(['', '상추상추상추'])('자동차 이름은 1~5자여야 한다.', (invalidName) => {
    expect(() => {
      checkCarName(invalidName);
    }).toThrow('[ERROR]');
  });

  test('자동차는 쉼표를 기준으로 구분한다.', () => {
    const carNamesInput = '상추/재오/앵버';
    const carNames = splitString(carNamesInput);

    expect(() => {
      checkCarCount(carNames);
    }).toThrow('[ERROR]');
  });

  test('자동차는 1대이면 안된다.', () => {
    const carNamesInput = '상추';
    const carNames = splitString(carNamesInput);

    expect(() => {
      checkCarCount(carNames);
    }).toThrow('[ERROR]');
  });

  test('자동차는 2대 이상이어야 한다.', () => {
    const carNamesInput = '상추,재오';
    const carNames = splitString(carNamesInput);

    expect(() => {
      checkCarCount(carNames);
    }).not.toThrow('[ERROR]');
  });

  test('자동차 이름은 중복되면 안된다.', () => {
    const carNamesInput = '상추,재오,재오';
    const carNames = splitString(carNamesInput);

    expect(() => {
      checkCarNameDuplicate(carNames);
    }).toThrow('[ERROR]');
  });
});
