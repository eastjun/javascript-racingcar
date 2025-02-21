import Race from '../src/domain/Race';
import Car from '../src/domain/Car.js';

describe('Race 객체 테스트', () => {
  test('자동차 리스트가 잘 생성되는가', () => {
    const cars = ['상추', '재오', '앵버'].map((name) => new Car(name));
    const race = new Race(cars, 4);
    expect(race.cars.length).toBe(3);
    expect(race.tryCount).toBe(4);
  });

  test('tryMove() 실행 후 시도 결과가 history에 잘 저장되는가', () => {
    const cars = ['상추', '재오', '앵버'].map((name) => new Car(name));
    const race = new Race(cars, 3);

    race.tryMove();

    expect(race.carPositionHistory.getHistory('상추').length).toBe(3);
  });

  test('가장 멀리 떨어진 위치에 있는 자동차가 우승자다.', () => {
    const cars = ['상추', '재오', '앵버'].map((name) => new Car(name));
    const race = new Race(cars, 3);

    cars[0].move();
    cars[0].move();
    cars[0].move();
    cars[1].move();
    cars[1].move();
    cars[1].move();
    cars[2].move();

    const winners = race.getWinner();

    expect(winners).toEqual(['상추', '재오']);
  });
});
