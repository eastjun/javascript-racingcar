import Car from '../src/Domain/Model/Car.js';
import Race from '../src/Domain/Model/Race.js';

describe('자동차 경주', () => {
  test('우승자 1명 찾기', () => {
    const gameCount = 3;
    const cars = ['pobi', 'woni'].map((name) => new Car(name));
    const race = new Race(gameCount, cars);

    cars[0].move();
    cars[0].move();
    cars[1].move();

    expect(race.getWinners()).toEqual(['pobi']);
  });

  test('공동 우승자 2명 찾기', () => {
    const gameCount = 3;
    const cars = ['pobi', 'woni'].map((name) => new Car(name));
    const race = new Race(gameCount, cars);

    cars[0].move();
    cars[0].move();
    cars[1].move();
    cars[1].move();

    expect(race.getWinners()).toEqual(['pobi', 'woni']);
  });
});
