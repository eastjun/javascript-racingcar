import Car from "../src/domain/Car.js";

describe("자동차 객체 테스트", () => {
  test("객체 정상 생성", () => {
    expect(() => {
      new Car("ariel");
    }).not.toThrow();
  });

  test("객체 정상 생성 및 초기값 확인", () => {
    const car = new Car("ariel");
    expect(car.name).toBe("ariel");
    expect(car.position).toBe(0);
  });

  test("이동에 따른 위치 변화 확인: 이동 조건 부합", () => {
    const car = new Car("ariel");
    car.move(5, 1);
    expect(car.position).toBe(1);
  });

  test("이동에 따른 위치 변화 확인: 이동 조건 부적합", () => {
    const car = new Car("ariel");
    car.move(1, 3);
    expect(car.position).toBe(0);
  });
});