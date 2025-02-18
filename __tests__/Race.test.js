import Race from '../src/domain/Race.js';

describe('자동차 게임 테스트', () => {
  test('레이스 생성 시 주어진 이름으로 자동차들이 생성된다', () => {
    // given
    const carNames = ['bunju', 'peter', 'pobi'];

    // when
    const race = new Race(carNames);

    // then
    expect(race.cars.length).toBe(carNames.length);
    race.cars.forEach((car, index) => {
      expect(car.name).toBe(carNames[index]);
    });
  });
});
