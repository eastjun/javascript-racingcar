import Car from '../src/domain/Car';
import { CAR_MOVE_STANDARD } from '../src/constants/MAGIC_NUMBER';

describe('자동차가 잘 움직이는지 테스트', () => {
  const car = new Car('상추');

  car.move(4 >= CAR_MOVE_STANDARD);
  test('자동차는 4 이상의 숫자를 받으면 전진할 수 있다.', () => {
    expect(car.position).toBe(1);
  });
});
