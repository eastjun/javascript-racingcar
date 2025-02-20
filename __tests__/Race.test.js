import Race from '../src/domain/Race.js';
import Car from '../src/domain/Car.js';

describe('자동차 게임 테스트', () => {
  test('Race는 전달받은 자동차들로 게임을 진행한다', () => {
    // given
    const car1 = new Car('pobi');
    const car2 = new Car('woni');
    const cars = [car1, car2];

    // when
    const race = new Race(cars);

    // then
    expect(race.cars).toEqual(cars); // 전달받은 자동차들이 그대로 설정되었는지 확인
  });
});
