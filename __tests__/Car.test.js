import Car from '../src/Models/Car.js';

describe('Car 객체를 테스트', () => {
  test('객체가 잘 생성됐는지 확인한다.', () => {
    // given

    // when
    const car = new Car('재오');

    // then
    expect(car.name).toBe('재오');
  });

  test('자동차 위치 history 저장 테스트', () => {
    // when
    const car = new Car('재오');
    car.updateHistory(true);
    car.updateHistory(false);
    car.updateHistory(true);
    car.updateHistory(false);

    // then
    expect(car.history).toEqual([1, 1, 2, 2]);
  });
});

describe('자동차 이름 입력 검증 테스트', () => {
  const FAIL_CASE = ['재오상추앵버', '', '재오,상추,상추', '앵버'];
  const SUCCESS_CASE = ['재오,상추,앵버', '재,상,앵'];
  test.each(SUCCESS_CASE)('자동차 이름 성공 테스트', (carName) => {
    // when
    const carController = new CarController();
    // then
    expect(carController.validateCarName(carName)).toEqual(carName.split(','));
  });

  test.each(FAIL_CASE)('자동차 이름 실패 테스트', (carName) => {
    // when
    const carController = new CarController();
    // then
    expect(() => carController.validateCarName(carName)).toThrow('[ERROR]');
  });
});
