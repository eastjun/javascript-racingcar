import { CAR_MOVE_STANDARD } from '../src/constants/MAGIC_NUMBER.js';
import Car from '../src/domain/Car.js';

describe('경주할 자동차 이름 입력 검증 테스트', () => {
  test('자동차는 이름을 가져야 한다.', () => {
    const car = new Car('재오');

    expect(car.name).toBe('재오');
  });
});
