import Car from "../src/domain/Car.js";

test(`자동차 객체가 잘 생성되는가`, () => {
  const car = new Car("메타의 람보르기니");
  expect(car).not.toBeUndefined();
});

test("자동차는 이동할 수 있다", () => {
  const car = new Car();
  car.move();
  expect(car.position).toBe(1);
});
