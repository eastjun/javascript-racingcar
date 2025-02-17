import Car from "../src/domain/Car.js";
import { MOVE_CONDITION } from "../src/constants/Constants.js";

describe("Car 클래스 테스트", () => {
  test("자동차 객체가 잘 생성되는가", () => {
    const car = new Car("메타");
    expect(car).not.toBeUndefined();
  });

  describe("Car 이름 유효성 검증", () => {
    test("Car는 이름이 존재해야한다.", () => {
      expect(() => new Car("")).toThrow("[ERROR] 자동차 이름에 빈 값이 포함되어 있습니다.");
    });

    test.each(["메타의 람보르기니", "도밥의 페라리", "수이의 벤츠"])("Car의 이름은 1자 이상 5자 이내여야한다", (name) => {
      expect(() => new Car(name).toThrow(`[ERROR] 자동차 이름은 ${CAR_NAME_LENGTH.MAX}자 이상 ${CAR_NAME_LENGTH.MIN}자 이하여야합니다.`));
    });
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
