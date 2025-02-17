import Car from "../src/domains/Car";
import Race from "../src/domains/Race";
import MoveCondition from "../src/domains/MoveCondition";

describe("Race 클래스 테스트", () => {
  let race;
  beforeEach(() => {
    race = new Race();
  });

  test("입력한 사용자 이름을 통해 Car 객체를 만들 수 있다.", () => {
    const carNames = ["pobi", "crong", "honux"];

    const carModels = race.createCars(carNames);

    carModels.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });
  });

  test("레이싱 게임을 진행한다.", () => {
    const carModels = [new Car("pobi"), new Car("woni")];

    jest.spyOn(Math, "random");

    Math.random.mockReturnValue(0.5); // pobi car wins
    race.race(carModels, MoveCondition);

    expect(carModels[0].position).toBe(1);
  });

  test("레이스 결과를 구할 수 있다.", () => {
    const carModels = [new Car("pobi"), new Car("woni")];
    const expectedResult = ["pobi", "woni"];

    expect(race.getWinner(carModels)).toEqual(expectedResult);
  });
});
