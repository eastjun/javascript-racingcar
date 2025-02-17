import { CAR_MOVE_FORWARD } from '../src/Domain/Constants/rules.js';
import Car from '../src/Domain/Model/Car.js';

const MOVE_FORWARD = 4;
const MOVE_STOP = 3;

describe('자동차 생성', () => {
  test('자동차 2대 생성하기', () => {
    const carNames = ['pobi', 'woni'];
    const cars = carNames.map((carName) => new Car(carName));
    expect(cars.length).toBe(carNames.length);
  });
});

describe('자동차 움직임', () => {
  test('자동차 전진하기', () => {
    const car = new Car('테스트');
    if (MOVE_FORWARD >= CAR_MOVE_FORWARD) {
      car.move();
    }
    expect(car.getPosition()).toBe(1);
  });

  test('자동차 정지하기', () => {
    const car = new Car('테스트');
    if (MOVE_STOP >= CAR_MOVE_FORWARD) {
      car.move();
    }
    expect(car.getPosition()).toBe(0);
  });
});
