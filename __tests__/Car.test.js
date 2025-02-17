import Car from '../src/domain/Car.js';
import { ERROR_PREFIX, CAR_NAME_LIST_ERROR_MESSAGES, CAR_NAME_CONDITION } from '../src/constants/Constants.js';

describe('Car 클래스 테스트', () => {
  const car = new Car('메타');

  test(`자동차 이름이 올바르게 저장 되었는지 테스트`, () => {
    expect(car.name).toBe('메타');
  });

  test('자동차는 이동할 수 있다', () => {
    car.move();
    expect(car.position).toBe(1);
  });

  test.each(["", "\n", " "])(`자동차 이름이 빈 값인 경우 에러 발생`, (name) => {
    expect(() => new Car(name)).toThrow(
      ERROR_PREFIX + ' ' + CAR_NAME_LIST_ERROR_MESSAGES.NAME_LENGTH_MIN
    );
  });

  test.each(["메타의 람보르기니", "수이의거북이"])(`자동차 이름이 ${CAR_NAME_CONDITION.LENGTH_MAX}글자를 초과한 경우 에러 발생`, (name) => {
    expect(() => new Car(name)).toThrow(
      ERROR_PREFIX + ' ' + CAR_NAME_LIST_ERROR_MESSAGES.NAME_LENGTH_MAX
    );
  });
});
