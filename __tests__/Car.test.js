import ERROR_MESSAGE from '../src/error/message.js';
import Car from '../src/model/Car.js';
import Random from '../src/model/Random.js';

// Car validate 메소드 테스트
describe('Car 이름 테스트', () => {
  // 올바른 테스트
  test.each`
    testTitle          | carName   | expected
    ${'올바른 경우의'} | ${'pobi'} | ${'pobi'}
    ${'올바른 경우의'} | ${'cron'} | ${'cron'}
  `(
    '$testTitle테스트는 $carName이 입력되면 $expected 이름을 출력한다.',
    ({ carName, expected }) => {
      expect(new Car(carName).getName()).toEqual(expected);
    },
  );

  // 예외 테스트
  test.each`
    testTitle                        | carName     | expected
    ${'빈 칸이 들어온 경우'}         | ${''}       | ${ERROR_MESSAGE.nameLength}
    ${'5자 초과 이름이 들어온 경우'} | ${'tenten'} | ${ERROR_MESSAGE.nameLength}
  `('$testTitle테스트는 $carName이 입력되면 $expected 에러를 던진다.', ({ carName, expected }) => {
    expect(() => new Car(carName)).toThrow(expected);
  });
});

// Car forward 테스트

// 랜덤 함수가 고정값을 반환하도록 하는 함수
export const mockRandoms = (numbers) => {
  Random.create = jest.fn();
  numbers.reduce((acc, num) => acc.mockReturnValueOnce(num), Random.create);
};

describe('각 자동차가 올바르게 전진하고 정지하는 지 테스트', () => {
  // given
  const goValues = [9, 4];
  const notGoValues = [0, 3];
  mockRandoms([...goValues, ...notGoValues]);

  // when
  const car = new Car('pobi');
  beforeEach(() => car.forward());

  // then
  // 전진 테스트
  test.each`
    testTitle            | expected
    ${'전진하는 경우 1'} | ${1}
    ${'전진하는 경우 2'} | ${2}
  `('$testTitle 테스트가 모두 전진하는지 테스트', ({ expected }) => {
    expect(car.getLocation()).toEqual(expected);
  });

  // 정지 테스트
  test.each`
    testTitle            | expected
    ${'정지하는 경우 1'} | ${2}
    ${'정지하는 경우 2'} | ${2}
  `('$testTitle 테스트가 모두 정지하는지 테스트', ({ expected }) => {
    expect(car.getLocation()).toEqual(expected);
  });
});
