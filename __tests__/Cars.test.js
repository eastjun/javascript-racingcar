import Cars from "../src/Cars";
import { ERROR } from "../src/constant/constant";

describe("자동차 이름 입력 테스트", () => {
  test("입력한 자동차 이름들이 알맞게 출력되는지 확인한다", () => {
    // Arrange
    const carNames = ["a", "b", "c", "c"];

    // Act
    const cars = new Cars(carNames);

    expect(cars.getCarList).toThrow(ERROR.DUPLICATE);
  });
});
