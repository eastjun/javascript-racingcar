import Car from "../src/domain/Car.js";
import { MOVE_CONDITION } from "../src/constants/Constants.js";

describe("Car 클래스 테스트", () => {
  test("자동차 객체가 잘 생성되는가", () => {
    const car = new Car("메타의 람보르기니");
    expect(car).not.toBeUndefined();
  });

  describe("move() 메서드 테스트", () => {
    test(`randomNumber가 ${MOVE_CONDITION - 1} 이하이면 자동차가 움직이지 않는다`, () => {
      const car = new Car("페라리");
      car.move(MOVE_CONDITION - 1);
      expect(car.position).toBe(0);
    });

    test(`randomNumber가 ${MOVE_CONDITION}이면 자동차가 움직인다`, () => {
      const car = new Car("벤츠");
      car.move(MOVE_CONDITION);
      expect(car.position).toBe(1);
    });

    test(`randomNumber가 ${MOVE_CONDITION + 1} 이상이면 자동차가 움직인다`, () => {
      const car = new Car("포르쉐");
      car.move(MOVE_CONDITION + 1);
      expect(car.position).toBe(1);
    });
  });
});
