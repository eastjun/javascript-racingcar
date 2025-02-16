import Car from "../src/domain/Car.js";

test(`자동차 객체가 잘 생성되는가`, () => {
  const car = new Car("메타의 람보르기니");
  expect(car).not.toBeUndefined();
});

test("randomNumber가 4 이상이면 자동차가 움직여야 한다", () => {
  const car = new Car();
  car.move(5);
  expect(car.position).toBe(1);
});

test("randomNumber가 3 미만이면 자동차가 움직이지 않는다", () => {
  const car = new Car();
  car.move(3);
  expect(car.position).toBe(0);
});
