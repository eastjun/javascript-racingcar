import * as fc from "fast-check";
import CarCount from "../src/domains/CarCount";

describe("자동차 갯수 유효성 테스트", () => {
  test("자동차 갯수가 1개인 경우 에러가 발생한다.", () => {
    const carNames = ["pobi"];
    expect(() => CarCount.validate(carNames)).toThrow();
  });

  test("자동차 갯수가 101개 이상인 경우 에러가 발생한다.", () => {
    const carNameArb = fc.string({ minLength: 1, maxLength: 5 });
    const carNamesArb = fc.uniqueArray(carNameArb, {
      minLength: 101,
      maxLength: 101,
    });
    const [carNames] = fc.sample(carNamesArb, 1);
    expect(() => CarCount.validate(carNames)).toThrow();
  });

  test("자동차 갯수가 2개 이상, 100개 이하이어야 한다.", () => {
    const carNameArb = fc.string({ minLength: 1, maxLength: 5 });
    const carNamesArb = fc.uniqueArray(carNameArb, {
      minLength: 2,
      maxLength: 100,
    });
    const carNames = fc.sample(carNamesArb, 10);

    for (let i = 0; i < carNames.length; i++) {
      expect(() => CarCount.validate(carNames[i])).not.toThrow();
    }
  });
});
