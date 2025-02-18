import Car from '../../src/Model/Car.js';

describe('자동차(Car) 클래스', () => {
  test('자동차는 move()가 호출되면 위치가 증가해야 한다.', () => {
    const car = new Car('haku');

    car.move();

    expect(car.getPosition()).toBe(1);
  });

  test('자동차는 move()를 여러 번 호출하면 위치가 증가해야 한다.', () => {
    const car = new Car('haku');

    car.move();
    car.move();

    expect(car.getPosition()).toBe(2);
  });
});
