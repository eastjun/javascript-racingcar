import Car from "../src/domain/Car.js";

describe("자동차 모델 테스트", () => {
  test("자동차는 이름이랑 현재위치 정도를 가질 수 있다.", () => {
    const name = "데이지";
    const car = new Car(name);

    expect(car.name).toBe(name);
  });
  test("자동차는 전진할 수 있다.", () => {
    const name = "머핀";
    const car = new Car(name);

    car.move(5);

    expect(car.position).toBe(1);
  });
});
