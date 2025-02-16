import Car from "../src/domain/Car.js";
import { ERROR_MESSAGE } from "../src/config/errorConstants.js";
import CarError from "../src/utils/error/CarError.js";

describe("Car 객체 테스트", () => {
  test.each(["happy", "h"])("자동차 생성 테스트", (name) => {
    const car = new Car(name);

    expect(car.name).toBe(name);
  });

  describe("자동차 이동 테스트", () => {
    test("자동차 전진 테스트", () => {
      const car = new Car("happy");

      car.move(() => true);

      expect(car.position).toBe(1);
    });

    test("자동차 멈춤 테스트", () => {
      const car = new Car("happy");

      car.move(() => false);

      expect(car.position).toBe(0);
    });
  });

  describe("자동차 이름 예외 테스트", () => {
    test("자동차 이름 최대 길이 예외 테스트", () => {
      expect(() => {
        new Car("happyy");
      }).toThrow(new CarError(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH));
    });

    test("자동차 이름 최소 길이 예외 테스트", () => {
      expect(() => {
        new Car("");
      }).toThrow(new CarError(ERROR_MESSAGE.CAR_NAME_MIN_LENGTH));
    });

    test("자동차 이름 영어/한글 입력 예외 테스트", () => {
      expect(() => {
        new Car(1);
      }).toThrow(new CarError(ERROR_MESSAGE.CAR_NAME_KOREAN_AND_ENGLISH));
    });
  });
});
