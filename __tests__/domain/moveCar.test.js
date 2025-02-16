import moveCar from "../../src/domain/moveCar.js";

describe("domain/moveCar", () => {
  const car = { name: "가", count: 0 };

  test.each([
    [0, { name: "가", count: 0 }],
    [1, { name: "가", count: 0 }],
    [4, { name: "가", count: 1 }],
    [5, { name: "가", count: 1 }]
  ])(
    "randomNumber가 %i이면 car의 count는 %j가 되어야 한다",
    (randomNumber, expectedReturnValue) => {
      const car = { name: "가", count: 0 };
      const result = moveCar(car, randomNumber);
      expect(result).toEqual(expectedReturnValue);
    }
  );
});
