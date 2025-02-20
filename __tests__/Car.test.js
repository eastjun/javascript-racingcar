import { MIN_FORWARD_NUMBER } from '../src/constants/common.js';
import Car from '../src/Models/Car.js';

describe('Car 객체를 테스트', () => {
  let car;
  const CAR_NAMES = ['앵버', '재오', '상추'];

  beforeEach(() => {
    car = new Car(CAR_NAMES[0], CAR_NAMES);
  });

  test('객체가 잘 생성됐는지 확인한다.', () => {
    // then
    expect(car.name).toBe(CAR_NAMES[0]);
  });

  test('자동차 현재 위치 저장 테스트', () => {
    // when
    car.movePosition(MIN_FORWARD_NUMBER - 1);
    car.movePosition(MIN_FORWARD_NUMBER);
    car.movePosition(MIN_FORWARD_NUMBER - 1);
    car.movePosition(MIN_FORWARD_NUMBER);

    // then
    expect(car.getPosition()).toEqual(2);
  });

  test('자동차 위치 히스토리 저장 테스트', () => {
    // when
    car.movePosition(MIN_FORWARD_NUMBER + 1);
    car.movePosition(MIN_FORWARD_NUMBER + 4);
    car.movePosition(MIN_FORWARD_NUMBER - 1);
    car.movePosition(MIN_FORWARD_NUMBER - 2);

    // then
    expect(car.getHistory()).toEqual([1, 2, 2, 2]);
  });
});
