import { MIN_FORWARD_NUMBER } from '../src/constants/common.js';
import Car from '../src/Models/Car.js';
import Race from '../src/Models/Race.js';

describe('우승자 선별 테스트', () => {
  let CAR_NAMES;
  let TRY_COUNT;
  let CARS;
  let race;

  beforeEach(() => {
    CAR_NAMES = ['앵버', '재오', '상추'];
    TRY_COUNT = 2;
    CARS = CAR_NAMES.map((name) => new Car(name, CAR_NAMES));
    race = new Race(CARS, TRY_COUNT);
  });

  test('이동 가능 여부 판단 테스트', () => {
    // then
    expect(race.canMove(MIN_FORWARD_NUMBER - 1)).toBe(false);
  });

  test('가장 많이 이동된 값 반환 테스트', () => {
    CARS[0].setPosition(MIN_FORWARD_NUMBER - 1);
    CARS[1].setPosition(MIN_FORWARD_NUMBER - 2);
    CARS[2].setPosition(MIN_FORWARD_NUMBER);

    // then
    expect(race.getMaxPosition()).toEqual(MIN_FORWARD_NUMBER);
  });

  test('우승자 선별 테스트', () => {
    // when
    CARS[0].setPosition(1);
    CARS[1].setPosition(2);
    CARS[2].setPosition(2);

    // then
    expect(race.getWinner()).toEqual([CAR_NAMES[1], CAR_NAMES[2]]);
  });
});
