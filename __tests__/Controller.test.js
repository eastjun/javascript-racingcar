import Controller from "../src/controller/Controller.js";
import Car from "../src/model/Car.js";

describe("controller", () => {
  let controller;
  let car1;
  let car2;

  beforeEach(() => {
    car1 = new Car("seo");
    car2 = new Car("ohgus");
    controller = new Controller();
  });

  test("우승자 리스트를 가져올 수 있다.", () => {
    car1.move(1);
    car2.move(4);

    const winners = controller.getWinners([car1, car2]);

    expect(winners.length).toBe(1);
  });

  test("우승자는 여러명일 수 있다.", () => {
    car1.move(4);
    car2.move(4);

    const winners = controller.getWinners([car1, car2]);

    expect(winners.length).toBe(2);
  });
});
