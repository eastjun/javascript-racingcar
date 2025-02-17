import Car from '../src/domain/Car.js';
import { checkCarName, checkIsEmpty } from '../src/validation/carValidates.js';
import { MAX_CAR_NAME_LENGTH, MIN_CAR_NAME_LENGTH } from '../src/constants/MAGIC_NUMBER.js';

describe('경주할 자동차 이름 입력 검증 테스트', () => {
  test('자동차는 이름을 가져야 한다.', () => {
    // given

    // when
    const car = new Car('재오');

    // then
    expect(car.name).toBe('재오');
  });

  test.each(['', '상추상추상추'])('자동차 이름은 1~5자여야 한다.', (invalidName) => {
    // given
    // when
    // then
    expect(() => {
      checkCarName(invalidName);
    }).toThrow('[ERROR]');
  });
});
