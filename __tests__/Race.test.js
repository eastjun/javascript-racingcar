import Car from '../src/Models/Car.js';
import Race from '../src/Models/Race.js';

describe('시도 횟수 입력 검증 테스트', () => {
  const FAIL_CASE = ['50', '', '3.4'];
  const SUCCESS_CASE = ['15', '5'];
  test.each(SUCCESS_CASE)('시도 횟수 성공 테스트', (tryCount) => {
    // when
    const carController = new CarController();
    // then
    expect(carController.validateTryCount(tryCount)).toEqual(Number(tryCount));
  });

  test.each(FAIL_CASE)('시도 횟수 실패 테스트', (tryCount) => {
    // when
    const carController = new CarController();
    // then
    expect(() => carController.validateTryCount(tryCount)).toThrow('[ERROR]');
  });
});

describe('우승자 선별 테스트', () => {
  test('우승자가 잘 선별되는지 테스트한다.', () => {
    // given
    const carController = new CarController();
    const car1 = new Car('재오');
    const car2 = new Car('앵버');
    const car3 = new Car('상추');
    const cars = [car1, car2, car3];
    const tryCount = 2;

    mockRandom([3, 4, 3, 3, 4, 3]);

    // when
    carController.tryMove(cars, tryCount);

    // then
    expect(carController.getWinner(cars)).toEqual(['앵버']);
  });
});
