import Car from "../src/domain/Car";
import Winner from "../src/domain/Winner";

describe("최종 우승자 선별 테스트", () => {
  test("최종 우승자를 뽑고 출력한다.(우승자가 1명인 경우)", () => {
    const CARS = [new Car("데이지", 3), new Car("머핀", 1)];

    const winners = new Winner();

    expect(
      winners.findWinner(CARS).map((winner) => winner.getName()),
    ).toStrictEqual(["데이지"]);
  });

  test("최종 우승자를 뽑고 출력한다.(우승자가 2명 이상인 경우", () => {
    const CARS = [new Car("데이지", 3), new Car("머핀", 3)];

    const winners = new Winner(CARS);

    expect(
      winners.findWinner(CARS).map((winner) => winner.getName()),
    ).toStrictEqual(["데이지", "머핀"]);
  });
});
