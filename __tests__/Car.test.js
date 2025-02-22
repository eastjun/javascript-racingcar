import Car from '../src/domain/Car.js';

describe('Car 객체 테스트', () => {
  test('자동차는 이름을 가져야 한다.', () => {
    const car = new Car('재오');

    expect(car.name).toBe('재오');
  });

  test('자동차는 움직일 수 있다.', () => {
    const car = new Car('재오');

    car.move();

    expect(car.position).toBe(1);
  });
});
