import { CAR_MOVE_STANDARD } from '../src/constants/MAGIC_NUMBER.js';
import Car from '../src/domain/Car.js';
import { splitString } from '../src/utils/separator.js';
import { checkCarName, checkCarCount, checkCarNameDuplicate } from '../src/validation/carValidates.js';

describe('경주할 자동차 이름 입력 검증 테스트', () => {
  test('자동차는 이름을 가져야 한다.', () => {
    const car = new Car('재오');

    expect(car.name).toBe('재오');
  });

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

describe('자동차가 잘 움직이는지 테스트', () => {
  const car = new Car('상추');

  car.move(4 >= CAR_MOVE_STANDARD);
  test('자동차는 4 이상의 숫자를 받으면 전진할 수 있다.', () => {
    expect(car.position).toBe(1);
  });
});
