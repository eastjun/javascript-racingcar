import Car from '../src/domain/Car.js';

const CAR_NAME = '피터';

describe('Car', () => {
  let car;
  beforeEach(() => {
    car = new Car(CAR_NAME);
  });

  describe('constructor()', () => {
    test('Car을 생성한다.', () => {
      expect(car).toBeDefined();
    });

    test('Car은 초기에 position은 0이다.', () => {
      expect(car.position).toBe(0);
    });

    test('Car는 생성자 함수에 전달한 인자의 name을 가진다.', () => {
      expect(car.name).toBe(CAR_NAME);
    });
  });

  describe('go()', () => {
    test('한칸 앞으로 간다.', () => {
      car.go();

      expect(car.position).toBe(1);
    });
  });
});
